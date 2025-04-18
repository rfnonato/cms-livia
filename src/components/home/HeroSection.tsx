import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-[#F5F2F0] py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          PSICOTERAPIA COMO UM ESPAÇO DE CUIDADO E TRANSFORMAÇÃO
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Atendimento psicológico especializado para adolescentes e adultos.
          Terapia Cognitivo Comportamental em ambiente acolhedor e seguro.
        </p>
        <Button variant="outline" className="px-8 py-2">
          AGENDE UMA CONSULTA
        </Button>
      </div>
    </section>
  );
}
