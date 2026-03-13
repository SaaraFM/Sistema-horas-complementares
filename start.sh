#!/bin/bash

echo "🚀 Iniciando Sistema de Horas Complementares..."

# Função para verificar se um comando existe
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Verificar dependências
echo "📋 Verificando dependências..."

if ! command_exists python3; then
    echo "❌ Python3 não encontrado. Instale Python 3.11+"
    exit 1
fi

if ! command_exists pnpm; then
    echo "❌ pnpm não encontrado. Instalando..."
    npm install -g pnpm
fi

echo "✅ Dependências verificadas!"

# Iniciar back-end
echo "🔧 Iniciando back-end Flask..."
cd backend
source venv/bin/activate
python src/main.py &
BACKEND_PID=$!
cd ..

# Aguardar back-end inicializar
sleep 3

# Iniciar front-end
echo "⚛️ Iniciando front-end React..."
cd frontend
pnpm install
pnpm run dev --host &
FRONTEND_PID=$!
cd ..

echo "✅ Sistema iniciado com sucesso!"
echo "🌐 Acesse: http://localhost:5173"
echo "📡 API: http://localhost:5000"
echo ""
echo "Para parar o sistema, pressione Ctrl+C"

# Aguardar interrupção
trap "echo '🛑 Parando sistema...'; kill $BACKEND_PID $FRONTEND_PID; exit" INT
wait

