import logoImage from 'figma:asset/abee3f585aff52268de5274d40e3429f059c24d5.png';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-800/95 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={logoImage} alt="RS Brasileiro Team" className="h-7 sm:h-8 w-auto" />
        </div>
        
        <nav className="hidden md:flex space-x-6 lg:space-x-8 text-sm lg:text-base">
          <a href="#inicio" className="text-gray-300 hover:text-green-400 transition-colors">
            Início
          </a>
          <a href="#sobre-coach" className="text-gray-300 hover:text-green-400 transition-colors">
            Conheça Rodrigo Brasileiro
          </a>
          <a href="#resultados" className="text-gray-300 hover:text-green-400 transition-colors">
            Resultados
          </a>
          <a href="#oferta" className="text-gray-300 hover:text-green-400 transition-colors">
            Oferta
          </a>
        </nav>
        
        <Button className="bg-green-500 hover:bg-green-600 text-black text-xs sm:text-sm px-3 sm:px-4 py-2">
          Adquirir Agora
        </Button>
      </div>
    </header>
  );
}