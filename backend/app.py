from flask import Flask, send_from_directory
import os

# --- caminhos absolutos para a pasta static do backend ---
# este arquivo é backend/app.py
APP_DIR = os.path.dirname(__file__)
STATIC_DIR = os.path.join(APP_DIR, "src", "static")
ASSETS_DIR = os.path.join(STATIC_DIR, "assets")

app = Flask(__name__)

# --- rotas para servir a UI ---
@app.route("/")
def index():
    return send_from_directory(STATIC_DIR, "index.html")

@app.route("/assets/<path:filename>")
def assets(filename):
    return send_from_directory(ASSETS_DIR, filename)

@app.route("/favicon.ico")
def favicon():
    return send_from_directory(STATIC_DIR, "favicon.ico")

# --- (opcional) fallback de SPA: envia index.html para qualquer rota não /api ---
@app.route("/<path:path>")
def spa_fallback(path):
    try:
        # tenta servir algo que exista dentro de /static
        return send_from_directory(STATIC_DIR, path)
    except Exception:
        # caso contrário, devolve o index (para rotas de SPA)
        return send_from_directory(STATIC_DIR, "index.html")

# --- suas APIs continuam no blueprint atual ---
from src.routes.api import api_bp  # mantém só a API aqui
app.register_blueprint(api_bp, url_prefix="/api")

if __name__ == "__main__":
    app.run(debug=True)
