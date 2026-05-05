import logoImage from 'figma:asset/2e5fab8e4ee60eeae7784b7a943334258c014a87.png';
import { Separator } from './ui/separator';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-6 md:mb-8">
          <div className="space-y-3 md:space-y-4 max-w-md">
            <img src={logoImage} alt="Rodrigo Brasileiro Team" className="h-10 sm:h-12 w-auto" />
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Transformando vidas através do fitness com métodos científicos e resultados comprovados.
            </p>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-bold text-base sm:text-lg">Links Úteis</h4>
            <div className="space-y-1.5 sm:space-y-2">
              <a href="#inicio" className="block text-gray-400 text-sm sm:text-base hover:text-green-400 transition-colors">
                Início
              </a>
              <a href="#beneficios" className="block text-gray-400 text-sm sm:text-base hover:text-green-400 transition-colors">
                Benefícios
              </a>
              <a href="#resultados" className="block text-gray-400 text-sm sm:text-base hover:text-green-400 transition-colors">
                Resultados
              </a>
              <a href="#oferta" className="block text-gray-400 text-sm sm:text-base hover:text-green-400 transition-colors">
                Oferta
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="bg-slate-700 mb-6 md:mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © 2026 Rodrigo Brasileiro Team. Todos os direitos reservados.
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
            <a href="#" className="hover:text-green-400 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              Suporte
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
