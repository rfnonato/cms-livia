# Documentação das APIs do CMS

Este documento descreve as APIs internas do CMS que serão utilizadas para conectar o frontend ao Supabase.

## Introdução

O sistema é composto por várias APIs RESTful que fornecem funcionalidades para gerenciar o conteúdo do CMS, incluindo:

- Posts do blog
- Vídeos do YouTube
- Podcasts do Spotify
- Assinantes da newsletter
- Campanhas de email
- Páginas estáticas
- Arquivos de mídia

Todas as APIs seguem um padrão semelhante e retornam respostas em formato JSON.

## Base URL

A URL base para todas as APIs é `/api`.

## Autenticação

**Importante:** Quando integrado ao Supabase, todas as APIs que modificam dados (POST, PUT, DELETE) exigirão autenticação. Isto será implementado usando o sistema de autenticação do Supabase.

## Padrões de Resposta

### Resposta de Sucesso

```json
{
  "data": {}, // Dados da resposta
  "meta": {} // Metadados, como paginação
}
```

### Resposta Paginada

```json
{
  "data": [], // Array de items
  "meta": {
    "total": 100, // Total de items
    "page": 1, // Página atual
    "limit": 10, // Limite de items por página
    "totalPages": 10 // Total de páginas
  }
}
```

### Resposta de Erro

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Descrição do erro"
  }
}
```

## APIs Disponíveis

### Posts do Blog

#### Obter Todos os Posts

- **URL**: `/api/posts`
- **Método**: `GET`
- **Parâmetros de Query**:
  - `page`: Número da página (default: 1)
  - `limit`: Limite de items por página (default: 10)
  - `status`: Status dos posts (`draft`, `published`, `archived`, `all`) (default: `published`)
  - `category`: ID da categoria
  - `tag`: ID da tag
  - `search`: Termo de busca
  - `author_id`: ID do autor
  - `featured`: Posts em destaque (`true`, `false`)
  - `sort_by`: Campo para ordenação (`created_at`, `updated_at`, `published_at`, `views_count`, `title`)
  - `sort_order`: Ordem de classificação (`asc`, `desc`)
- **Resposta**: Lista paginada de posts

#### Obter Post por ID

- **URL**: `/api/posts/:id`
- **Método**: `GET`
- **Resposta**: Post completo com categorias e tags

#### Obter Post por Slug

- **URL**: `/api/posts/slug/:slug`
- **Método**: `GET`
- **Resposta**: Post completo com categorias e tags

#### Criar Post

- **URL**: `/api/posts`
- **Método**: `POST`
- **Body**: Dados do post (ver `CreatePostDto` em `src/types/dtos.ts`)
- **Resposta**: Post criado

#### Atualizar Post

- **URL**: `/api/posts/:id`
- **Método**: `PUT`
- **Body**: Dados do post (ver `UpdatePostDto` em `src/types/dtos.ts`)
- **Resposta**: Post atualizado

#### Excluir Post

- **URL**: `/api/posts/:id`
- **Método**: `DELETE`
- **Resposta**: `{ "success": true }`

#### Obter Categorias

- **URL**: `/api/posts/categories`
- **Método**: `GET`
- **Resposta**: Lista de categorias

#### Criar Categoria

- **URL**: `/api/posts/categories`
- **Método**: `POST`
- **Body**: Dados da categoria (ver `PostCategoryDto` em `src/types/dtos.ts`)
- **Resposta**: Categoria criada

#### Atualizar Categoria

- **URL**: `/api/posts/categories/:id`
- **Método**: `PUT`
- **Body**: Dados da categoria (ver `PostCategoryDto` em `src/types/dtos.ts`)
- **Resposta**: Categoria atualizada

#### Excluir Categoria

- **URL**: `/api/posts/categories/:id`
- **Método**: `DELETE`
- **Resposta**: `{ "success": true }`

#### Obter Tags

- **URL**: `/api/posts/tags`
- **Método**: `GET`
- **Resposta**: Lista de tags

#### Criar Tag

- **URL**: `/api/posts/tags`
- **Método**: `POST`
- **Body**: Dados da tag (ver `PostTagDto` em `src/types/dtos.ts`)
- **Resposta**: Tag criada

#### Atualizar Tag

- **URL**: `/api/posts/tags/:id`
- **Método**: `PUT`
- **Body**: Dados da tag (ver `PostTagDto` em `src/types/dtos.ts`)
- **Resposta**: Tag atualizada

#### Excluir Tag

- **URL**: `/api/posts/tags/:id`
- **Método**: `DELETE`
- **Resposta**: `{ "success": true }`

### Vídeos

#### Obter Todos os Vídeos

- **URL**: `/api/videos`
- **Método**: `GET`
- **Parâmetros de Query**:
  - `page`: Número da página (default: 1)
  - `limit`: Limite de items por página (default: 10)
  - `category_id`: ID da categoria
  - `featured`: Vídeos em destaque (`true`, `false`)
  - `search`: Termo de busca
  - `sort_by`: Campo para ordenação (`created_at`, `published_at`, `title`)
  - `sort_order`: Ordem de classificação (`asc`, `desc`)
- **Resposta**: Lista paginada de vídeos

#### Obter Vídeo por ID

- **URL**: `/api/videos/:id`
- **Método**: `GET`
- **Resposta**: Vídeo completo

#### Criar Vídeo

- **URL**: `/api/videos`
- **Método**: `POST`
- **Body**: Dados do vídeo (ver `CreateVideoDto` em `src/types/dtos.ts`)
- **Resposta**: Vídeo criado

#### Atualizar Vídeo

- **URL**: `/api/videos/:id`
- **Método**: `PUT`
- **Body**: Dados do vídeo (ver `UpdateVideoDto` em `src/types/dtos.ts`)
- **Resposta**: Vídeo atualizado

#### Excluir Vídeo

- **URL**: `/api/videos/:id`
- **Método**: `DELETE`
- **Resposta**: `{ "success": true }`

### Podcasts

#### Obter Todos os Podcasts

- **URL**: `/api/podcasts`
- **Método**: `GET`
- **Parâmetros de Query**:
  - `page`: Número da página (default: 1)
  - `limit`: Limite de items por página (default: 10)
  - `category_id`: ID da categoria
  - `featured`: Podcasts em destaque (`true`, `false`)
  - `search`: Termo de busca
  - `sort_by`: Campo para ordenação (`created_at`, `published_at`, `title`)
  - `sort_order`: Ordem de classificação (`asc`, `desc`)
- **Resposta**: Lista paginada de podcasts

#### Obter Podcast por ID

- **URL**: `/api/podcasts/:id`
- **Método**: `GET`
- **Resposta**: Podcast completo

#### Criar Podcast

- **URL**: `/api/podcasts`
- **Método**: `POST`
- **Body**: Dados do podcast (ver `CreatePodcastDto` em `src/types/dtos.ts`)
- **Resposta**: Podcast criado

#### Atualizar Podcast

- **URL**: `/api/podcasts/:id`
- **Método**: `PUT`
- **Body**: Dados do podcast (ver `UpdatePodcastDto` em `src/types/dtos.ts`)
- **Resposta**: Podcast atualizado

#### Excluir Podcast

- **URL**: `/api/podcasts/:id`
- **Método**: `DELETE`
- **Resposta**: `{ "success": true }`

### Categorias de Mídia

#### Obter Todas as Categorias

- **URL**: `/api/media/categories`
- **Método**: `GET`
- **Resposta**: Lista de categorias de mídia

#### Criar Categoria

- **URL**: `/api/media/categories`
- **Método**: `POST`
- **Body**: Dados da categoria (ver `MediaCategoryDto` em `src/types/dtos.ts`)
- **Resposta**: Categoria criada

#### Atualizar Categoria

- **URL**: `/api/media/categories/:id`
- **Método**: `PUT`
- **Body**: Dados da categoria (ver `MediaCategoryDto` em `src/types/dtos.ts`)
- **Resposta**: Categoria atualizada

#### Excluir Categoria

- **URL**: `/api/media/categories/:id`
- **Método**: `DELETE`
- **Resposta**: `{ "success": true }`

### Newsletter

#### Obter Todos os Assinantes

- **URL**: `/api/newsletter/subscribers`
- **Método**: `GET`
- **Parâmetros de Query**:
  - `page`: Número da página (default: 1)
  - `limit`: Limite de items por página (default: 10)
  - `is_active`: Status de ativação (`true`, `false`)
  - `confirmed`: Status de confirmação (`true`, `false`)
  - `search`: Termo de busca
  - `tag`: Tag do assinante
  - `sort_by`: Campo para ordenação (`created_at`, `name`, `email`)
  - `sort_order`: Ordem de classificação (`asc`, `desc`)
- **Resposta**: Lista paginada de assinantes

#### Obter Assinante por ID

- **URL**: `/api/newsletter/subscribers/:id`
- **Método**: `GET`
- **Resposta**: Assinante completo

#### Criar Assinante

- **URL**: `/api/newsletter/subscribers`
- **Método**: `POST`
- **Body**: Dados do assinante (ver `CreateSubscriberDto` em `src/types/dtos.ts`)
- **Resposta**: Assinante criado

#### Atualizar Assinante

- **URL**: `/api/newsletter/subscribers/:id`
- **Método**: `PUT`
- **Body**: Dados do assinante (ver `UpdateSubscriberDto` em `src/types/dtos.ts`)
- **Resposta**: Assinante atualizado

#### Excluir Assinante

- **URL**: `/api/newsletter/subscribers/:id`
- **Método**: `DELETE`
- **Resposta**: `{ "success": true }`

#### Exportar Assinantes

- **URL**: `/api/newsletter/subscribers/export`
- **Método**: `GET`
- **Parâmetros de Query**: Mesmos parâmetros do endpoint `/api/newsletter/subscribers`
- **Resposta**: Arquivo CSV com assinantes

#### Obter Todas as Campanhas

- **URL**: `/api/newsletter/campaigns`
- **Método**: `GET`
- **Parâmetros de Query**:
  - `page`: Número da página (default: 1)
  - `limit`: Limite de items por página (default: 10)
- **Resposta**: Lista paginada de campanhas

#### Obter Campanha por ID

- **URL**: `/api/newsletter/campaigns/:id`
- **Método**: `GET`
- **Resposta**: Campanha completa

#### Criar Campanha

- **URL**: `/api/newsletter/campaigns`
- **Método**: `POST`
- **Body**: Dados da campanha (ver `CreateCampaignDto` em `src/types/dtos.ts`)
- **Resposta**: Campanha criada

#### Atualizar Campanha

- **URL**: `/api/newsletter/campaigns/:id`
- **Método**: `PUT`
- **Body**: Dados da campanha (ver `UpdateCampaignDto` em `src/types/dtos.ts`)
- **Resposta**: Campanha atualizada

#### Excluir Campanha

- **URL**: `/api/newsletter/campaigns/:id`
- **Método**: `DELETE`
- **Resposta**: `{ "success": true }`

#### Enviar Teste de Campanha

- **URL**: `/api/newsletter/campaigns/:id/test`
- **Método**: `POST`
- **Body**: `{ "emails": ["email1@example.com", "email2@example.com"] }`
- **Resposta**: `{ "success": true }`

#### Enviar Campanha

- **URL**: `/api/newsletter/campaigns/:id/send`
- **Método**: `POST`
- **Resposta**: `{ "success": true }`

### Páginas Estáticas

#### Obter Todas as Páginas

- **URL**: `/api/pages`
- **Método**: `GET`
- **Parâmetros de Query**:
  - `page`: Número da página (default: 1)
  - `limit`: Limite de items por página (default: 10)
  - `status`: Status das páginas (`draft`, `published`, `all`) (default: `published`)
  - `parent_id`: ID da página pai (use `root` para páginas de nível superior)
  - `search`: Termo de busca
  - `template`: Template da página
  - `sort_by`: Campo para ordenação (`created_at`, `updated_at`, `published_at`, `sort_order`, `title`)
  - `sort_order`: Ordem de classificação (`asc`, `desc`)
- **Resposta**: Lista paginada de páginas

#### Obter Página por ID

- **URL**: `/api/pages/:id`
- **Método**: `GET`
- **Resposta**: Página completa com componentes

#### Obter Página por Slug

- **URL**: `/api/pages/slug/:slug`
- **Método**: `GET`
- **Resposta**: Página completa com componentes

#### Criar Página

- **URL**: `/api/pages`
- **Método**: `POST`
- **Body**: Dados da página (ver `CreatePageDto` em `src/types/dtos.ts`)
- **Resposta**: Página criada

#### Atualizar Página

- **URL**: `/api/pages/:id`
- **Método**: `PUT`
- **Body**: Dados da página (ver `UpdatePageDto` em `src/types/dtos.ts`)
- **Resposta**: Página atualizada

#### Excluir Página

- **URL**: `/api/pages/:id`
- **Método**: `DELETE`
- **Resposta**: `{ "success": true }`

#### Obter Templates

- **URL**: `/api/pages/templates`
- **Método**: `GET`
- **Resposta**: Lista de templates disponíveis

### Arquivos de Mídia

#### Obter Todos os Arquivos

- **URL**: `/api/media/files`
- **Método**: `GET`
- **Parâmetros de Query**:
  - `page`: Número da página (default: 1)
  - `limit`: Limite de items por página (default: 10)
  - `file_type`: Tipo de arquivo (`image`, `document`, `video`, `audio`, `other`, `all`) (default: `all`)
  - `search`: Termo de busca
  - `sort_by`: Campo para ordenação (`created_at`, `filename`, `size_bytes`)
  - `sort_order`: Ordem de classificação (`asc`, `desc`)
- **Resposta**: Lista paginada de arquivos

#### Obter Arquivo por ID

- **URL**: `/api/media/files/:id`
- **Método**: `GET`
- **Resposta**: Arquivo completo

#### Fazer Upload de Arquivo

- **URL**: `/api/media/files`
- **Método**: `POST`
- **Body**: FormData com campo `file` e opcionalmente `alt_text` e `title`
- **Resposta**: Arquivo criado

#### Atualizar Arquivo

- **URL**: `/api/media/files/:id`
- **Método**: `PUT`
- **Body**: Dados do arquivo (ver `UpdateMediaFileDto` em `src/types/dtos.ts`)
- **Resposta**: Arquivo atualizado

#### Excluir Arquivo

- **URL**: `/api/media/files/:id`
- **Método**: `DELETE`
- **Resposta**: `{ "success": true }`

## Integração com Supabase

Quando a integração com o Supabase for implementada, a classe `ApiService` no arquivo `src/lib/api/apiClient.ts` será atualizada para utilizar o cliente Supabase para as operações de banco de dados. As operações seguirão esta estrutura:

```typescript
// Exemplo de implementação do método getPosts usando Supabase
async getPosts(params?: PostQueryParams): Promise<PaginatedResponse<PostListItemDto>> {
  const { data, error, count } = await supabase
    .from('posts')
    .select('*, author:users(*), post_category_relations!inner(category:post_categories(*))', { count: 'exact' })
    .eq('status', params?.status || 'published')
    .order(params?.sort_by || 'created_at', { ascending: params?.sort_order === 'asc' })
    .range((params?.page || 1) - 1, (params?.page || 1) * (params?.limit || 10) - 1);

  if (error) throw new Error(error.message);
  
  return {
    data: data as unknown as PostListItemDto[],
    meta: {
      total: count || 0,
      page: params?.page || 1,
      limit: params?.limit || 10,
      totalPages: Math.ceil((count || 0) / (params?.limit || 10))
    }
  };
}
```

### Estrutura das Tabelas no Supabase

A estrutura das tabelas no Supabase seguirá o modelo definido no arquivo `src/lib/api/supabaseClient.ts`. As tabelas principais serão:

- `users`: Usuários do sistema
- `posts`: Posts do blog
- `post_categories`: Categorias de posts
- `post_tags`: Tags de posts
- `post_category_relations`: Relação entre posts e categorias
- `post_tag_relations`: Relação entre posts e tags
- `videos`: Vídeos do YouTube
- `podcasts`: Podcasts do Spotify
- `media_categories`: Categorias de mídia
- `newsletter_subscribers`: Assinantes da newsletter
- `newsletter_campaigns`: Campanhas de email
- `pages`: Páginas estáticas
- `page_components`: Componentes de página
- `media_files`: Arquivos de mídia

### Políticas de Segurança

No Supabase, serão configuradas políticas de segurança para cada tabela, garantindo que:

1. Apenas usuários autenticados possam modificar dados
2. Usuários possam ler apenas o conteúdo que devem ter acesso
3. Administradores tenham acesso completo a todas as tabelas

### Storage

O Supabase Storage será utilizado para armazenar arquivos de mídia, com buckets separados para:

- `images`: Imagens do site
- `documents`: Documentos
- `videos`: Arquivos de vídeo
- `audios`: Arquivos de áudio

## Próximos Passos para Integração

1. Criar projeto no Supabase
2. Configurar esquema do banco de dados (tabelas, relacionamentos, etc.)
3. Configurar políticas de segurança
4. Configurar buckets de storage
5. Implementar cliente Supabase na aplicação
6. Atualizar serviços de API para usar o Supabase
7. Testar integração 