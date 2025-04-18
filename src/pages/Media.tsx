import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Film,
  Image,
  Mic,
  Music,
  Plus,
  Search,
  MoreHorizontal,
  Eye,
  Download,
  Copy,
  Trash2,
  Youtube,
  Podcast,
  Pencil,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { VideoContent, PodcastContent } from "@/types/mediaContent";
import { fetchVideos, fetchPodcasts } from "@/lib/api/mediaContent";

// Dummy data for media items
const mediaItems = [
  {
    id: 1,
    type: "video",
    title: "How to Setup Your Camera",
    source: "Youtube",
    date: "2023-11-03",
    size: "45 MB",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 2,
    type: "image",
    title: "Studio Setup.jpg",
    source: "Upload",
    date: "2023-10-28",
    size: "2.3 MB",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 3,
    type: "audio",
    title: "Podcast Episode 1",
    source: "Spotify",
    date: "2023-10-15",
    size: "32 MB",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 4,
    type: "video",
    title: "Channel Trailer",
    source: "Upload",
    date: "2023-09-20",
    size: "120 MB",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 5,
    type: "audio",
    title: "Interview with Guest",
    source: "Apple Podcasts",
    date: "2023-11-01",
    size: "28 MB",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 6,
    type: "image",
    title: "Profile Photo.png",
    source: "Upload",
    date: "2023-10-05",
    size: "1.8 MB",
    thumbnail: "/placeholder.svg",
  },
];

