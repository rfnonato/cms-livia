/**
 * Cliente API para comunicação com o Supabase
 * Este arquivo define a estrutura básica para interagir com o backend do Supabase
 * Quando a integração for realizada, o arquivo será atualizado com o cliente real do Supabase
 */

import { 
  PaginationParams, PostQueryParams, MediaQueryParams, 
  SubscriberQueryParams, PageQueryParams, MediaFileQueryParams,
  CreatePostDto, UpdatePostDto, PostResponseDto, PostListItemDto,
  PostCategoryDto, PostTagDto,
  CreateVideoDto, UpdateVideoDto, VideoResponseDto,
  CreatePodcastDto, UpdatePodcastDto, PodcastResponseDto,
  MediaCategoryDto,
  CreateSubscriberDto, UpdateSubscriberDto, SubscriberResponseDto,
  CreateCampaignDto, UpdateCampaignDto, CampaignResponseDto,
  CreatePageDto, UpdatePageDto, PageResponseDto, PageListItemDto,
  UploadMediaFileDto, UpdateMediaFileDto, MediaFileResponseDto
} from '@/types/dtos';
import { supabase } from './supabaseClient';

/**
 * Interface para a resposta paginada da API
 */
export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

/**
 * Classe base para todos os serviços de API
 * Implementa o cliente Supabase para todas as operações
 */
export class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string = '/api') {
    this.baseUrl = baseUrl;
  }

  protected async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    const { data, error } = await supabase
      .from(endpoint)
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data as T;
  }

  protected async post<T>(endpoint: string, data: any): Promise<T> {
    const { data: response, error } = await supabase
      .from(endpoint)
      .insert(data)
      .select()
      .single();

    if (error) throw error;
    return response as T;
  }

  protected async put<T>(endpoint: string, data: any): Promise<T> {
    const { data: response, error } = await supabase
      .from(endpoint)
      .update(data)
      .eq('id', data.id)
      .select()
      .single();

    if (error) throw error;
    return response as T;
  }

  protected async delete<T>(endpoint: string, id: string): Promise<T> {
    const { data, error } = await supabase
      .from(endpoint)
      .delete()
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data as T;
  }

  protected buildQueryString(params: Record<string, any>): string {
    if (!params) return '';
    const query = Object.entries(params)
      .filter(([_, value]) => value !== undefined && value !== null)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
      .join('&');
    return query ? `?${query}` : '';
  }
}

/**
 * Serviço para gerenciar posts do blog
 */
export class PostsService extends ApiService {
  constructor(baseUrl?: string) {
    super(baseUrl);
  }

  async getPosts(params?: PostQueryParams): Promise<PaginatedResponse<PostListItemDto>> {
    return this.get<PaginatedResponse<PostListItemDto>>('/posts' + this.buildQueryString(params || {}));
  }

  async getPostById(id: string): Promise<PostResponseDto> {
    return this.get<PostResponseDto>(`/posts/${id}`);
  }

  async getPostBySlug(slug: string): Promise<PostResponseDto> {
    return this.get<PostResponseDto>(`/posts/slug/${slug}`);
  }

  async createPost(data: CreatePostDto): Promise<PostResponseDto> {
    return this.post<PostResponseDto>('/posts', data);
  }

  async updatePost(id: string, data: UpdatePostDto): Promise<PostResponseDto> {
    return this.put<PostResponseDto>(`/posts/${id}`, data);
  }

  async deletePost(id: string): Promise<{ success: boolean }> {
    return this.delete<{ success: boolean }>('/posts', id);
  }

  // Funções para gerenciar categorias
  async getCategories(): Promise<{ id: string; name: string; slug: string; description?: string; color?: string; }[]> {
    return this.get<{ id: string; name: string; slug: string; description?: string; color?: string; }[]>('/posts/categories');
  }

  async createCategory(data: PostCategoryDto): Promise<{ id: string; name: string; slug: string; description?: string; color?: string; }> {
    return this.post<{ id: string; name: string; slug: string; description?: string; color?: string; }>('/posts/categories', data);
  }

  async updateCategory(id: string, data: PostCategoryDto): Promise<{ id: string; name: string; slug: string; description?: string; color?: string; }> {
    return this.put<{ id: string; name: string; slug: string; description?: string; color?: string; }>(`/posts/categories/${id}`, data);
  }

  async deleteCategory(id: string): Promise<{ success: boolean }> {
    return this.delete<{ success: boolean }>('/posts/categories', id);
  }

  // Funções para gerenciar tags
  async getTags(): Promise<{ id: string; name: string; slug: string; }[]> {
    return this.get<{ id: string; name: string; slug: string; }[]>('/posts/tags');
  }

  async createTag(data: PostTagDto): Promise<{ id: string; name: string; slug: string; }> {
    return this.post<{ id: string; name: string; slug: string; }>('/posts/tags', data);
  }

