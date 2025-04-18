
import { useState } from "react";
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
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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

export default function Media() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState("all");

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
            <h1 className="text-3xl font-bold tracking-tight">Media</h1>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="group relative border rounded-md overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="absolute top-2 left-2 z-10">
                      <Checkbox
                        checked={selectedItems.includes(item.id)}
                        onCheckedChange={() => handleItemSelect(item.id)}
                        className="bg-white border-gray-300 data-[state=checked]:bg-primary"
                      />
                    </div>
                    <div className="absolute top-2 right-2 z-10">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="h-8 w-8 p-0 bg-white/80 hover:bg-white"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            <span>Preview</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            <span>Download</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="mr-2 h-4 w-4" />
                            <span>Copy Link</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-12 w-12 rounded-full bg-black/50 flex items-center justify-center">
                            <Film className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      )}
                      {item.type === "audio" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-12 w-12 rounded-full bg-black/50 flex items-center justify-center">
                            <Mic className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-3">
                      <div className="flex items-center gap-2 mb-1">
                        {getTypeIcon(item.type)}
                        <h3 className="font-medium text-sm truncate flex-1">
                          {item.title}
                        </h3>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          {getSourceIcon(item.source)}
                          <span>{item.source}</span>
                        </div>
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