const Media = () => {
  const [videos, setVideos] = useState<VideoContent[]>([]);
  const [podcasts, setPodcasts] = useState<PodcastContent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const loadMediaContent = async () => {
      try {
        setIsLoading(true);
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

  const handleItemSelect = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const filteredItems = mediaItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === "all" || item.type === activeTab;
    return matchesSearch && matchesTab;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Film className="h-5 w-5 text-blue-500" />;
      case "image":
        return <Image className="h-5 w-5 text-green-500" />;
      case "audio":
        return <Music className="h-5 w-5 text-orange-500" />;
      default:
        return <Film className="h-5 w-5" />;
    }
  };

  const getSourceIcon = (source: string) => {
    switch (source) {
      case "Youtube":
        return <Youtube className="h-4 w-4 text-red-500" />;
      case "Spotify":
        return <Music className="h-4 w-4 text-green-500" />;
      case "Apple Podcasts":
        return <Podcast className="h-4 w-4 text-purple-500" />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Gerenciamento de Mídia</h1>
            <p className="text-muted-foreground mt-1">
              Manage your videos, images, and audio files
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Media
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Media</DialogTitle>
                <DialogDescription>
                  Upload a file or link to external content
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Tabs defaultValue="upload" className="w-full">
                  <TabsList className="grid grid-cols-2 mb-4">
                    <TabsTrigger value="upload">Upload File</TabsTrigger>
                    <TabsTrigger value="external">External Link</TabsTrigger>
                  </TabsList>
                  <TabsContent value="upload" className="space-y-4">
                    <div className="flex flex-col items-center justify-center border border-dashed rounded-md h-40 cursor-pointer hover:bg-muted/50 transition-colors">
                      <Image className="h-10 w-10 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Click to browse or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Supports: JPG, PNG, MP4, MP3
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input id="title" placeholder="Enter media title" />
                    </div>
                  </TabsContent>
                  <TabsContent value="external" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="source">Source</Label>
                      <Select>
                        <SelectTrigger id="source">
                          <SelectValue placeholder="Select source" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="youtube">YouTube</SelectItem>
                          <SelectItem value="spotify">Spotify</SelectItem>
                          <SelectItem value="apple">Apple Podcasts</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="url">URL</Label>
                      <Input id="url" placeholder="https://" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input id="title" placeholder="Enter media title" />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              <DialogFooter>
                <Button type="submit">Add Media</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Media Library</CardTitle>
            <CardDescription>View and manage your media files</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3 justify-between">
                <div className="relative w-full sm:max-w-xs">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search media..."
                    className="pl-8 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Tabs 
                  defaultValue="all" 
                  className="w-full sm:max-w-[400px]"
                  onValueChange={(value) => setActiveTab(value)}
                >
                  <TabsList className="grid grid-cols-4 w-full">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="video">Video</TabsTrigger>
                    <TabsTrigger value="image">Images</TabsTrigger>
                    <TabsTrigger value="audio">Audio</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <Tabs defaultValue="videos" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="videos" className="flex items-center gap-2">
                    <Youtube className="h-4 w-4" /> Vídeos
                  </TabsTrigger>
                  <TabsTrigger value="podcasts" className="flex items-center gap-2">
                    <Music className="h-4 w-4" /> Podcasts
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="videos">
                  <div className="flex justify-between mb-4">
                    <h2 className="text-xl font-semibold">Vídeos do YouTube</h2>
                    <Button className="flex items-center gap-2">
                      <Plus size={16} /> Adicionar Vídeo
                    </Button>
                  </div>

                  {isLoading ? (
                    <div className="text-center py-10">Carregando vídeos...</div>
                  ) : videos.length === 0 ? (
                    <div className="text-center py-10 border rounded-lg bg-gray-50">
                      <p className="text-gray-500">Nenhum vídeo cadastrado.</p>
                      <Button variant="outline" className="mt-4">
                        <Plus size={16} className="mr-2" /> Adicionar seu primeiro vídeo
                      </Button>
                    </div>
                  ) : (
                    <div className="border rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-4 py-3 text-left">Título</th>
                            <th className="px-4 py-3 text-left">ID do YouTube</th>
                            <th className="px-4 py-3 text-left">Data</th>
                            <th className="px-4 py-3 text-right">Ações</th>
                          </tr>
                        </thead>
                        <tbody>
                          {videos.map((video) => (
                            <tr key={video.id} className="border-t">
                              <td className="px-4 py-3">{video.title}</td>
                              <td className="px-4 py-3">{video.youtubeId}</td>
                              <td className="px-4 py-3">{new Date(video.date).toLocaleDateString()}</td>
                              <td className="px-4 py-3 text-right">
                                <div className="flex justify-end gap-2">
                                  <Button variant="ghost" size="icon">
                                    <Eye size={16} />
                                  </Button>
                                  <Button variant="ghost" size="icon">
                                    <Pencil size={16} />
                                  </Button>
                                  <Button variant="ghost" size="icon" className="text-red-500">
                                    <Trash2 size={16} />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="podcasts">
                  <div className="flex justify-between mb-4">
                    <h2 className="text-xl font-semibold">Podcasts do Spotify</h2>
                    <Button className="flex items-center gap-2">
                      <Plus size={16} /> Adicionar Podcast
                    </Button>
                  </div>

                  {isLoading ? (
                    <div className="text-center py-10">Carregando podcasts...</div>
                  ) : podcasts.length === 0 ? (
                    <div className="text-center py-10 border rounded-lg bg-gray-50">
                      <p className="text-gray-500">Nenhum podcast cadastrado.</p>
                      <Button variant="outline" className="mt-4">
                        <Plus size={16} className="mr-2" /> Adicionar seu primeiro podcast
                      </Button>
                    </div>
                  ) : (
                    <div className="border rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-4 py-3 text-left">Título</th>
                            <th className="px-4 py-3 text-left">ID do Spotify</th>
                            <th className="px-4 py-3 text-left">Data</th>
                            <th className="px-4 py-3 text-right">Ações</th>
                          </tr>
                        </thead>
                        <tbody>
                          {podcasts.map((podcast) => (
                            <tr key={podcast.id} className="border-t">
                              <td className="px-4 py-3">{podcast.title}</td>
                              <td className="px-4 py-3">{podcast.spotifyId}</td>
                              <td className="px-4 py-3">{new Date(podcast.date).toLocaleDateString()}</td>
                              <td className="px-4 py-3 text-right">
                                <div className="flex justify-end gap-2">
                                  <Button variant="ghost" size="icon">
                                    <Eye size={16} />
                                  </Button>
                                  <Button variant="ghost" size="icon">
                                    <Pencil size={16} />
                                  </Button>
                                  <Button variant="ghost" size="icon" className="text-red-500">
                                    <Trash2 size={16} />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Media;
