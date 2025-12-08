import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function HeroSection() {
  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            🚀 Lançamento Especial
          </Badge>
          

          
          <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tight">
            <span className="text-green-400">
              GUIA DE DEFINIÇÃO
            </span>
            <span className="text-white">
              4X
            </span>
          </h1>
          
          <div className="space-y-6">
            <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Dê adeus a sua barriga e conquiste o<span className="text-green-400"> abdômen definido</span> que sempre sonhou
            </p>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              O método aplicado e comprovado que já transformou <span className="text-green-400">+1000 vidas</span> e vai revolucionar seus resultados de forma definitiva.
            </p>
          </div>
          
          {/* Espaço para VSL */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
            
            <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-green-500/30 shadow-2xl">
              <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/40">
                    <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <p className="text-green-400 font-bold text-lg">VSL - Video Sales Letter</p>
                    <p className="text-gray-300 text-sm max-w-md mx-auto">
                      Espaço reservado para inserir o vídeo de vendas do Guia de Definição 4X
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black text-lg px-8 py-4">
              Começar Transformação
            </Button>
            <Button size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 text-lg px-8 py-4">
              Ver Resultados
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">+1000</div>
              <div className="text-sm text-gray-400">Transformações</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">7 dias</div>
              <div className="text-sm text-gray-400">Garantia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
