from datetime import datetime
from typing import Dict, List, Optional
import json
import sqlite3
import os

class Database:
    def __init__(self, db_path: str = "src/database/app.db"):
        self.db_path = db_path
        self.init_db()
    
    def init_db(self):
        """Inicializa o banco de dados com as tabelas necessárias"""
        os.makedirs(os.path.dirname(self.db_path), exist_ok=True)
        
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            
            # Tabela de usuários (para futuras expansões)
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    email TEXT UNIQUE NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            ''')
            
            # Tabela de projetos/sessões de trabalho
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS projects (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    description TEXT,
                    user_id INTEGER,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    FOREIGN KEY (user_id) REFERENCES users (id)
                )
            ''')
            
            # Tabela de arquivos enviados
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS uploaded_files (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    project_id INTEGER,
                    file_name TEXT NOT NULL,
                    file_path TEXT NOT NULL,
                    file_size INTEGER,
                    category_id TEXT NOT NULL,
                    subcategory_id TEXT NOT NULL,
                    input_hours REAL DEFAULT 0,
                    calculated_hours REAL DEFAULT 0,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    FOREIGN KEY (project_id) REFERENCES projects (id)
                )
            ''')
            
            conn.commit()
    
    def get_connection(self):
        """Retorna uma conexão com o banco de dados"""
        return sqlite3.connect(self.db_path)

class HoursCalculator:
    """Classe responsável pelos cálculos de horas complementares"""
    
    @staticmethod
    def get_categories():
        """Retorna as categorias e subcategorias disponíveis"""
        return [
            {
                "id": "grupo1",
                "title": "Grupo I – Atividades de iniciação à docência e pesquisa",
                "subcategories": [
                    {
                        "id": "monitoria",
                        "title": "Exercício de monitoria",
                        "description": "Até 50 horas-aula por semestre, máximo 100 horas-aula",
                        "maxHours": 100,
                        "maxPerEntry": 50,
                        "calculation_type": "direct_limit"
                    },
                    {
                        "id": "pesquisa",
                        "title": "Participação em pesquisas e projetos institucionais",
                        "description": "Até 50 horas-aula por semestre por atividade, máximo 100 horas-aula",
                        "maxHours": 100,
                        "maxPerEntry": 50,
                        "calculation_type": "direct_limit"
                    }
                ]
            },
            {
                "id": "grupo2",
                "title": "Grupo II – Congressos, seminários, conferências e outras atividades assistidas",
                "subcategories": [
                    {
                        "id": "congressos",
                        "title": "Congressos, Seminários, conferências (+ 3h)",
                        "description": "Serão computados 50% da carga horária total do evento",
                        "maxHours": 50,
                        "calculation_type": "percentage",
                        "percentage": 0.5
                    },
                    {
                        "id": "palestras",
                        "title": "Seminários, conferências e palestras (- 3h)",
                        "description": "01 hora-aula por evento",
                        "maxHours": 50,
                        "calculation_type": "direct_limit"
                    },
                    {
                        "id": "defesas",
                        "title": "Defesas de dissertação/tese assistidas",
                        "description": "02 horas-aula por defesa",
                        "maxHours": 10,
                        "calculation_type": "multiplier",
                        "multiplier": 2
                    },
                    {
                        "id": "monografias",
                        "title": "Apresentação de monografias/TCC assistidas",
                        "description": "01 hora por apresentação",
                        "maxHours": 10,
                        "calculation_type": "direct_limit"
                    },
                    {
                        "id": "visitas",
                        "title": "Visitas técnicas coordenadas",
                        "description": "Até 05 horas-aula por visita, máximo 30 horas-aula (informe o total de horas documentadas)",
                        "maxHours": 30,
                        "calculation_type": "direct_limit"
                    }
                ]
            },
            {
                "id": "grupo3",
                "title": "Grupo III – Publicações e apresentação de trabalhos em eventos científicos",
                "subcategories": [
                    {
                        "id": "artigos-referee",
                        "title": "Artigos em revistas com referee",
                        "description": "40 horas-aula por artigo, 20 horas-aula por aluno",
                        "maxHours": 120,
                        "calculation_type": "multiplier",
                        "multiplier": 20
                    },
                    {
                        "id": "artigos-sem-referee",
                        "title": "Artigos em revistas sem referee",
                        "description": "Até 20 horas-aula por artigo, 20 horas-aula por aluno",
                        "maxHours": 100,
                        "calculation_type": "multiplier",
                        "multiplier": 20
                    },
                    {
                        "id": "apresentacoes",
                        "title": "Apresentação de trabalhos em eventos",
                        "description": "30 pontos por trabalho, 30 horas-aula cada um",
                        "maxHours": 120,
                        "calculation_type": "multiplier",
                        "multiplier": 30
                    },
                    {
                        "id": "concursos",
                        "title": "Participação em concursos, exposições e mostras",
                        "description": "10 horas-aula por participação",
                        "maxHours": 50,
                        "calculation_type": "multiplier",
                        "multiplier": 10
                    }
                ]
            },
            {
                "id": "grupo4",
                "title": "Grupo IV – Vivência profissional complementar",
                "subcategories": [
                    {
                        "id": "estagio-nao-curricular",
                        "title": "Estágio não curricular",
                        "description": "40 horas-aula por período (mín. 4 meses, 20h/semanais), máximo 80 horas-aula",
                        "maxHours": 80,
                        "maxPerEntry": 40,
                        "calculation_type": "direct_limit"
                    },
                    {
                        "id": "empresa-junior",
                        "title": "Estágio em Empresa Júnior/Incubadora",
                        "description": "Até 40 horas-aula por período (mín. 4 meses, 20h/semanais), máximo 80 horas-aula",
                        "maxHours": 80,
                        "maxPerEntry": 40,
                        "calculation_type": "direct_limit"
                    },
                    {
                        "id": "projetos-sociais",
                        "title": "Participação em projetos sociais",
                        "description": "Até 30 horas-aula por semestre de participação, máximo 60 horas-aula",
                        "maxHours": 60,
                        "maxPerEntry": 30,
                        "calculation_type": "direct_limit"
                    },
                    {
                        "id": "atividade-profissional",
                        "title": "Atividade profissional específica na área",
                        "description": "Até 40 horas-aula, mínimo de 4 meses",
                        "maxHours": 80,
                        "calculation_type": "direct_limit"
                    },
                    {
                        "id": "representacao-estudantil",
                        "title": "Participação em entidade de representação estudantil",
                        "description": "10 horas-aula por período mínimo de 6 meses",
                        "maxHours": 40,
                        "calculation_type": "multiplier",
                        "multiplier": 10
                    },
                    {
                        "id": "outras-vivencias",
                        "title": "Outras atividades de vivência profissional",
                        "description": "A critério da Diretoria Acadêmica",
                        "maxHours": 80,
                        "calculation_type": "direct_limit"
                    }
                ]
            },
            {
                "id": "grupo5",
                "title": "Grupo V – Cursos de formação complementar",
                "subcategories": [
                    {
                        "id": "cursos-ufsc",
                        "title": "Cursos UFSC na área do curso",
                        "description": "Serão computados 80% da carga horária por evento (até 50 horas-aula por evento), máximo 80 horas-aula",
                        "maxHours": 80,
                        "maxPerEntry": 50,
                        "calculation_type": "percentage",
                        "percentage": 0.8
                    },
                    {
                        "id": "cursos-externos-area",
                        "title": "Cursos externos na área do curso",
                        "description": "Serão computados até 50% da carga horária total",
                        "maxHours": 80,
                        "calculation_type": "percentage",
                        "percentage": 0.5
                    },
                    {
                        "id": "cursos-externos-outras",
                        "title": "Cursos externos fora da área",
                        "description": "Serão computados até 30% da carga horária total",
                        "maxHours": 80,
                        "calculation_type": "percentage",
                        "percentage": 0.3
                    }
                ]
            }
        ]
    
    @staticmethod
    def calculate_hours(input_hours: float, subcategory_id: str) -> float:
        """Calcula as horas baseado na subcategoria e regras específicas"""
        categories = HoursCalculator.get_categories()
        
        for category in categories:
            for subcategory in category["subcategories"]:
                if subcategory["id"] == subcategory_id:
                    calc_type = subcategory["calculation_type"]
                    max_hours = subcategory["maxHours"]
                    
                    if calc_type == "direct_limit":
                        max_per_entry = subcategory.get("maxPerEntry", max_hours)
                        return min(input_hours, max_per_entry)
                    elif calc_type == "percentage":
                        percentage = subcategory.get("percentage", 1.0)
                        max_per_entry = subcategory.get("maxPerEntry", max_hours)
                        return min(input_hours * percentage, max_per_entry)
                    elif calc_type == "multiplier":
                        multiplier = subcategory.get("multiplier", 1.0)
                        return min(input_hours * multiplier, max_hours)
        
        return 0.0

class ProjectManager:
    """Gerenciador de projetos e arquivos"""
    
    def __init__(self, db: Database):
        self.db = db
    
    def create_project(self, name: str, description: str = "", user_id: Optional[int] = None) -> int:
        """Cria um novo projeto"""
        with self.db.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute(
                "INSERT INTO projects (name, description, user_id) VALUES (?, ?, ?)",
                (name, description, user_id)
            )
            return cursor.lastrowid
    
    def get_project(self, project_id: int) -> Optional[Dict]:
        """Busca um projeto por ID"""
        with self.db.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute(
                "SELECT * FROM projects WHERE id = ?",
                (project_id,)
            )
            row = cursor.fetchone()
            if row:
                return {
                    "id": row[0],
                    "name": row[1],
                    "description": row[2],
                    "user_id": row[3],
                    "created_at": row[4],
                    "updated_at": row[5]
                }
        return None
    
    def add_file(self, project_id: int, file_name: str, file_path: str, 
                 file_size: int, category_id: str, subcategory_id: str,
                 input_hours: float = 0) -> int:
        """Adiciona um arquivo ao projeto"""
        calculated_hours = HoursCalculator.calculate_hours(input_hours, subcategory_id)
        
        with self.db.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute('''
                INSERT INTO uploaded_files 
                (project_id, file_name, file_path, file_size, category_id, 
                 subcategory_id, input_hours, calculated_hours)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            ''', (project_id, file_name, file_path, file_size, category_id,
                  subcategory_id, input_hours, calculated_hours))
            
            # Atualiza timestamp do projeto
            cursor.execute(
                "UPDATE projects SET updated_at = CURRENT_TIMESTAMP WHERE id = ?",
                (project_id,)
            )
            
            return cursor.lastrowid
    
    def update_file_hours(self, file_id: int, input_hours: float) -> bool:
        """Atualiza as horas de um arquivo"""
        with self.db.get_connection() as conn:
            cursor = conn.cursor()
            
            # Busca a subcategoria do arquivo
            cursor.execute(
                "SELECT subcategory_id, project_id FROM uploaded_files WHERE id = ?",
                (file_id,)
            )
            row = cursor.fetchone()
            if not row:
                return False
            
            subcategory_id, project_id = row
            calculated_hours = HoursCalculator.calculate_hours(input_hours, subcategory_id)
            
            # Atualiza as horas
            cursor.execute('''
                UPDATE uploaded_files 
                SET input_hours = ?, calculated_hours = ?
                WHERE id = ?
            ''', (input_hours, calculated_hours, file_id))
            
            # Atualiza timestamp do projeto
            cursor.execute(
                "UPDATE projects SET updated_at = CURRENT_TIMESTAMP WHERE id = ?",
                (project_id,)
            )
            
            return True
    
    def remove_file(self, file_id: int) -> bool:
        """Remove um arquivo do projeto"""
        with self.db.get_connection() as conn:
            cursor = conn.cursor()
            
            # Busca o projeto_id antes de deletar
            cursor.execute(
                "SELECT project_id, file_path FROM uploaded_files WHERE id = ?",
                (file_id,)
            )
            row = cursor.fetchone()
            if not row:
                return False
            
            project_id, file_path = row
            
            # Remove o arquivo do banco
            cursor.execute("DELETE FROM uploaded_files WHERE id = ?", (file_id,))
            
            # Remove o arquivo físico se existir
            if os.path.exists(file_path):
                os.remove(file_path)
            
            # Atualiza timestamp do projeto
            cursor.execute(
                "UPDATE projects SET updated_at = CURRENT_TIMESTAMP WHERE id = ?",
                (project_id,)
            )
            
            return True
    
    def get_project_files(self, project_id: int) -> List[Dict]:
        """Busca todos os arquivos de um projeto"""
        with self.db.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute('''
                SELECT id, file_name, file_path, file_size, category_id,
                       subcategory_id, input_hours, calculated_hours, created_at
                FROM uploaded_files 
                WHERE project_id = ?
                ORDER BY created_at DESC
            ''', (project_id,))
            
            files = []
            for row in cursor.fetchall():
                files.append({
                    "id": row[0],
                    "file_name": row[1],
                    "file_path": row[2],
                    "file_size": row[3],
                    "category_id": row[4],
                    "subcategory_id": row[5],
                    "input_hours": row[6],
                    "calculated_hours": row[7],
                    "created_at": row[8]
                })
            
            return files
    
    def get_project_summary(self, project_id: int) -> Dict:
        """Gera um resumo do projeto com totais por categoria"""
        files = self.get_project_files(project_id)
        categories = HoursCalculator.get_categories()
        
        summary = {
            "total_hours": 0,
            "total_files": len(files),
            "categories": {}
        }
        
        # Inicializa categorias
        for category in categories:
            summary["categories"][category["id"]] = {
                "title": category["title"],
                "total_hours": 0,
                "max_hours": sum(sub["maxHours"] for sub in category["subcategories"]),
                "subcategories": {}
            }
            
            for subcategory in category["subcategories"]:
                summary["categories"][category["id"]]["subcategories"][subcategory["id"]] = {
                    "title": subcategory["title"],
                    "total_hours": 0,
                    "max_hours": subcategory["maxHours"],
                    "files": []
                }
        
        # Calcula totais por arquivo
        for file in files:
            category_id = file["category_id"]
            subcategory_id = file["subcategory_id"]
            calculated_hours = file["calculated_hours"]
            
            if category_id in summary["categories"]:
                if subcategory_id in summary["categories"][category_id]["subcategories"]:
                    sub_data = summary["categories"][category_id]["subcategories"][subcategory_id]
                    sub_data["total_hours"] += calculated_hours
                    sub_data["files"].append({
                        "id": file["id"],
                        "name": file["file_name"],
                        "hours": calculated_hours
                    })
        
        # Aplica o limite máximo por subcategoria e recalcula totais
        summary["total_hours"] = 0
        for category_id, cat_data in summary["categories"].items():
            cat_total = 0
            for sub_id, sub_data in cat_data["subcategories"].items():
                # Limita o total da subcategoria ao máximo permitido pela atividade
                sub_data["total_hours"] = min(sub_data["total_hours"], sub_data["max_hours"])
                cat_total += sub_data["total_hours"]
            cat_data["total_hours"] = cat_total
            summary["total_hours"] += cat_total
        
        return summary

