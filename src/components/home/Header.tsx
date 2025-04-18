import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full bg-[#F5F2F0] py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">LÍVIA DME</div>
        <nav className="space-x-8">
          <Link to="/" className="text-gray-700 hover:text-gray-900">INÍCIO</Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900">SOBRE</Link>
          <Link to="/services" className="text-gray-700 hover:text-gray-900">SERVIÇOS</Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900">CONTATO</Link>
        </nav>
      </div>
    </header>
  );
} 