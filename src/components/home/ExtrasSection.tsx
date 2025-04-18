import { Button } from "@/components/ui/button";

export function ExtrasSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">RECURSOS</h2>
        
        <div className="max-w-md mx-auto bg-[#F5F2F0] p-8 rounded mb-12">
          <h3 className="text-xl font-bold mb-4 text-center">INSCREVA-SE NA NEWSLETTER</h3>
          <p className="text-gray-600 mb-6 text-center">
            Receba conteúdo exclusivo sobre saúde mental, desenvolvimento pessoal, 
            dicas de autocuidado e bem-estar emocional diretamente no seu email.
          </p>
          <form className="space-y-4">
            <div>
              <input 
                type="email" 
                placeholder="Seu melhor email" 
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <Button className="w-full">
                ASSINAR NEWSLETTER
              </Button>
            </div>
            <p className="text-xs text-gray-500 text-center">
              Ao se inscrever, você concorda com nossa política de privacidade.
              Não enviamos spam.
            </p>
          </form>
        </div>
        
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h3 className="text-xl font-semibold">MATERIAIS GRATUITOS</h3>
          <p className="text-gray-600">
            Guias, e-books e outros recursos para apoiar sua jornada de desenvolvimento pessoal.
            Acesse a seção de recursos para baixar materiais exclusivos sobre autoconhecimento, 
            gestão das emoções e relacionamentos saudáveis.
          </p>
        </div>
      </div>
    </section>
  );
} 