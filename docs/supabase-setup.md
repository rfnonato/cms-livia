# Configuração do Supabase

Este documento descreve como configurar o Supabase para o CMS Lívia.

## 1. Criar uma conta no Supabase

1. Acesse [https://supabase.com](https://supabase.com)
2. Clique em "Sign Up" e crie uma conta
3. Após criar a conta, faça login no painel

## 2. Criar um novo projeto

1. No painel do Supabase, clique em "New Project"
2. Preencha os detalhes do projeto:
   - Nome: CMS Lívia
   - Database Password: Escolha uma senha forte
   - Region: Escolha a região mais próxima
3. Clique em "Create new project"

## 3. Obter as credenciais

1. No painel do projeto, vá para "Settings" > "API"
2. Copie as seguintes informações:
   - Project URL
   - anon/public key

## 4. Configurar as variáveis de ambiente

1. Crie um arquivo `.env.local` na raiz do projeto
2. Adicione as seguintes variáveis:
   ```
   VITE_SUPABASE_URL=sua_url_do_projeto
   VITE_SUPABASE_ANON_KEY=sua_chave_anonima
   ```

## 5. Criar as tabelas no Supabase

### Opção 1: Usando o SQL Editor

1. No painel do Supabase, vá para "SQL Editor"
2. Crie um novo script
3. Cole o conteúdo do arquivo `src/scripts/createTables.sql`
4. Execute o script

### Opção 2: Usando o script TypeScript

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o script de configuração:
   ```bash
   npm run db:setup
   ```

## 6. Inserir dados iniciais

### Opção 1: Usando o SQL Editor

1. No painel do Supabase, vá para "SQL Editor"
2. Crie um novo script
3. Cole o conteúdo do arquivo `src/scripts/seedData.sql`
4. Execute o script

### Opção 2: Usando o script TypeScript

1. Execute o script de seed:
   ```bash
   npm run db:seed
   ```

## 7. Verificar a configuração

1. Execute o script de teste de conexão:
   ```bash
   npm run db:test
   ```

2. Verifique se a conexão foi estabelecida com sucesso

## 8. Configurar autenticação (opcional)

1. No painel do Supabase, vá para "Authentication" > "Settings"
2. Configure as opções de autenticação conforme necessário
3. Para desenvolvimento, você pode habilitar o modo de email sem confirmação

## 9. Configurar políticas de segurança (opcional)

1. No painel do Supabase, vá para "Authentication" > "Policies"
2. Configure as políticas de acesso para cada tabela
3. Para desenvolvimento, você pode permitir acesso público a todas as tabelas

## Solução de problemas

### Erro ao executar scripts TypeScript

Se você encontrar o erro "Unknown file extension '.ts'", tente:

1. Instalar o ts-node globalmente:
   ```bash
   npm install -g ts-node
   ```

2. Executar os scripts com o ts-node:
   ```bash
   npx ts-node --project tsconfig.json src/scripts/testConnection.ts
   ```

### Erro ao conectar ao Supabase

1. Verifique se as variáveis de ambiente estão configuradas corretamente
2. Verifique se o projeto Supabase está ativo
3. Verifique se as credenciais estão corretas

### Erro ao criar tabelas

1. Verifique se você tem permissões para criar tabelas
2. Verifique se o SQL está correto
3. Verifique se as tabelas já existem 