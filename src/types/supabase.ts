/**
 * Tipos para o Supabase
 * Estas interfaces definirão os tipos de dados usados no Supabase
 */
export interface Database {
  public: {
    Tables: {
      // Tabela de usuários
      users: {
        Row: {
          id: string;
          email: string;
          name: string;
          role: string;
          avatar_url?: string;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          name: string;
          role?: string;
          avatar_url?: string;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          email?: string;
          name?: string;
          role?: string;
          avatar_url?: string;
          is_active?: boolean;
          updated_at?: string;
        };
      };
      
      // Tabela de posts
      posts: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string;
          content: string;
          cover_image: string;
          published_at: string | null;
          author_id: string;
          status: string;
          meta_title?: string;
          meta_description?: string;
          views_count: number;
          featured: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          excerpt: string;
          content: string;
          cover_image: string;
          published_at?: string | null;
          author_id: string;
          status?: string;
          meta_title?: string;
          meta_description?: string;
          views_count?: number;
          featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          title?: string;
          slug?: string;
          excerpt?: string;
          content?: string;
          cover_image?: string;
          published_at?: string | null;
          author_id?: string;
          status?: string;
          meta_title?: string;
          meta_description?: string;
          views_count?: number;
          featured?: boolean;
          updated_at?: string;
        };
      };
      
