import { Button } from './ui/button';
import { trackEvent } from '../lib/metaPixel';

export function FinalCTASection() {
  return (
    <section className="py-12 md:py-20 bg-white border-y-2 border-green-500">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-green-500 mb-3 md:mb-4 leading-tight">
          Pronto para começar?
        </h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-6 md:mb-8 font-bold px-2">
          Faça parte do Rodrigo Brasileiro Team e comece hoje!
        </p>
        
        <Button 
          asChild
          size="lg" 
          className="bg-green-500 hover:bg-green-600 text-white text-base sm:text-lg md:text-xl lg:text-2xl py-4 sm:py-5 md:py-6 px-6 sm:px-8 md:px-12 mb-4 md:mb-6 w-full sm:w-auto max-w-full"
        >
          <a
            href="https://payfast.greenn.com.br/kw2t8mr?utm_source=lp&utm_medium=cta&utm_content=final"
            onClick={() => trackEvent('InitiateCheckout', { source: 'final' })}
          >
            QUERO COMEÇAR EMAGRECER E DEFINIR HOJE!
          </a>
        </Button>
        
        {/* Mini-selos */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-600">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-green-500 text-lg">⚡</span>
            <span className="font-bold">Acesso imediato</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-green-500 text-lg">🛡️</span>
            <span className="font-bold">Garantia 7 dias</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-green-500 text-lg">🎧</span>
            <span className="font-bold">Suporte incluso</span>
          </div>
        </div>
      </div>
    </section>
  );
}
