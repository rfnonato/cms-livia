import { PostContent } from "@/types/postContent";
import { supabase } from "./supabaseClient";

// Simula uma API que se conecta ao CMS
// Em um ambiente real, isso seria substituído por chamadas reais à API do CMS

// Função para buscar todas as postagens do CMS
export async function fetchPosts(): Promise<PostContent[]> {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      post_categories (
        name
      ),
      users (
        name
      )
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Erro ao buscar posts:', error);
    throw error;
  }

  return data.map(post => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    coverImage: post.cover_image,
    category: post.post_categories?.name || 'Sem categoria',
    date: post.created_at,
    author: post.users?.name || 'Autor desconhecido',
    slug: post.slug
  }));
}

// Função para buscar uma postagem específica por slug
export async function fetchPostBySlug(slug: string): Promise<PostContent | null> {
  const posts = await fetchPosts();
  return posts.find(post => post.slug === slug) || null;
}

// Função para buscar postagens por categoria
export async function fetchPostsByCategory(category: string): Promise<PostContent[]> {
  const posts = await fetchPosts();
  return posts.filter(post => post.category === category);
} 