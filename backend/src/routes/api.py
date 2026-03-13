from flask import Blueprint, request, jsonify, send_file, send_from_directory
from werkzeug.utils import secure_filename
import os
import zipfile
import tempfile
from datetime import datetime
from src.models.hours import Database, ProjectManager, HoursCalculator

api_bp = Blueprint('api', __name__, url_prefix='/api')

# --- UI / arquivos estáticos ---
ui_bp = Blueprint('ui', __name__)  # sem prefixo -> raiz do site

# Caminho absoluto para backend/src/static (este arquivo está em backend/src/routes)
BASE_DIR = os.path.dirname(os.path.dirname(__file__))  # .../backend/src
STATIC_DIR = os.path.join(BASE_DIR, "static")
ASSETS_DIR = os.path.join(STATIC_DIR, "assets")

@ui_bp.route("/")
def ui_index():
    # entrega backend/src/static/index.html
    return send_from_directory(STATIC_DIR, "index.html")

@ui_bp.route("/assets/<path:filename>")
def ui_assets(filename):
    # entrega backend/src/static/assets/*
    return send_from_directory(ASSETS_DIR, filename)

@ui_bp.route("/favicon.ico")
def ui_favicon():
    return send_from_directory(STATIC_DIR, "favicon.ico")

# (opcional) SPA fallback: qualquer rota desconhecida volta pro index.html
@ui_bp.route("/<path:path>")
def ui_catch_all(path):
    try:
        return send_from_directory(STATIC_DIR, path)
    except Exception as e:
        # Se não encontrar o arquivo, retorna o index.html (SPA)
        try:
            return send_from_directory(STATIC_DIR, "index.html")
        except Exception as err:
            # Se nem o index.html for encontrado, retorna um erro JSON
            return jsonify({
                'success': False,
                'error': f'Arquivo não encontrado: {str(err)}'
            }), 404


# Inicializa o banco de dados e gerenciador
db = Database()
project_manager = ProjectManager(db)

# Configurações de upload
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png', 'txt'}
MAX_FILE_SIZE = 16 * 1024 * 1024  # 16MB

def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def ensure_upload_folder():
    """Garante que a pasta de uploads existe"""
    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)

