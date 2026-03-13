# Sistema de Horas Complementares - Pronto para Uso

## 🚀 Como Executar (Windows)

### 1. Executar o Back-end

```powershell
cd backend
..\.venv\Scripts\python.exe src/main.py
```

O back-end estará rodando em: `http://localhost:5000`

### 2. Executar o Front-end (em outro terminal)

```powershell
cd frontend
npm run dev
```

O front-end estará rodando em: `http://localhost:5173`

### 3. Alternativa pela raiz do projeto

```powershell
npm run backend:dev
```

Em outro terminal:

```powershell
npm run dev
```

### 3. Acessar o Sistema

Abra seu navegador e acesse: `http://localhost:5173`

### Observação importante

Não execute `npm run dev` dentro da pasta `backend`, porque isso procura `package.json` em pastas acima e pode iniciar outro Vite por engano.

## 📋 Funcionalidades

✅ **Upload de Arquivos**: Arraste e solte arquivos PDF nas categorias
✅ **Cálculo Automático**: Horas calculadas automaticamente por categoria
✅ **5 Grupos de Categorias**: Todas as categorias de horas complementares
✅ **Relatórios**: Geração automática de ZIP organizado
✅ **Projetos**: Gerenciamento de múltiplos projetos
✅ **Interface Moderna**: Design responsivo e intuitivo

## 🔧 Requisitos

- Python 3.11+ (já configurado no ambiente virtual)
- Node.js 20+
- npm

## 📁 Estrutura

```
.
├── backend/          # Flask API + SQLite
├── frontend/         # React + Vite + Tailwind
└── README.md         # Este arquivo
```

## 🐛 Solução de Problemas

**Porta 5173 em uso**: Feche outro processo Vite aberto e rode novamente o front-end
**Erro no back-end**: Execute com o Python da `.venv`
**Erro no front-end**: Execute `npm install` dentro de `frontend` se faltar dependência
**Erro de conexão**: Verifique se o back-end está em `http://localhost:5000`

## 📞 Suporte

Sistema desenvolvido com base no seu front-end original, integrado com back-end Flask completo.

**Status**: ✅ Pronto para uso
**Versão**: 1.0.0

## 🌐 Deploy (Netlify + Render)

### Front-end no Netlify

- `Base directory`: `frontend`
- `Build command`: `npm install --legacy-peer-deps && npm run build`
- `Publish directory`: `dist`

Defina no Netlify a variavel de ambiente:

- `VITE_API_BASE_URL`: `https://SEU_BACKEND_PUBLICO/api`

### Back-end no Render

Este repositorio ja inclui `render.yaml` pronto para deploy do Flask com Gunicorn.

Passos:

1. No Render, escolha `New +` -> `Blueprint`.
2. Conecte este repositorio.
3. Confirme o servico `sistema-horas-backend`.
4. Apos o deploy, copie a URL publica gerada (ex.: `https://sistema-horas-backend.onrender.com`).
5. No Netlify, configure `VITE_API_BASE_URL` como `https://sistema-horas-backend.onrender.com/api` e faça novo deploy.
