
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Podcast, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function MediaSection() {
  const mediaItems = [
    {
      title: "Como lidar com ansiedade",
      type: "video",
      duration: "15:30",
      image: "/placeholder.svg"
    },
    {
      title: "Mindfulness na prática",
      type: "podcast",
      duration: "45:00",
      image: "/placeholder.svg"
    },
    {
      title: "Relacionamentos saudáveis",
      type: "video",
      duration: "20:15",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-12 bg-accent/50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Conteúdo em Destaque</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {mediaItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardHeader>
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
                      {item.type === "video" ? (
                        <Video className="absolute bottom-2 right-2 h-6 w-6 text-white" />
                      ) : (
                        <Podcast className="absolute bottom-2 right-2 h-6 w-6 text-white" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{item.duration}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="mt-8 text-center">
          <Button variant="outline">
            Ver mais conteúdo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
