export function SocialProofSection() {
  return (
    <section className="py-16 bg-[#F5F2F0]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">DEPOIMENTOS</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg">
              <p className="italic text-gray-600 mb-4">
                "A terapia com a Lívia tem sido fundamental para meu autoconhecimento e crescimento pessoal. 
                O ambiente acolhedor e a abordagem personalizada me ajudaram a superar desafios que pareciam insuperáveis."
              </p>
              <p className="font-medium">M.S., 34 anos</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="italic text-gray-600 mb-4">
                "Iniciei a terapia em um momento difícil da minha vida e encontrei um espaço seguro para 
                trabalhar minhas questões. Depois de alguns meses, já percebi mudanças significativas na 
                forma como lido com meus problemas e relacionamentos."
              </p>
              <p className="font-medium">C.R., 28 anos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 