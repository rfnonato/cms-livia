// DTOs para Operações de API

// ------- POST DTOs --------
export interface CreatePostDto {
  title: string;
  slug?: string; // se não fornecido, será gerado automaticamente
  excerpt: string;
  content: string;
  cover_image: string;
  published_at?: string | null;
  status: 'draft' | 'published' | 'archived';
  meta_title?: string;
  meta_description?: string;
  featured?: boolean;
  categories?: string[]; // IDs das categorias
  tags?: string[]; // IDs das tags
}

export interface UpdatePostDto {
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  cover_image?: string;
  published_at?: string | null;
  status?: 'draft' | 'published' | 'archived';
  meta_title?: string;
  meta_description?: string;
  featured?: boolean;
  categories?: string[]; // IDs das categorias
  tags?: string[]; // IDs das tags
}

export interface PostResponseDto {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string;
  published_at: string | null;
  status: 'draft' | 'published' | 'archived';
  meta_title?: string;
  meta_description?: string;
  views_count: number;
  featured: boolean;
  created_at: string;
  updated_at: string;
  author: {
    id: string;
    name: string;
    avatar_url?: string;
  };
  categories: Array<{
    id: string;
    name: string;
    slug: string;
    color?: string;
  }>;
  tags: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
}

export interface PostListItemDto {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  cover_image: string;
  published_at: string | null;
  status: 'draft' | 'published' | 'archived';
  featured: boolean;
  views_count: number;
  created_at: string;
  updated_at: string;
  author: {
    id: string;
    name: string;
  };
  categories: Array<{
    id: string;
    name: string;
    slug: string;
    color?: string;
  }>;
}

export interface PostCategoryDto {
  name: string;
  slug?: string;
  description?: string;
  color?: string;
}

export interface PostTagDto {
  name: string;
  slug?: string;
}

// ------- MEDIA DTOs --------
export interface CreateVideoDto {
  title: string;
  description: string;
  youtube_id: string;
  thumbnail: string;
  published_at: string;
  duration_seconds: number;
  featured?: boolean;
  category_id?: string;
  tags?: string[];
  transcript?: string;
}

export interface UpdateVideoDto {
  title?: string;
  description?: string;
  youtube_id?: string;
  thumbnail?: string;
  published_at?: string;
  duration_seconds?: number;
  featured?: boolean;
  category_id?: string;
  tags?: string[];
  transcript?: string;
}

export interface VideoResponseDto extends CreateVideoDto {
  id: string;
  created_at: string;
  updated_at: string;
  category?: {
    id: string;
    name: string;
    slug: string;
  };
}

export interface CreatePodcastDto {
  title: string;
  description: string;
  spotify_id: string;
  apple_podcast_id?: string;
  google_podcast_id?: string;
  thumbnail: string;
  published_at: string;
  duration_seconds: number;
  featured?: boolean;
  category_id?: string;
  tags?: string[];
  transcript?: string;
}

export interface UpdatePodcastDto {
  title?: string;
  description?: string;
  spotify_id?: string;
  apple_podcast_id?: string;
  google_podcast_id?: string;
  thumbnail?: string;
  published_at?: string;
  duration_seconds?: number;
  featured?: boolean;
  category_id?: string;
  tags?: string[];
  transcript?: string;
}

export interface PodcastResponseDto extends CreatePodcastDto {
  id: string;
  created_at: string;
  updated_at: string;
  category?: {
    id: string;
    name: string;
    slug: string;
  };
}

export interface MediaCategoryDto {
  name: string;
  slug?: string;
  description?: string;
  type: 'video' | 'podcast' | 'both';
}

// ------- NEWSLETTER DTOs --------
export interface CreateSubscriberDto {
  email: string;
  name?: string;
  source?: string;
  tags?: string[];
}

export interface UpdateSubscriberDto {
  name?: string;
  is_active?: boolean;
  tags?: string[];
}

export interface SubscriberResponseDto {
  id: string;
  email: string;
  name?: string;
  is_active: boolean;
  confirmed_at?: string;
  last_email_sent_at?: string;
  source?: string;
  tags?: string[];
  created_at: string;
  updated_at: string;
}

export interface CreateCampaignDto {
  title: string;
  subject: string;
  content: string;
  status: 'draft' | 'scheduled' | 'sent';
  scheduled_for?: string;
}

