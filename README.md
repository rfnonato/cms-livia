# Lívia DME - CMS

CMS para gerenciamento de conteúdo do site da Lívia DME, desenvolvido com React, TypeScript e Tailwind CSS, com integração planejada com Supabase.

## Estrutura do Projeto

```
📁 cms-livia/
├── 📁 docs/                  # Documentação do projeto
│   └── 📄 API.md             # Documentação das APIs
├── 📁 public/                # Arquivos estáticos públicos
│   └── 📁 images/            # Imagens do site
├── 📁 src/                   # Código-fonte
│   ├── 📁 components/        # Componentes React reutilizáveis
│   │   ├── 📁 common/        # Componentes comuns (botões, inputs, etc.)
│   │   ├── 📁 dashboard/     # Componentes específicos do dashboard
│   │   ├── 📁 editor/        # Componentes do editor de conteúdo
│   │   ├── 📁 home/          # Componentes da página inicial
│   │   └── 📁 layout/        # Componentes de layout
│   ├── 📁 contexts/          # Contextos React
│   ├── 📁 hooks/             # Hooks personalizados
│   ├── 📁 lib/               # Bibliotecas e utilitários
│   │   └── 📁 api/           # Serviços de API
│   ├── 📁 pages/             # Páginas da aplicação
│   ├── 📁 styles/            # Estilos globais
│   └── 📁 types/             # Definições de tipos TypeScript
│       ├── 📄 models.ts      # Modelos de dados
│       └── 📄 dtos.ts        # DTOs para APIs
├── 📄 .env                   # Variáveis de ambiente (não versionado)
├── 📄 .env.example           # Exemplo de variáveis de ambiente
├── 📄 package.json           # Dependências e scripts
└── 📄 tsconfig.json          # Configuração do TypeScript
```

## Funcionalidades

O CMS permite gerenciar:

1. **Blog**: Posts, categorias e tags
2. **Mídia**: Vídeos do YouTube e podcasts do Spotify
3. **Newsletter**: Assinantes e campanhas de email
4. **Páginas**: Conteúdo estático do site
5. **Mídia**: Upload e gerenciamento de arquivos

## Requisitos

- Node.js 18+
- npm ou yarn
- Conta no Supabase (para quando a integração for implementada)

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/cms-livia.git
cd cms-livia
```

2. Instale as dependências:
```bash
npm install
# ou
yarn
```

3. Copie o arquivo de variáveis de ambiente:
```bash
cp .env.example .env
```

4. Edite o arquivo `.env` com suas configurações

## Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Acesse `http://localhost:5173` no navegador.

## Preparação para Produção

```bash
npm run build
# ou
yarn build
```

## Integração com Supabase

A integração com Supabase será implementada seguindo os passos:

1. Criar projeto no Supabase
2. Configurar o esquema do banco de dados
3. Configurar políticas de segurança
4. Implementar cliente Supabase no frontend
5. Atualizar os serviços de API

Para mais detalhes, consulte a [documentação das APIs](./docs/API.md).

## Modelagem de Dados

Os modelos de dados estão definidos em `src/types/models.ts` seguindo uma estrutura relacionada às necessidades do CMS. Cada entidade (Post, Video, Podcast, etc.) possui suas próprias propriedades e relacionamentos.

## APIs Internas

As APIs internas estão documentadas em [docs/API.md](./docs/API.md) e seguem um padrão RESTful com endpoints específicos para cada seção do CMS. Elas serão implementadas utilizando Supabase como backend.

## Contribuição

1. Crie um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request
