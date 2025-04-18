
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Card className="mx-auto w-full max-w-6xl p-4 sm:p-6 lg:p-8 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <CardContent>
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Lívia Dutra
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Terapeuta especializada em desenvolvimento pessoal e bem-estar emocional.
                </p>
                <div className="space-x-4">
                  <Button className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors">
                    Agende uma Consulta
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover">
            <img
              alt="Lívia Dutra"
              className="object-cover w-full h-full"
              src="/placeholder.svg"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
