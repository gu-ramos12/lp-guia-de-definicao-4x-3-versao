import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Utensils } from 'lucide-react';

const steps = [
  {
    letter: "D",
    title: "Desinchar",
    description: "Como reduzir retenção (água e sódio), organizar hidratação e consumo de álcool"
  },
  {
    letter: "D",
    title: "Desinflamar", 
    description: "Melhorar o sono e qualidade dos alimentos, para mais saciedade e energia/disposição"
  },
  {
    letter: "H",
    title: "Hipertrofiar",
    description: "Passo a passo para conquistar o abdômen definido que sempre sonhou"
  },
  {
    letter: "Q",
    title: "Queimar",
    description: "Passo a passo para transformar seu corpo em uma máquina de queimar gordura"
  }
];

const includes = [
  { icon: "🎥", title: "Guia em videoaulas para destravar sua definição" },
  { icon: Utensils, title: "Sugestão de cardápios por calorias diárias" },
  { icon: "💊", title: "Guia de Suplementação" },
  { icon: "💪", title: "Protocolo Abdômen de Ferro" },
  { icon: "🧮", title: "Calculadora TMB" },
  { icon: "📝", title: "Lista de compras, Substituições de alimentos e bebidas, etc" },
  { icon: "🎧", title: "Suporte para dúvidas" }
];

export function MethodSection() {
  return (
    <section className="py-12 md:py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-green-400 mb-3 md:mb-4 px-2 leading-tight">
            Como funciona o Método 4X
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
            Quatro etapas simples para evoluir de forma visível e sustentável.
          </p>
        </div>
        
        {/* Desktop Timeline */}
        <div className="hidden md:block mb-12 md:mb-16">
          <div className="flex items-start justify-between relative max-w-6xl mx-auto">
            {/* Progress Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-slate-700 transform -translate-y-1/2"></div>
            <div className="absolute top-8 left-0 w-full h-1 bg-green-400 transform -translate-y-1/2"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative z-10 bg-slate-900 px-4 max-w-xs">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mb-4">
                  <span className="text-black font-black text-xl">{step.letter}</span>
                </div>
                <div className="text-center">
                  <h3 className="text-lg text-green-400 mb-3 font-bold">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6 sm:space-y-8 mb-10 md:mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black font-black text-base sm:text-lg">{step.letter}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg text-green-400 mb-1.5 sm:mb-2 font-bold">{step.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* O que você recebe */}
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-xl sm:text-2xl text-green-400 mb-6 sm:mb-8">Você recebe</h3>
          <div className="max-w-5xl mx-auto space-y-3 sm:space-y-4">
            {/* Linha superior - 4 cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {includes.slice(0, 4).map((item, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 hover:border-green-500/50 transition-colors">
                  <CardContent className="p-3 sm:p-4 text-center">
                    {typeof item.icon === 'string' ? (
                      <div className="text-xl sm:text-2xl mb-1.5 sm:mb-2">{item.icon}</div>
                    ) : (
                      <div className="flex justify-center mb-1.5 sm:mb-2">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                      </div>
                    )}
                    <p className="text-gray-300 text-xs sm:text-sm leading-tight">{item.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Linha inferior - 3 cards centralizados */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
              {includes.slice(4).map((item, index) => (
                <Card key={index + 4} className="bg-slate-800 border-slate-700 hover:border-green-500/50 transition-colors">
                  <CardContent className="p-3 sm:p-4 text-center">
                    {typeof item.icon === 'string' ? (
                      <div className="text-xl sm:text-2xl mb-1.5 sm:mb-2">{item.icon}</div>
                    ) : (
                      <div className="flex justify-center mb-1.5 sm:mb-2">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                      </div>
                    )}
                    <p className="text-gray-300 text-xs sm:text-sm leading-tight">{item.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center px-4">
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
            Quero começar por 13,90 por mês
          </Button>
        </div>
      </div>
    </section>
  );
}