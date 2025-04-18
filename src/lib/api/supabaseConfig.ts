/**
 * Configuração do Supabase
 * Este arquivo contém as configurações e constantes para o Supabase
 */

// Configurações de armazenamento
export const STORAGE_BUCKETS = {
  MEDIA: 'media',
  AVATARS: 'avatars',
  THUMBNAILS: 'thumbnails',
} as const;

// Configurações de tabelas
export const TABLES = {
  USERS: 'users',
  POSTS: 'posts',
  POST_CATEGORIES: 'post_categories',
  POST_TAGS: 'post_tags',
  POST_CATEGORY_RELATIONS: 'post_category_relations',
  POST_TAG_RELATIONS: 'post_tag_relations',
  VIDEOS: 'videos',
  PODCASTS: 'podcasts',
  MEDIA_CATEGORIES: 'media_categories',
  NEWSLETTER_SUBSCRIBERS: 'newsletter_subscribers',
  NEWSLETTER_CAMPAIGNS: 'newsletter_campaigns',
  PAGES: 'pages',
  PAGE_COMPONENTS: 'page_components',
  MEDIA_FILES: 'media_files',
} as const;

// Configurações de funções
export const FUNCTIONS = {
  GET_POSTS_WITH_META: 'get_posts_with_meta',
  INCREMENT_POST_VIEWS: 'increment_post_views',
} as const;

// Configurações de views
export const VIEWS = {
  POSTS_WITH_CATEGORIES: 'posts_with_categories',
} as const;

// Configurações de políticas de segurança
export const RLS_POLICIES = {
  // Políticas para usuários
  USERS: {
    SELECT: 'users_select_policy',
    INSERT: 'users_insert_policy',
    UPDATE: 'users_update_policy',
    DELETE: 'users_delete_policy',
  },
  
  // Políticas para posts
  POSTS: {
    SELECT: 'posts_select_policy',
    INSERT: 'posts_insert_policy',
    UPDATE: 'posts_update_policy',
    DELETE: 'posts_delete_policy',
  },
  
  // Políticas para mídia
  MEDIA: {
    SELECT: 'media_select_policy',
    INSERT: 'media_insert_policy',
    UPDATE: 'media_update_policy',
    DELETE: 'media_delete_policy',
  },
} as const;

// Configurações de autenticação
export const AUTH_CONFIG = {
  // Tempo de expiração do token de acesso (em segundos)
  ACCESS_TOKEN_EXPIRY: 3600, // 1 hora
  
  // Tempo de expiração do token de atualização (em segundos)
  REFRESH_TOKEN_EXPIRY: 2592000, // 30 dias
  
  // Tempo de expiração do token de redefinição de senha (em segundos)
  PASSWORD_RESET_EXPIRY: 3600, // 1 hora
  
  // Tempo de expiração do token de verificação de email (em segundos)
  EMAIL_VERIFICATION_EXPIRY: 86400, // 24 horas
} as const;

// Configurações de cache
export const CACHE_CONFIG = {
  // Tempo de expiração do cache (em segundos)
  EXPIRY: 300, // 5 minutos
  
  // Chaves de cache
  KEYS: {
    POSTS: 'posts',
    POST: 'post',
    CATEGORIES: 'categories',
    TAGS: 'tags',
    VIDEOS: 'videos',
    PODCASTS: 'podcasts',
    PAGES: 'pages',
    USER: 'user',
  },
} as const;

// Configurações de paginação
export const PAGINATION_CONFIG = {
  // Número padrão de itens por página
  DEFAULT_PAGE_SIZE: 10,
  
  // Número máximo de itens por página
  MAX_PAGE_SIZE: 100,
  
  // Número padrão de itens para carregamento inicial
  DEFAULT_INITIAL_LOAD: 20,
} as const;

// Configurações de upload
export const UPLOAD_CONFIG = {
  // Tamanho máximo de arquivo (em bytes)
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  
  // Tipos de arquivo permitidos
  ALLOWED_FILE_TYPES: [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/svg+xml',
    'video/mp4',
    'video/webm',
    'audio/mpeg',
    'audio/ogg',
    'audio/wav',
    'application/pdf',
  ],
  
  // Dimensões máximas para imagens
  MAX_IMAGE_DIMENSIONS: {
    width: 2000,
    height: 2000,
  },
} as const;

// Configurações de notificações
export const NOTIFICATION_CONFIG = {
  // Tipos de notificações
  TYPES: {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info',
  },
  
  // Duração padrão das notificações (em milissegundos)
  DEFAULT_DURATION: 5000,
} as const;

// Configurações de logs
export const LOG_CONFIG = {
  // Níveis de log
  LEVELS: {
    DEBUG: 'debug',
    INFO: 'info',
    WARN: 'warn',
    ERROR: 'error',
  },
  
  // Categorias de log
  CATEGORIES: {
    AUTH: 'auth',
    API: 'api',
    DATABASE: 'database',
    STORAGE: 'storage',
    UI: 'ui',
  },
} as const; 