# ContentMinimal CMS - Documentação

## Índice
1. [Introdução](#introdução)
2. [Arquitetura](#arquitetura)
3. [Tecnologias](#tecnologias)
4. [Estrutura do Projeto](#estrutura-do-projeto)
5. [Componentes Principais](#componentes-principais)
6. [Páginas](#páginas)
7. [Instalação e Setup](#instalação-e-setup)
8. [Desenvolvimento](#desenvolvimento)
9. [Configuração](#configuração)
10. [Estilização](#estilização)
11. [Fluxos Principais](#fluxos-principais)
12. [Integração e Extensões](#integração-e-extensões)

## Introdução

ContentMinimal é um sistema de gerenciamento de conteúdo (CMS) moderno e minimalista projetado especificamente para criadores de conteúdo digital e influenciadores. Ele oferece uma interface intuitiva para gerenciar blogs, páginas, mídia, newsletters e configurações do site.

O CMS foi construído com foco em:
- **Simplicidade**: Interface limpa e intuitiva
- **Eficiência**: Fluxos de trabalho otimizados para criação de conteúdo
- **Flexibilidade**: Personalização para diferentes tipos de conteúdo
- **SEO**: Ferramentas integradas para otimização de mecanismos de busca

## Arquitetura

ContentMinimal segue uma arquitetura baseada em componentes utilizando React e TypeScript. A arquitetura pode ser dividida em várias camadas:

1. **Interface do Usuário (UI)**: Componentes reutilizáveis usando shadcn/ui
2. **Layout**: Estruturas de página consistentes (DashboardLayout, Sidebar)
3. **Páginas**: Componentes de nível superior para cada rota
4. **Rotas**: Gerenciamento de navegação usando React Router
5. **Estado**: Gerenciamento local de estado usando React hooks
6. **Consultas de Dados**: TanStack Query para gerenciamento de dados

## Tecnologias

O projeto é construído com as seguintes tecnologias:

- **Vite**: Build tool e servidor de desenvolvimento
- **React**: Biblioteca UI
- **TypeScript**: Suporte a tipagem estática
- **React Router**: Navegação entre páginas
- **shadcn/ui**: Sistema de componentes baseado em Radix UI
- **Tailwind CSS**: Framework CSS utilitário
- **Lucide React**: Biblioteca de ícones
- **React Hook Form**: Gerenciamento de formulários
- **TanStack Query**: Gerenciamento de dados e estado
- **clsx/tailwind-merge**: Utilitários para manipulação de classes

## Estrutura do Projeto

```
contentminimal/
├── docs/                   # Documentação
├── public/                 # Arquivos estáticos
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── layout/         # Componentes de layout
│   │   └── ui/             # Componentes de interface
│   ├── features/           # Funcionalidades específicas
│   ├── hooks/              # Hooks personalizados
│   ├── lib/                # Utilidades e funções auxiliares
│   ├── pages/              # Componentes de página
│   ├── App.tsx             # Componente raiz e configuração de rotas
│   └── main.tsx            # Ponto de entrada da aplicação
├── package.json            # Dependências e scripts
├── tailwind.config.ts      # Configuração do Tailwind CSS
├── tsconfig.json           # Configuração do TypeScript
└── vite.config.ts          # Configuração do Vite
```

## Componentes Principais

### Componentes de Layout

- **DashboardLayout**: Layout principal para todas as páginas administrativas
- **Sidebar**: Barra lateral de navegação com links para diferentes seções

### Componentes UI

O ContentMinimal utiliza uma ampla gama de componentes do shadcn/ui, incluindo:

- **Button**: Botões com diferentes variantes e tamanhos
- **Card**: Cartões para agrupamento de conteúdo
- **Dialog**: Modais e diálogos
- **Input/Textarea**: Campos de entrada
- **Select**: Seletores dropdown
- **Table**: Tabelas para visualização de dados
- **Tabs**: Navegação por abas
- **Toast**: Notificações do sistema

## Páginas

O CMS conta com as seguintes páginas principais:

### Dashboard (`/admin`)
Visão geral do sistema com métricas e atividades recentes.

### Posts (`/admin/posts`)
Lista de todos os posts do blog com opções para filtrar por status. Inclui:
- Visualização de posts (publicados, rascunhos, agendados)
- Opções para editar, visualizar e excluir posts
- Criação de novos posts

### Editor de Posts (`/admin/posts/new` e `/admin/posts/edit/:id`)
Interface completa para criação e edição de conteúdo:
- Editor de texto rico
- Configurações de SEO
- Opções de publicação (status, visibilidade, agendamento)
- Categorias e tags
- Upload de imagem destacada

### Mídia (`/admin/media`)
Biblioteca de mídia para gerenciar arquivos:
- Upload de arquivos
- Organização por tipo (imagem, vídeo, áudio)
- Integração com serviços externos (YouTube, Spotify)
- Opções para visualizar, baixar e excluir arquivos

### Newsletter (`/admin/newsletter`)
Gerenciamento de campanhas de e-mail:
- Lista de assinantes
- Criação de campanhas
- Modelos de e-mail
- Estatísticas de envio

### Páginas (`/admin/pages`)
Gerenciamento de páginas estáticas:
- Lista de páginas publicadas
- Criação de novas páginas
- Edição de páginas existentes

### Construtor de Páginas (`/admin/pages/new` e `/admin/pages/edit/:id`)
Interface para construir páginas:
- Elementos de página arrastáveis
- Configurações de SEO
- Opções de publicação

### Configurações (`/admin/settings`)
Configurações do sistema com várias abas:
- **Geral**: Nome do site, URL, descrição, fuso horário, idioma
- **Perfil**: Informações do usuário
- **Aparência**: Tema, cores, fontes
- **Redes Sociais**: Links para plataformas sociais
- **Notificações**: Preferências de notificação
- **Segurança**: Senhas, autenticação de dois fatores

## Instalação e Setup

### Requisitos
- Node.js (versão recomendada: 18.x ou superior)
- npm ou yarn ou bun

### Instalação

```bash
# Clonar o repositório
git clone <URL_DO_REPOSITORIO>

# Entrar na pasta do projeto
cd contentminimal

# Instalar dependências
npm install
# ou
yarn install
# ou
bun install
```

### Executando Localmente

```bash
# Iniciar o servidor de desenvolvimento
npm run dev
# ou
yarn dev
# ou
bun dev
```

O servidor de desenvolvimento estará disponível em `http://localhost:8080`.

## Desenvolvimento

### Adicionando Novos Componentes

Para adicionar novos componentes UI baseados no shadcn/ui:

```bash
npx shadcn-ui@latest add [NOME_DO_COMPONENTE]
```

### Convenções de Código

- Use TypeScript para todos os componentes e funções
- Siga a estrutura de pastas existente
- Use componentes funcionais com hooks
- Mantenha os componentes pequenos e focados em uma única responsabilidade
- Use a função `cn()` para combinar classes do Tailwind

## Configuração

### Configuração do Tailwind

O arquivo `tailwind.config.ts` contém a configuração do Tailwind CSS, incluindo:

- Tema personalizado
- Cores do sistema
- Animações
- Plugins

### Aliases de Importação

Os aliases de importação estão configurados no `tsconfig.json` e `vite.config.ts`:

- `@/*` aponta para o diretório `./src/*`

## Estilização

O ContentMinimal utiliza Tailwind CSS para estilização com um tema personalizado. Os principais aspectos de estilização incluem:

- **Tema de Cores**: Sistema de cores consistente com variáveis CSS
- **Responsividade**: Layout adaptável para diferentes tamanhos de tela
- **Dark Mode**: Suporte para tema escuro (configurável)
- **Componentes**: Estilização consistente através de componentes shadcn/ui

## Fluxos Principais

### Criação e Publicação de Post

1. Navegue até `/admin/posts`
2. Clique em "New Post"
3. Preencha o título e conteúdo
4. Configure opções de SEO, categorias e imagem destacada
5. Selecione status (rascunho, publicado, agendado)
6. Clique em "Publish" ou "Save as Draft"

### Gerenciamento de Mídia

1. Navegue até `/admin/media`
2. Use as abas para filtrar por tipo de mídia
3. Clique em "Add Media" para fazer upload ou adicionar link externo
4. Selecione arquivos para operações em lote
5. Use o menu de ações para visualizar, baixar ou excluir arquivos

### Configuração do Site

1. Navegue até `/admin/settings`
2. Selecione a aba apropriada (Geral, Perfil, Aparência, etc.)
3. Modifique as configurações conforme necessário
4. Clique em "Save Changes" para aplicar

## Integração e Extensões

O ContentMinimal pode ser estendido para integrar com serviços externos:

- **Redes Sociais**: Compartilhamento automático de conteúdo
- **Plataformas de Mídia**: YouTube, Spotify, Apple Podcasts
- **Serviços de Email**: Integração com provedores de email marketing
- **Analytics**: Rastreamento de desempenho do conteúdo 