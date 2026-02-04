import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, Shield, Gift } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

const features = [
  "7 módulos de Videoaulas práticas e rápidas, com dicas valiosas para você destravar o seu emagrecimento e definição",
  "Protocolo Abdômen de Ferro, com videoaulas dos exercícios para guiar seus treinos",
  "Sugestões de cardápios simples e acessíveis",
  "Calculadora TMB com videoaula de como utilizar para estimar seu gasto energético",
  "Suporte para dúvidas pela plataforma do guia",
  "1 ano de acesso ao conteúdo"
];

const bonuses = [
  "🎁 BÔNUS 1: Guia de Suplementação (Valor: R$ 87)",
  "🎁 BÔNUS 2: Receitas Fit (Valor: R$ 67)",
  "🎁 BÔNUS 3: Lista de Compras Otimizada (Valor: R$ 37)",
  "🎁 BÔNUS 4: Lista de substituição pra alimentos e bebidas (Valor: R$ 37)"
];

export function OfferSection() {
  return (
    <section id="oferta" className="py-20 bg-gradient-to-br from-slate-100 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-red-100 text-red-600 border-red-200 mb-6">
            ⚡ Oferta Limitada
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Veja a transformação em seu corpo <span className="text-green-600">logo nas primeiras semanas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aproveite esta oportunidade única e comece sua transformação hoje mesmo resolvendo o problema pela raiz.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-none overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Lado Esquerdo - Oferta */}
                <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Guia de Definição 4X</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-200 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t border-green-500 pt-6">
                      <h4 className="font-bold mb-3">Bônus Exclusivos:</h4>
                      <div className="space-y-2">
                        {bonuses.map((bonus, index) => (
                          <div key={index} className="text-sm text-green-100">
                            {bonus}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Lado Direito - Preço */}
                <div className="p-8 lg:p-12 bg-slate-900 text-white">
                  <div className="space-y-8">
                    <CountdownTimer />
                    
                    <div className="text-center">
                      <div className="text-gray-400 line-through text-2xl mb-2">R$ 407,00</div>
                      <div className="text-4xl font-bold text-green-400 mb-2">
                        12x de R$ 13,90<span className="text-lg"></span>
                      </div>
                      <div className="text-green-400 text-xl">Você economiza R$ 260,00 (≈56%)</div>
                      <div className="text-sm text-gray-300 mt-2">
                        Produto + Bônus Exclusivos
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      
                      <div className="flex items-center space-x-3 p-3 bg-green-500/20 rounded-lg">
                        <Shield className="w-5 h-5 text-green-400" />
                        <span className="text-sm">7 dias de garantia</span>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-green-500/20 rounded-lg">
                        <Gift className="w-5 h-5 text-green-400" />
                        <span className="text-sm">Bônus no valor de R$ 228,00</span>
                      </div>
                    </div>
                    
                    <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-black py-4 text-lg">
                      🚀 QUERO COMEÇAR AGORA
                    </Button>
                    
                    <div className="text-center space-y-2">
                      <div className="text-sm text-gray-300">
                        🔒 Pagamento 100% seguro
                      </div>
                      <div className="flex justify-center space-x-4 text-xs text-gray-400">
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
