# Guia de Definição 4X

Landing page do Guia de Definição 4X - Método de emagrecimento e definição corporal.

## 🚀 Deploy no Vercel

### Opção 1: Deploy via GitHub

1. Faça upload deste projeto para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com) e faça login
3. Clique em "Add New Project"
4. Importe o repositório do GitHub
5. O Vercel detectará automaticamente as configurações do Vite
6. Clique em "Deploy"

### Opção 2: Deploy via CLI

```bash
# Instale a CLI do Vercel
npm i -g vercel

# Na pasta do projeto, execute:
vercel
```

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
├── src/
│   ├── assets/          # Imagens e assets
│   ├── components/      # Componentes React
│   │   ├── ui/          # Componentes UI (shadcn/ui)
│   │   └── figma/       # Componentes auxiliares
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Entry point
│   └── index.css        # Estilos (Tailwind CSS)
├── index.html           # HTML principal
├── package.json         # Dependências
├── vite.config.ts       # Configuração do Vite
└── tsconfig.json        # Configuração TypeScript
```

## 🎨 Tecnologias

- **React 18** - Biblioteca UI
- **Vite** - Build tool
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Framework CSS
- **shadcn/ui** - Componentes UI
- **Radix UI** - Primitivos de UI acessíveis
- **Lucide React** - Ícones