  async updateTag(id: string, data: PostTagDto): Promise<{ id: string; name: string; slug: string; }> {
    return this.put<{ id: string; name: string; slug: string; }>(`/posts/tags/${id}`, data);
  }

  async deleteTag(id: string): Promise<{ success: boolean }> {
    return this.delete<{ success: boolean }>('/posts/tags', id);
  }
}

/**
 * Serviço para gerenciar vídeos do YouTube
 */
export class VideosService extends ApiService {
  constructor(baseUrl?: string) {
    super(baseUrl);
  }

  async getVideos(params?: MediaQueryParams): Promise<PaginatedResponse<VideoResponseDto>> {
    return this.get<PaginatedResponse<VideoResponseDto>>('/videos' + this.buildQueryString(params || {}));
  }

  async getVideoById(id: string): Promise<VideoResponseDto> {
    return this.get<VideoResponseDto>(`/videos/${id}`);
  }

  async createVideo(data: CreateVideoDto): Promise<VideoResponseDto> {
    return this.post<VideoResponseDto>('/videos', data);
  }

  async updateVideo(id: string, data: UpdateVideoDto): Promise<VideoResponseDto> {
    return this.put<VideoResponseDto>(`/videos/${id}`, data);
  }

  async deleteVideo(id: string): Promise<{ success: boolean }> {
    return this.delete<{ success: boolean }>('/videos', id);
  }

  async getCategories(): Promise<{ id: string; name: string; slug: string; description?: string; type: string; }[]> {
    return this.get<{ id: string; name: string; slug: string; description?: string; type: string; }[]>('/media/categories');
  }
}

/**
 * Serviço para gerenciar podcasts do Spotify
 */
export class PodcastsService extends ApiService {
  constructor(baseUrl?: string) {
    super(baseUrl);
  }

  async getPodcasts(params?: MediaQueryParams): Promise<PaginatedResponse<PodcastResponseDto>> {
    return this.get<PaginatedResponse<PodcastResponseDto>>('/podcasts' + this.buildQueryString(params || {}));
  }

  async getPodcastById(id: string): Promise<PodcastResponseDto> {
    return this.get<PodcastResponseDto>(`/podcasts/${id}`);
  }

  async createPodcast(data: CreatePodcastDto): Promise<PodcastResponseDto> {
    return this.post<PodcastResponseDto>('/podcasts', data);
  }

  async updatePodcast(id: string, data: UpdatePodcastDto): Promise<PodcastResponseDto> {
    return this.put<PodcastResponseDto>(`/podcasts/${id}`, data);
  }

  async deletePodcast(id: string): Promise<{ success: boolean }> {
    return this.delete<{ success: boolean }>('/podcasts', id);
  }
}

/**
 * Serviço compartilhado para gerenciar categorias de mídia
 */
export class MediaCategoriesService extends ApiService {
  constructor(baseUrl?: string) {
    super(baseUrl);
  }

  async getCategories(): Promise<{ id: string; name: string; slug: string; description?: string; type: string; }[]> {
    return this.get<{ id: string; name: string; slug: string; description?: string; type: string; }[]>('/media/categories');
  }

  async createCategory(data: MediaCategoryDto): Promise<{ id: string; name: string; slug: string; description?: string; type: string; }> {
    return this.post<{ id: string; name: string; slug: string; description?: string; type: string; }>('/media/categories', data);
  }

  async updateCategory(id: string, data: MediaCategoryDto): Promise<{ id: string; name: string; slug: string; description?: string; type: string; }> {
    return this.put<{ id: string; name: string; slug: string; description?: string; type: string; }>(`/media/categories/${id}`, data);
  }

  async deleteCategory(id: string): Promise<{ success: boolean }> {
    return this.delete<{ success: boolean }>('/media/categories', id);
  }
}

/**
 * Serviço para gerenciar assinantes da newsletter
 */
export class SubscribersService extends ApiService {
  constructor(baseUrl?: string) {
    super(baseUrl);
  }

  async getSubscribers(params?: SubscriberQueryParams): Promise<PaginatedResponse<SubscriberResponseDto>> {
    return this.get<PaginatedResponse<SubscriberResponseDto>>('/newsletter/subscribers' + this.buildQueryString(params || {}));
  }

  async getSubscriberById(id: string): Promise<SubscriberResponseDto> {
    return this.get<SubscriberResponseDto>(`/newsletter/subscribers/${id}`);
  }

  async createSubscriber(data: CreateSubscriberDto): Promise<SubscriberResponseDto> {
    return this.post<SubscriberResponseDto>('/newsletter/subscribers', data);
  }

  async updateSubscriber(id: string, data: UpdateSubscriberDto): Promise<SubscriberResponseDto> {
    return this.put<SubscriberResponseDto>(`/newsletter/subscribers/${id}`, data);
  }

  async deleteSubscriber(id: string): Promise<{ success: boolean }> {
    return this.delete<{ success: boolean }>('/newsletter/subscribers', id);
  }

