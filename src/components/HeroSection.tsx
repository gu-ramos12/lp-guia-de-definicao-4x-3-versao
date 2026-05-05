import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { trackEvent } from '../lib/metaPixel';
import { useVSLPlay } from '../hooks/useVSLPlay';

export function HeroSection() {
  // Fires VSL_Play custom event when user starts the Panda Video player
  useVSLPlay();

  return (
    <section id="inicio" className="pt-20 pb-12 md:pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs sm:text-sm">
            🚀 Lançamento Especial
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight tracking-tight">
            <span className="text-green-400">
              GUIA DE DEFINIÇÃO
            </span>
            <span className="text-white">
              4X
            </span>
          </h1>
          
          <div className="space-y-4 md:space-y-6">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight px-2">
              Acelere seu emagrecimento e elimine a <span className="text-green-400">barriga</span> que te incomoda
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-2">
              O método aplicado e comprovado que já transformou <span className="text-green-400">+1000 vidas</span> e vai revolucionar seus resultados de forma definitiva.
            </p>
          </div>
          
          {/* Espaço para VSL */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
            
            <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-green-500/30 shadow-2xl overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  id="panda-5bd0c576-c9d4-4e1a-81b6-0a9bf0056e8a"
                  src="https://player-vz-884c6c71-c8e.tv.pandavideo.com.br/embed/?v=5bd0c576-c9d4-4e1a-81b6-0a9bf0056e8a"
                  style={{ border: 'none' }}
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-black text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              <a
                href="https://payfast.greenn.com.br/kw2t8mr?utm_source=lp&utm_medium=cta&utm_content=hero"
                onClick={() => trackEvent('InitiateCheckout', { source: 'hero' })}
              >
                Começar Transformação
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              <a href="#resultados">
                Ver Resultados
              </a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-6 sm:space-x-8 pt-2 sm:pt-4">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-green-400">+1000</div>
              <div className="text-xs sm:text-sm text-gray-400">Transformações</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-green-400">7 dias</div>
              <div className="text-xs sm:text-sm text-gray-400">Garantia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
