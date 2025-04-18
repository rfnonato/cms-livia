import { VideoContent, PodcastContent } from "@/types/mediaContent";

// Simula uma API que se conecta ao CMS
// Em um ambiente real, isso seria substituído por chamadas reais à API do CMS

// Função para buscar vídeos do CMS
export async function fetchVideos(): Promise<VideoContent[]> {
  // Simulação de chamada à API - em produção, seria algo como:
  // const response = await fetch('/api/videos');
  // return await response.json();
  
  // Dados mockados para desenvolvimento
  return [
    {
      id: "1",
      title: "Entendendo a Ansiedade",
      youtubeId: "dQw4w9WgXcQ", // ID de exemplo
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
      description: "Como identificar e lidar com os sintomas de ansiedade no dia a dia.",
      date: "2023-10-15"
    },
    {
      id: "2",
      title: "Práticas de Autocuidado",
      youtubeId: "dQw4w9WgXcQ", // ID de exemplo
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
      description: "Dicas simples para incorporar o autocuidado na sua rotina diária.",
      date: "2023-09-22"
    },
    {
      id: "3",
      title: "Como Lidar com o Estresse",
      youtubeId: "dQw4w9WgXcQ", // ID de exemplo
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
      description: "Estratégias práticas para reduzir o estresse e melhorar sua qualidade de vida.",
      date: "2023-08-10"
    }
  ];
}

// Função para buscar podcasts do CMS
export async function fetchPodcasts(): Promise<PodcastContent[]> {
  // Simulação de chamada à API - em produção, seria algo como:
  // const response = await fetch('/api/podcasts');
  // return await response.json();
  
  // Dados mockados para desenvolvimento
  return [
    {
      id: "1",
      title: "Saúde Mental e Relacionamentos",
      spotifyId: "2KYVnNiwQQKmZOhXzMwNyP", // ID de exemplo
      thumbnail: "/podcast-thumbnail-1.jpg",
      description: "Como nossa saúde mental afeta nossos relacionamentos interpessoais.",
      date: "2023-10-10"
    },
    {
      id: "2",
      title: "Mindfulness para Iniciantes",
      spotifyId: "2KYVnNiwQQKmZOhXzMwNyP", // ID de exemplo
      thumbnail: "/podcast-thumbnail-2.jpg",
      description: "Um guia prático para começar a praticar mindfulness no seu dia a dia.",
      date: "2023-09-15"
    },
    {
      id: "3",
      title: "Conversando Sobre Depressão",
      spotifyId: "2KYVnNiwQQKmZOhXzMwNyP", // ID de exemplo
      thumbnail: "/podcast-thumbnail-3.jpg",
      description: "Desmistificando a depressão e discutindo formas de tratamento e apoio.",
      date: "2023-08-20"
    }
  ];
} 