  async exportSubscribers(params?: SubscriberQueryParams): Promise<Blob> {
    return this.get<Blob>('/newsletter/subscribers/export' + this.buildQueryString(params || {}));
  }
}

/**
 * Serviço para gerenciar campanhas de newsletter
 */
export class CampaignsService extends ApiService {
  constructor(baseUrl?: string) {
    super(baseUrl);
  }

  async getCampaigns(params?: PaginationParams): Promise<PaginatedResponse<CampaignResponseDto>> {
    return this.get<PaginatedResponse<CampaignResponseDto>>('/newsletter/campaigns' + this.buildQueryString(params || {}));
  }

  async getCampaignById(id: string): Promise<CampaignResponseDto> {
    return this.get<CampaignResponseDto>(`/newsletter/campaigns/${id}`);
  }

  async createCampaign(data: CreateCampaignDto): Promise<CampaignResponseDto> {
    return this.post<CampaignResponseDto>('/newsletter/campaigns', data);
  }

  async updateCampaign(id: string, data: UpdateCampaignDto): Promise<CampaignResponseDto> {
    return this.put<CampaignResponseDto>(`/newsletter/campaigns/${id}`, data);
  }

  async deleteCampaign(id: string): Promise<{ success: boolean }> {
    return this.delete<{ success: boolean }>('/newsletter/campaigns', id);
  }

  async sendCampaignTest(id: string, emails: string[]): Promise<{ success: boolean }> {
    return this.post<{ success: boolean }>(`/newsletter/campaigns/${id}/test`, { emails });
  }

  async sendCampaign(id: string): Promise<{ success: boolean }> {
    return this.post<{ success: boolean }>(`/newsletter/campaigns/${id}/send`, {});
  }
}

/**
 * Serviço para gerenciar páginas estáticas
 */
export class PagesService extends ApiService {
  constructor(baseUrl?: string) {
    super(baseUrl);
  }

  async getPages(params?: PageQueryParams): Promise<PaginatedResponse<PageListItemDto>> {
    return this.get<PaginatedResponse<PageListItemDto>>('/pages' + this.buildQueryString(params || {}));
  }

  async getPageById(id: string): Promise<PageResponseDto> {
    return this.get<PageResponseDto>(`/pages/${id}`);
  }

  async getPageBySlug(slug: string): Promise<PageResponseDto> {
    return this.get<PageResponseDto>(`/pages/slug/${slug}`);
  }

  async createPage(data: CreatePageDto): Promise<PageResponseDto> {
    return this.post<PageResponseDto>('/pages', data);
  }

  async updatePage(id: string, data: UpdatePageDto): Promise<PageResponseDto> {
    return this.put<PageResponseDto>(`/pages/${id}`, data);
  }

  async deletePage(id: string): Promise<{ success: boolean }> {
    return this.delete<{ success: boolean }>('/pages', id);
  }

  async getTemplates(): Promise<{ id: string; name: string; }[]> {
    return this.get<{ id: string; name: string; }[]>('/pages/templates');
  }
}

/**
 * Serviço para gerenciar arquivos de mídia
 */
export class MediaFilesService extends ApiService {
  constructor(baseUrl?: string) {
    super(baseUrl);
  }

  async getMediaFiles(params?: MediaFileQueryParams): Promise<PaginatedResponse<MediaFileResponseDto>> {
    return this.get<PaginatedResponse<MediaFileResponseDto>>('/media/files' + this.buildQueryString(params || {}));
  }

  async getMediaFileById(id: string): Promise<MediaFileResponseDto> {
    return this.get<MediaFileResponseDto>(`/media/files/${id}`);
  }

  async uploadMediaFile(data: UploadMediaFileDto): Promise<MediaFileResponseDto> {
    // Aqui será necessário uma implementação especial para upload de arquivos
    // Usando FormData e integração com storage do Supabase
    const formData = new FormData();
    formData.append('file', data.file);
    if (data.alt_text) formData.append('alt_text', data.alt_text);
    if (data.title) formData.append('title', data.title);
    
    console.log('Upload file', formData);
    return {} as MediaFileResponseDto;
  }

  async updateMediaFile(id: string, data: UpdateMediaFileDto): Promise<MediaFileResponseDto> {
    return this.put<MediaFileResponseDto>(`/media/files/${id}`, data);
  }

  async deleteMediaFile(id: string): Promise<{ success: boolean }> {
    return this.delete<{ success: boolean }>('/media/files', id);
  }
}

// Exportando instâncias dos serviços para uso na aplicação
export const postsService = new PostsService();
export const videosService = new VideosService();
export const podcastsService = new PodcastsService();
export const mediaCategoriesService = new MediaCategoriesService();
export const subscribersService = new SubscribersService();
export const campaignsService = new CampaignsService();
export const pagesService = new PagesService();
export const mediaFilesService = new MediaFilesService(); 