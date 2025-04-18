import { PostContent } from "@/types/postContent";

// Simula uma API que se conecta ao CMS
// Em um ambiente real, isso seria substituído por chamadas reais à API do CMS

// Função para buscar todas as postagens do CMS
export async function fetchPosts(): Promise<PostContent[]> {
  // Simulação de chamada à API - em produção, seria algo como:
  // const response = await fetch('/api/posts');
  // return await response.json();
  
  // Dados mockados para desenvolvimento
  return [
    {
      id: "1",
      title: "Como Lidar com a Ansiedade no Dia a Dia",
      excerpt: "Aprenda técnicas práticas para gerenciar a ansiedade e melhorar sua qualidade de vida.",
      content: "Conteúdo completo do post...",
      coverImage: "/post-1.jpg",
      category: "Saúde Mental",
      date: "2023-11-15",
      author: "Lívia DME",
      slug: "como-lidar-com-ansiedade"
    },
    {
      id: "2",
      title: "A Importância da Terapia para o Autoconhecimento",
      excerpt: "Descubra como o processo terapêutico pode ajudar você a se conhecer melhor e transformar suas relações.",
      content: "Conteúdo completo do post...",
      coverImage: "/post-2.jpg",
      category: "Terapia",
      date: "2023-10-28",
      author: "Lívia DME",
      slug: "importancia-terapia-autoconhecimento"
    },
    {
      id: "3",
      title: "Burnout: Reconhecendo os Sinais e Buscando Ajuda",
      excerpt: "Como identificar os sinais de esgotamento profissional e quais passos tomar para se recuperar.",
      content: "Conteúdo completo do post...",
      coverImage: "/post-3.jpg",
      category: "Saúde Mental",
      date: "2023-10-10",
      author: "Lívia DME",
      slug: "burnout-reconhecendo-sinais"
    },
    {
      id: "4",
      title: "Relacionamentos Saudáveis: O Papel da Comunicação",
      excerpt: "A comunicação efetiva como base para construir e manter relacionamentos equilibrados e gratificantes.",
      content: "Conteúdo completo do post...",
      coverImage: "/post-4.jpg",
      category: "Relacionamentos",
      date: "2023-09-22",
      author: "Lívia DME",
      slug: "relacionamentos-saudaveis-comunicacao"
    }
  ];
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