// Tipos Base
export interface BaseModel {
  id: string;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}

// Usuário
export interface User extends BaseModel {
  email: string;
  name: string;
  role: 'admin' | 'editor' | 'viewer';
  avatar_url?: string;
  is_active: boolean;
}

// BLOG POSTS
export interface Post extends BaseModel {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string;
  published_at: string | null; // ISO date string or null if draft
  author_id: string;
  status: 'draft' | 'published' | 'archived';
  meta_title?: string;
  meta_description?: string;
  views_count: number;
  featured: boolean;
}

export interface PostCategory extends BaseModel {
  name: string;
  slug: string;
  description?: string;
  color?: string;
}

export interface PostTag extends BaseModel {
  name: string;
  slug: string;
}

export interface PostCategoryRelation {
  post_id: string;
  category_id: string;
}

export interface PostTagRelation {
  post_id: string;
  tag_id: string;
}

// MÍDIA (VIDEOS/PODCASTS)
export interface VideoContent extends BaseModel {
  title: string;
  description: string;
  youtube_id: string;
  thumbnail: string;
  published_at: string; // ISO date string
  duration_seconds: number;
  featured: boolean;
  category_id?: string;
  tags?: string[];
  transcript?: string;
}

export interface PodcastContent extends BaseModel {
  title: string;
  description: string;
  spotify_id: string;
  apple_podcast_id?: string;
  google_podcast_id?: string;
  thumbnail: string;
  published_at: string; // ISO date string
  duration_seconds: number;
  featured: boolean;
  category_id?: string;
  tags?: string[];
  transcript?: string;
}

export interface MediaCategory extends BaseModel {
  name: string;
  slug: string;
  description?: string;
  type: 'video' | 'podcast' | 'both';
}

// NEWSLETTER
export interface NewsletterSubscriber extends BaseModel {
  email: string;
  name?: string;
  is_active: boolean;
  confirmed_at?: string; // ISO date string
  last_email_sent_at?: string; // ISO date string
  source?: string; // where they subscribed from
  tags?: string[];
}

export interface NewsletterCampaign extends BaseModel {
  title: string;
  subject: string;
  content: string;
  status: 'draft' | 'scheduled' | 'sent';
  scheduled_for?: string; // ISO date string
  sent_at?: string; // ISO date string
  open_count: number;
  click_count: number;
  subscriber_count: number; // number of subscribers it was sent to
}

// PÁGINAS ESTÁTICAS
export interface Page extends BaseModel {
  title: string;
  slug: string;
  content: string;
  status: 'draft' | 'published';
  published_at?: string; // ISO date string
  meta_title?: string;
  meta_description?: string;
  featured_image?: string;
  template?: string; // template to use for rendering
  sort_order?: number; // for controlling page order in menus
  parent_id?: string; // for hierarchical pages
}

// COMPONENTES DE PÁGINA
export interface PageComponent extends BaseModel {
  page_id: string;
  type: string; // tipo de componente (hero, feature, testimonial, etc)
  data: Record<string, any>; // dados específicos do componente em formato JSON
  sort_order: number; // ordem na página
}

// MÍDIA/ARQUIVOS
export interface MediaFile extends BaseModel {
  filename: string;
  original_filename: string;
  file_type: 'image' | 'document' | 'video' | 'audio' | 'other';
  mime_type: string;
  size_bytes: number;
  width?: number; // para imagens
  height?: number; // para imagens
  duration?: number; // para vídeo/áudio
  storage_path: string;
  public_url: string;
  alt_text?: string;
  title?: string;
  uploaded_by: string; // user_id
} 