@api_bp.route('/categories', methods=['GET'])
def get_categories():
    """Retorna todas as categorias e subcategorias disponíveis"""
    try:
        categories = HoursCalculator.get_categories()
        return jsonify({
            'success': True,
            'data': categories
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@api_bp.route('/projects', methods=['POST'])
def create_project():
    """Cria um novo projeto"""
    try:
        data = request.get_json()
        name = data.get('name', f'Projeto {datetime.now().strftime("%Y-%m-%d %H:%M")}')
        description = data.get('description', '')
        user_id = data.get('user_id')
        
        project_id = project_manager.create_project(name, description, user_id)
        
        return jsonify({
            'success': True,
            'data': {
                'project_id': project_id,
                'name': name,
                'description': description
            }
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@api_bp.route('/projects/<int:project_id>', methods=['GET'])
def get_project(project_id):
    """Busca um projeto específico"""
    try:
        project = project_manager.get_project(project_id)
        if not project:
            return jsonify({
                'success': False,
                'error': 'Projeto não encontrado'
            }), 404
        
        return jsonify({
            'success': True,
            'data': project
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@api_bp.route('/projects/<int:project_id>/files', methods=['GET'])
def get_project_files(project_id):
    """Busca todos os arquivos de um projeto"""
    try:
        files = project_manager.get_project_files(project_id)
        return jsonify({
            'success': True,
            'data': files
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@api_bp.route('/projects/<int:project_id>/summary', methods=['GET'])
def get_project_summary(project_id):
    """Gera resumo do projeto com totais por categoria"""
    try:
        summary = project_manager.get_project_summary(project_id)
        return jsonify({
            'success': True,
            'data': summary
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@api_bp.route('/projects/<int:project_id>/upload', methods=['POST'])
def upload_file(project_id):
    """Upload de arquivo para um projeto"""
    try:
        # Verifica se o projeto existe
        project = project_manager.get_project(project_id)
        if not project:
            return jsonify({
                'success': False,
                'error': 'Projeto não encontrado'
            }), 404
        
        # Verifica se há arquivo na requisição
        if 'file' not in request.files:
            return jsonify({
                'success': False,
                'error': 'Nenhum arquivo enviado'
            }), 400
        
        file = request.files['file']
        category_id = request.form.get('category_id')
        subcategory_id = request.form.get('subcategory_id')
        input_hours = float(request.form.get('input_hours', 0))
        
        if not category_id or not subcategory_id:
            return jsonify({
                'success': False,
                'error': 'Categoria e subcategoria são obrigatórias'
            }), 400
        
        if file.filename == '':
            return jsonify({
                'success': False,
                'error': 'Nenhum arquivo selecionado'
            }), 400
        
        if not allowed_file(file.filename):
            return jsonify({
                'success': False,
                'error': 'Tipo de arquivo não permitido'
            }), 400
        
        # Salva o arquivo
        ensure_upload_folder()
        filename = secure_filename(file.filename)
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        unique_filename = f"{timestamp}_{filename}"
        file_path = os.path.join(UPLOAD_FOLDER, unique_filename)
        
        file.save(file_path)
        file_size = os.path.getsize(file_path)
        
        # Adiciona ao banco de dados
        file_id = project_manager.add_file(
            project_id, filename, file_path, file_size,
            category_id, subcategory_id, input_hours
        )
        
        # Calcula as horas
        calculated_hours = HoursCalculator.calculate_hours(input_hours, subcategory_id)
        
        return jsonify({
            'success': True,
            'data': {
                'file_id': file_id,
                'filename': filename,
                'calculated_hours': calculated_hours,
                'input_hours': input_hours
            }
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@api_bp.route('/files/<int:file_id>/hours', methods=['PUT'])
def update_file_hours(file_id):
    """Atualiza as horas de um arquivo"""
    try:
        data = request.get_json(force=True, silent=True)
        if not data:
            return jsonify({
                'success': False,
                'error': 'JSON inválido ou não enviado'
            }), 400
        input_hours = float(data.get('input_hours', 0))

        success = project_manager.update_file_hours(file_id, input_hours)

        if not success:
            return jsonify({
                'success': False,
                'error': 'Arquivo não encontrado'
            }), 404

        return jsonify({
            'success': True,
            'message': 'Horas atualizadas com sucesso'
        })

    except Exception as e:
        # Garante que sempre retorna JSON, mesmo em erro inesperado
        return jsonify({
            'success': False,
            'error': f'Erro interno: {str(e)}'
        }), 500

@api_bp.route('/files/<int:file_id>', methods=['DELETE'])
def delete_file(file_id):
    """Remove um arquivo"""
    try:
        success = project_manager.remove_file(file_id)
        
        if not success:
            return jsonify({
                'success': False,
                'error': 'Arquivo não encontrado'
            }), 404
        
        return jsonify({
            'success': True,
            'message': 'Arquivo removido com sucesso'
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@api_bp.route('/calculate-hours', methods=['POST'])
def calculate_hours():
    """Calcula horas para uma subcategoria específica"""
    try:
        data = request.get_json()
        input_hours = float(data.get('input_hours', 0))
        subcategory_id = data.get('subcategory_id')
        
        if not subcategory_id:
            return jsonify({
                'success': False,
                'error': 'Subcategoria é obrigatória'
            }), 400
        
        calculated_hours = HoursCalculator.calculate_hours(input_hours, subcategory_id)
        
        return jsonify({
            'success': True,
            'data': {
                'input_hours': input_hours,
                'calculated_hours': calculated_hours,
                'subcategory_id': subcategory_id
            }
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@api_bp.route('/projects/<int:project_id>/download', methods=['GET'])
def download_project_zip(project_id):
    """Gera e baixa um arquivo ZIP organizado do projeto"""
    try:
        # Verifica se o projeto existe
        project = project_manager.get_project(project_id)
        if not project:
            return jsonify({
                'success': False,
                'error': 'Projeto não encontrado'
            }), 404
        
        # Busca arquivos e resumo
        files = project_manager.get_project_files(project_id)
        summary = project_manager.get_project_summary(project_id)
        categories = HoursCalculator.get_categories()
        
        # Cria arquivo temporário
        temp_dir = tempfile.mkdtemp()
        zip_path = os.path.join(temp_dir, f'Atividades_Complementares_{project_id}.zip')
        
        with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
            # Organiza arquivos por categoria e subcategoria
            for category in categories:
                category_id = category['id']
                category_title = category['title']
                
                for subcategory in category['subcategories']:
                    subcategory_id = subcategory['id']
                    subcategory_title = subcategory['title']
                    
                    # Busca arquivos desta subcategoria
                    subcategory_files = [
                        f for f in files 
                        if f['category_id'] == category_id and f['subcategory_id'] == subcategory_id
                    ]
                    
                    if subcategory_files:
                        for file_data in subcategory_files:
                            if os.path.exists(file_data['file_path']):
                                # Nome do arquivo com horas calculadas
                                base_name = os.path.splitext(file_data['file_name'])[0]
                                extension = os.path.splitext(file_data['file_name'])[1]
                                new_filename = f"{base_name}_{file_data['calculated_hours']}h{extension}"
                                
                                # Caminho no ZIP
                                zip_file_path = f"Atividades Complementares/{category_title}/{subcategory_title}/{new_filename}"
                                
                                # Adiciona ao ZIP
                                zipf.write(file_data['file_path'], zip_file_path)
            
            # Gera arquivo de resumo
            summary_content = generate_summary_text(summary, project['name'])
            zipf.writestr("Atividades Complementares/Resumo_Horas_Complementares.txt", summary_content)
        
        return send_file(
            zip_path,
            as_attachment=True,
            download_name=f'Atividades_Complementares_{project["name"]}.zip',
            mimetype='application/zip'
        )
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

def generate_summary_text(summary, project_name):
    """Gera o texto do resumo das horas complementares"""
    text = f'RESUMO DAS HORAS COMPLEMENTARES\n'
    text += f'Projeto: {project_name}\n'
    text += '=====================================\n\n'
    
    for category_id, category_data in summary['categories'].items():
        if category_data['total_hours'] > 0:
            text += f"{category_data['title']}\n"
            text += '-' * len(category_data['title']) + '\n'
            
            for subcategory_id, subcategory_data in category_data['subcategories'].items():
                if subcategory_data['total_hours'] > 0:
                    text += f"  {subcategory_data['title']}: {subcategory_data['total_hours']}h / {subcategory_data['max_hours']}h\n"
                    
                    for file_info in subcategory_data['files']:
                        text += f"    - {file_info['name']}: {file_info['hours']}h\n"
            
            text += f"Total da categoria: {category_data['total_hours']}h\n\n"
    
    text += f"TOTAL GERAL: {summary['total_hours']}h\n"
    text += f"Total de arquivos: {summary['total_files']}\n"
    text += f"Data de geração: {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}\n"
    
    return text

@api_bp.route('/health', methods=['GET'])
def health_check():
    """Endpoint de verificação de saúde da API"""
    return jsonify({
        'success': True,
        'message': 'API funcionando corretamente',
        'timestamp': datetime.now().isoformat()
    })

