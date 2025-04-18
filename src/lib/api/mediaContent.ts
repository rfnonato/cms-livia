import { VideoContent, PodcastContent } from "@/types/mediaContent";
import { supabase } from "./supabaseClient";

// Simula uma API que se conecta ao CMS
// Em um ambiente real, isso seria substituído por chamadas reais à API do CMS

// Função para buscar vídeos do CMS
export async function fetchVideos(): Promise<VideoContent[]> {
  const { data, error } = await supabase
    .from('videos')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Erro ao buscar vídeos:', error);
    throw error;
  }

  return data.map(video => ({
    id: video.id,
    title: video.title,
    youtubeId: video.youtube_id,
    thumbnail: video.thumbnail_url,
    description: video.description,
    date: video.created_at
  }));
}

// Função para buscar podcasts do CMS
export async function fetchPodcasts(): Promise<PodcastContent[]> {
  const { data, error } = await supabase
    .from('podcasts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Erro ao buscar podcasts:', error);
    throw error;
  }

  return data.map(podcast => ({
    id: podcast.id,
    title: podcast.title,
    spotifyId: podcast.spotify_id,
    thumbnail: podcast.thumbnail_url,
    description: podcast.description,
    date: podcast.created_at
  }));
} 