      // Tabela de categorias
      post_categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description?: string;
          color?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string;
          color?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          name?: string;
          slug?: string;
          description?: string;
          color?: string;
          updated_at?: string;
        };
      };
      
      // Tabela de tags
      post_tags: {
        Row: {
          id: string;
          name: string;
          slug: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          name?: string;
          slug?: string;
          updated_at?: string;
        };
      };
      
      // Tabela de relação post-categoria
      post_category_relations: {
        Row: {
          post_id: string;
          category_id: string;
        };
        Insert: {
          post_id: string;
          category_id: string;
        };
        Update: {
          post_id?: string;
          category_id?: string;
        };
      };
      
      // Tabela de relação post-tag
      post_tag_relations: {
        Row: {
          post_id: string;
          tag_id: string;
        };
        Insert: {
          post_id: string;
          tag_id: string;
        };
        Update: {
          post_id?: string;
          tag_id?: string;
        };
      };
      
      // Tabela de vídeos
      videos: {
        Row: {
          id: string;
          title: string;
          description: string;
          youtube_id: string;
          thumbnail: string;
          published_at: string;
          duration_seconds: number;
          featured: boolean;
          category_id?: string;
          tags?: string[];
          transcript?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
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
          created_at?: string;
          updated_at?: string;
        };
        Update: {
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
          updated_at?: string;
        };
      };
      
      // Tabela de podcasts
      podcasts: {
        Row: {
          id: string;
          title: string;
          description: string;
          spotify_id: string;
          apple_podcast_id?: string;
          google_podcast_id?: string;
          thumbnail: string;
          published_at: string;
          duration_seconds: number;
          featured: boolean;
          category_id?: string;
          tags?: string[];
          transcript?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
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
          created_at?: string;
          updated_at?: string;
        };
        Update: {
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
          updated_at?: string;
        };
      };
      
      // Tabela de categorias de mídia
      media_categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description?: string;
          type: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string;
          type: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          name?: string;
          slug?: string;
          description?: string;
          type?: string;
          updated_at?: string;
        };
      };
      
      // Tabela de assinantes da newsletter
      newsletter_subscribers: {
        Row: {
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
        };
        Insert: {
          id?: string;
          email: string;
          name?: string;
          is_active?: boolean;
          confirmed_at?: string;
          last_email_sent_at?: string;
          source?: string;
          tags?: string[];
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          email?: string;
          name?: string;
          is_active?: boolean;
          confirmed_at?: string;
          last_email_sent_at?: string;
          source?: string;
          tags?: string[];
          updated_at?: string;
        };
      };
      
      // Tabela de campanhas de newsletter
      newsletter_campaigns: {
        Row: {
          id: string;
          title: string;
          subject: string;
          content: string;
          status: string;
          scheduled_for?: string;
          sent_at?: string;
          open_count: number;
          click_count: number;
          subscriber_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          subject: string;
          content: string;
          status: string;
          scheduled_for?: string;
          sent_at?: string;
          open_count?: number;
          click_count?: number;
          subscriber_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          title?: string;
          subject?: string;
          content?: string;
          status?: string;
          scheduled_for?: string;
          sent_at?: string;
          open_count?: number;
          click_count?: number;
          subscriber_count?: number;
          updated_at?: string;
        };
      };
      
      // Tabela de páginas
      pages: {
        Row: {
          id: string;
          title: string;
          slug: string;
          content: string;
          status: string;
          published_at?: string;
          meta_title?: string;
          meta_description?: string;
          featured_image?: string;
          template?: string;
          sort_order?: number;
          parent_id?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          content: string;
          status: string;
          published_at?: string;
          meta_title?: string;
          meta_description?: string;
          featured_image?: string;
          template?: string;
          sort_order?: number;
          parent_id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          title?: string;
          slug?: string;
          content?: string;
          status?: string;
          published_at?: string;
          meta_title?: string;
          meta_description?: string;
          featured_image?: string;
          template?: string;
          sort_order?: number;
          parent_id?: string;
          updated_at?: string;
        };
      };
      
      // Tabela de componentes de página
      page_components: {
        Row: {
          id: string;
          page_id: string;
          type: string;
          data: Record<string, any>;
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          page_id: string;
          type: string;
          data: Record<string, any>;
          sort_order: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          page_id?: string;
          type?: string;
          data?: Record<string, any>;
          sort_order?: number;
          updated_at?: string;
        };
      };
      
      // Tabela de arquivos de mídia
      media_files: {
        Row: {
          id: string;
          filename: string;
          original_filename: string;
          file_type: string;
          mime_type: string;
          size_bytes: number;
          width?: number;
          height?: number;
          duration?: number;
          storage_path: string;
          public_url: string;
          alt_text?: string;
          title?: string;
          uploaded_by: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          filename: string;
          original_filename: string;
          file_type: string;
          mime_type: string;
          size_bytes: number;
          width?: number;
          height?: number;
          duration?: number;
          storage_path: string;
          public_url: string;
          alt_text?: string;
          title?: string;
          uploaded_by: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          filename?: string;
          original_filename?: string;
          file_type?: string;
          mime_type?: string;
          size_bytes?: number;
          width?: number;
          height?: number;
          duration?: number;
          storage_path?: string;
          public_url?: string;
          alt_text?: string;
          title?: string;
          uploaded_by?: string;
          updated_at?: string;
        };
      };
    };
    
    // Definições de Views (para consultas complexas)
    Views: {
      posts_with_categories: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string;
          cover_image: string;
          published_at: string | null;
          status: string;
          featured: boolean;
          views_count: number;
          created_at: string;
          updated_at: string;
          author_id: string;
          author_name: string;
          categories: Array<{
            id: string;
            name: string;
            slug: string;
            color?: string;
          }>;
        };
      };
    };
    
    // Funções definidas no Supabase
    Functions: {
      get_posts_with_meta: {
        Args: {
          p_limit: number;
          p_offset: number;
          p_status?: string;
          p_search?: string;
          p_category_id?: string;
          p_tag_id?: string;
          p_author_id?: string;
          p_featured?: boolean;
        };
        Returns: {
          posts: Array<{
            id: string;
            title: string;
            slug: string;
            excerpt: string;
            cover_image: string;
            published_at: string | null;
            status: string;
            featured: boolean;
            views_count: number;
            created_at: string;
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
          }>;
          total: number;
        };
      };
      increment_post_views: {
        Args: {
          p_post_id: string;
        };
        Returns: number;
      };
    };
  };
} 