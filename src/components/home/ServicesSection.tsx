export function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          CUIDANDO DO SEU BEM-ESTAR EMOCIONAL
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Ofereço um espaço seguro onde você pode expressar seus sentimentos, enfrentar
          desafios emocionais e desenvolver novas habilidades para lidar com as dificuldades 
          da vida de forma mais saudável.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <div className="w-48 h-48 bg-[#F5F2F0]"></div>
          <div className="max-w-md">
            <h3 className="text-xl font-bold mb-4">SOBRE MIM</h3>
            <p className="text-gray-600 mb-4">
              Sou psicóloga clínica especializada em Terapia Cognitivo Comportamental, 
              atendendo adolescentes e adultos. Trabalho com foco no desenvolvimento pessoal 
              e bem-estar emocional.
            </p>
            <button className="text-gray-700 border border-gray-300 px-6 py-2">
              SAIBA MAIS
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-full aspect-square bg-[#F5F2F0] mb-4"></div>
            <h3 className="font-bold">PSICOTERAPIA INDIVIDUAL</h3>
          </div>
          <div className="text-center">
            <div className="w-full aspect-square bg-[#F5F2F0] mb-4"></div>
            <h3 className="font-bold">TERAPIA ONLINE</h3>
          </div>
          <div className="text-center">
            <div className="w-full aspect-square bg-[#F5F2F0] mb-4"></div>
            <h3 className="font-bold">ORIENTAÇÃO PROFISSIONAL</h3>
          </div>
        </div>
      </div>
    </section>
  );
} 