export interface UpdateCampaignDto {
  title?: string;
  subject?: string;
  content?: string;
  status?: 'draft' | 'scheduled' | 'sent';
  scheduled_for?: string;
}

export interface CampaignResponseDto {
  id: string;
  title: string;
  subject: string;
  content: string;
  status: 'draft' | 'scheduled' | 'sent';
  scheduled_for?: string;
  sent_at?: string;
  open_count: number;
  click_count: number;
  subscriber_count: number;
  created_at: string;
  updated_at: string;
}

// ------- PAGE DTOs --------
export interface CreatePageDto {
  title: string;
  slug?: string;
  content: string;
  status: 'draft' | 'published';
  published_at?: string;
  meta_title?: string;
  meta_description?: string;
  featured_image?: string;
  template?: string;
  sort_order?: number;
  parent_id?: string;
  components?: {
    type: string;
    data: Record<string, any>;
    sort_order: number;
  }[];
}

export interface UpdatePageDto {
  title?: string;
  slug?: string;
  content?: string;
  status?: 'draft' | 'published';
  published_at?: string;
  meta_title?: string;
  meta_description?: string;
  featured_image?: string;
  template?: string;
  sort_order?: number;
  parent_id?: string;
  components?: {
    id?: string; // se existente
    type: string;
    data: Record<string, any>;
    sort_order: number;
  }[];
}

export interface PageResponseDto {
  id: string;
  title: string;
  slug: string;
  content: string;
  status: 'draft' | 'published';
  published_at?: string;
  meta_title?: string;
  meta_description?: string;
  featured_image?: string;
  template?: string;
  sort_order?: number;
  parent_id?: string;
  created_at: string;
  updated_at: string;
  components: Array<{
    id: string;
    type: string;
    data: Record<string, any>;
    sort_order: number;
  }>;
}

export interface PageListItemDto {
  id: string;
  title: string;
  slug: string;
  status: 'draft' | 'published';
  published_at?: string;
  template?: string;
  sort_order?: number;
  parent_id?: string;
  created_at: string;
  updated_at: string;
}

// ------- MEDIA FILE DTOs --------
export interface UploadMediaFileDto {
  file: File;
  alt_text?: string;
  title?: string;
}

export interface UpdateMediaFileDto {
  alt_text?: string;
  title?: string;
}

export interface MediaFileResponseDto {
  id: string;
  filename: string;
  original_filename: string;
  file_type: 'image' | 'document' | 'video' | 'audio' | 'other';
  mime_type: string;
  size_bytes: number;
  width?: number;
  height?: number;
  duration?: number;
  public_url: string;
  alt_text?: string;
  title?: string;
  uploaded_by: {
    id: string;
    name: string;
  };
  created_at: string;
  updated_at: string;
}

// ------- QUERY PARAMS --------
export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface PostQueryParams extends PaginationParams {
  status?: 'draft' | 'published' | 'archived' | 'all';
  category?: string;
  tag?: string;
  search?: string;
  author_id?: string;
  featured?: boolean;
  sort_by?: 'created_at' | 'updated_at' | 'published_at' | 'views_count' | 'title';
  sort_order?: 'asc' | 'desc';
}

export interface MediaQueryParams extends PaginationParams {
  category_id?: string;
  featured?: boolean;
  search?: string;
  sort_by?: 'created_at' | 'published_at' | 'title';
  sort_order?: 'asc' | 'desc';
}

export interface SubscriberQueryParams extends PaginationParams {
  is_active?: boolean;
  confirmed?: boolean;
  search?: string;
  tag?: string;
  sort_by?: 'created_at' | 'name' | 'email';
  sort_order?: 'asc' | 'desc';
}

export interface PageQueryParams extends PaginationParams {
  status?: 'draft' | 'published' | 'all';
  parent_id?: string | 'root';
  search?: string;
  template?: string;
  sort_by?: 'created_at' | 'updated_at' | 'published_at' | 'sort_order' | 'title';
  sort_order?: 'asc' | 'desc';
}

export interface MediaFileQueryParams extends PaginationParams {
  file_type?: 'image' | 'document' | 'video' | 'audio' | 'other' | 'all';
  search?: string;
  sort_by?: 'created_at' | 'filename' | 'size_bytes';
  sort_order?: 'asc' | 'desc';
} 