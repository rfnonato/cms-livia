import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { YoutubeIcon, Music } from "lucide-react";
import { VideoContent, PodcastContent } from "@/types/mediaContent";
import { fetchVideos, fetchPodcasts } from "@/lib/api/mediaContent";

export function MediaContentSection() {
  // Estado para armazenar o conteúdo carregado do CMS
  const [videos, setVideos] = useState<VideoContent[]>([]);
  const [podcasts, setPodcasts] = useState<PodcastContent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Carregar dados do CMS
  useEffect(() => {
    const loadMediaContent = async () => {
      try {
        setIsLoading(true);
        
        // Buscar dados da API do CMS
        const videosData = await fetchVideos();
        const podcastsData = await fetchPodcasts();
        
        setVideos(videosData);
        setPodcasts(podcastsData);
      } catch (error) {
        console.error("Erro ao carregar conteúdo de mídia:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadMediaContent();
  }, []);

  // Renderizar um vídeo do YouTube
  const renderVideoCard = (video: VideoContent) => (
    <Card key={video.id} className="overflow-hidden">
      <div className="relative pb-[56.25%] bg-gray-100">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Button variant="outline" size="icon" className="rounded-full bg-white/80 hover:bg-white">
            <YoutubeIcon className="h-8 w-8 text-red-600" />
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-2">{video.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{video.description}</p>
        <p className="text-xs text-gray-500">{new Date(video.date).toLocaleDateString()}</p>
      </CardContent>
    </Card>
  );

  // Renderizar um podcast do Spotify
  const renderPodcastCard = (podcast: PodcastContent) => (
    <Card key={podcast.id} className="overflow-hidden">
      <div className="flex items-center p-4">
        <div className="w-16 h-16 mr-4 bg-gray-100 rounded-md overflow-hidden">
          <img 
            src={podcast.thumbnail} 
            alt={podcast.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback para imagem padrão caso a thumbnail não carregue
              (e.target as HTMLImageElement).src = "/podcast-placeholder.jpg";
            }}
          />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-1">{podcast.title}</h3>
          <p className="text-sm text-gray-600 mb-1 line-clamp-2">{podcast.description}</p>
          <p className="text-xs text-gray-500">{new Date(podcast.date).toLocaleDateString()}</p>
        </div>
        <Button variant="ghost" size="icon" className="text-green-600">
          <Music className="h-5 w-5" />
        </Button>
      </div>
    </Card>
  );

  return (
    <section className="py-16 bg-[#F5F2F0]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">CONTEÚDO EM MÍDIA</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Amplie seus conhecimentos em saúde mental e desenvolvimento pessoal com nossos 
          vídeos e podcasts exclusivos.
        </p>

        <Tabs defaultValue="videos" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <YoutubeIcon className="h-4 w-4" /> Vídeos
            </TabsTrigger>
            <TabsTrigger value="podcasts" className="flex items-center gap-2">
              <Music className="h-4 w-4" /> Podcasts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="videos" className="space-y-6">
            {isLoading ? (
              <div className="text-center py-8">Carregando vídeos...</div>
            ) : videos.length === 0 ? (
              <div className="text-center py-8">Nenhum vídeo disponível no momento.</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videos.slice(0, 4).map(renderVideoCard)}
              </div>
            )}
            <div className="text-center mt-6">
              <Button variant="outline">Ver todos os vídeos</Button>
            </div>
          </TabsContent>

          <TabsContent value="podcasts" className="space-y-6">
            {isLoading ? (
              <div className="text-center py-8">Carregando podcasts...</div>
            ) : podcasts.length === 0 ? (
              <div className="text-center py-8">Nenhum podcast disponível no momento.</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {podcasts.slice(0, 4).map(renderPodcastCard)}
              </div>
            )}
            <div className="text-center mt-6">
              <Button variant="outline">Ver todos os podcasts</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
} 