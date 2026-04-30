import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, Shield, Gift } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

const features = [
  "7 módulos de Videoaulas práticas e rápidas, com as estratégias corretas para você destravar o seu emagrecimento e definição",
  "Protocolo Abdômen de Ferro, com videoaulas dos exercícios para te guiar no desafio",
  "Sugestões de cardápios simples e acessíveis",
  "Calculadora TMB com videoaula de como utilizar para estimar seu gasto energético",
  "Suporte para dúvidas pela plataforma do guia"
];

const bonuses = [
  "🎁 BÔNUS 1: Guia de Suplementação (Valor: R$ 87)",
  "🎁 BÔNUS 2: Receitas Fit (Valor: R$ 67)",
  "🎁 BÔNUS 3: Lista de Compras Inteligente (Valor: R$ 37)",
  "🎁 BÔNUS 4: Lista de substituição pra alimentos e bebidas (Valor: R$ 37)"
];

export function OfferSection() {
  return (
    <section id="oferta" className="py-12 md:py-20 bg-gradient-to-br from-slate-100 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <Badge className="bg-red-100 text-red-600 border-red-200 mb-4 md:mb-6 text-xs sm:text-sm">
            ⚡ Oferta Limitada
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 px-2 leading-tight">
            Veja a transformação em seu corpo <span className="text-green-600">logo nas primeiras semanas</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Aproveite esta oportunidade única e comece sua transformação hoje mesmo resolvendo o problema pela raiz.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-none overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Lado Esquerdo - Oferta */}
                <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-6 sm:p-8 lg:p-12">
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">Guia de Definição 4X</h3>
                    </div>
                    
                    <div className="space-y-3 md:space-y-4">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-200 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t border-green-500 pt-4 md:pt-6">
                      <h4 className="font-bold mb-2 md:mb-3 text-sm sm:text-base">Bônus Exclusivos:</h4>
                      <div className="space-y-1.5 md:space-y-2">
                        {bonuses.map((bonus, index) => (
                          <div key={index} className="text-xs sm:text-sm text-green-100">
                            {bonus}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Lado Direito - Preço */}
                <div className="p-6 sm:p-8 lg:p-12 bg-slate-900 text-white">
                  <div className="space-y-6 md:space-y-8">
                    <CountdownTimer />
                    
                    <div className="text-center">
                      <div className="text-gray-400 line-through text-xl sm:text-2xl mb-2">R$ 407,00</div>
                      <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">
                        12 x R$ 13,90<span className="text-base sm:text-lg">
                      </div>
                      <div className="text-green-400 text-lg sm:text-xl">à vista R$ 147,00 (≈56%)</div>
                      <div className="text-xs sm:text-sm text-gray-300 mt-2">
                        Produto + Bônus Exclusivos
                      </div>
                    </div>
                    
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-center space-x-2 sm:space-x-3 p-2.5 sm:p-3 bg-green-500/20 rounded-lg">
                        <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">7 dias de garantia</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 sm:space-x-3 p-2.5 sm:p-3 bg-green-500/20 rounded-lg">
                        <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">Bônus no valor de R$ 228,00</span>
                      </div>
                    </div>
                    
                    <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-black py-3 sm:py-4 text-base sm:text-lg">
                      <a href="https://payfast.greenn.com.br/kw2t8mr?utm_source=lp&utm_medium=cta&utm_content=offer">
                        🚀 QUERO COMEÇAR AGORA
                      </a>
                    </Button>
                    
                    <div className="text-center space-y-2">
                      <div className="text-xs sm:text-sm text-gray-300">
                        🔒 Pagamento 100% seguro
                      </div>
                      <div className="flex justify-center space-x-3 sm:space-x-4 text-xs text-gray-400">
                        <span>💳 Cartão</span>
                        <span>🏛️ PIX</span>
                        <span>📄 Boleto</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          

        </div>
      </div>
    </section>
  );
}
