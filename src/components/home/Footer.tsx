import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#F5F2F0] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <Link to="/blog" className="block text-gray-700 hover:text-gray-900">BLOG</Link>
            <Link to="/recursos" className="block text-gray-700 hover:text-gray-900">RECURSOS</Link>
            <Link to="/faq" className="block text-gray-700 hover:text-gray-900">PERGUNTAS FREQUENTES</Link>
          </div>
          
          <div className="flex justify-center">
            <div className="text-2xl font-bold">LÍVIA DME</div>
          </div>
          
          <div className="space-y-2 text-right">
            <Link to="/instagram" className="block text-gray-700 hover:text-gray-900">INSTAGRAM</Link>
            <Link to="/contato" className="block text-gray-700 hover:text-gray-900">CONTATO</Link>
            <div className="block text-gray-700">CRP XX/XXXXX</div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Lívia DME - Psicoterapia e Desenvolvimento Pessoal. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
} 