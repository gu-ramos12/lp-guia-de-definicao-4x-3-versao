import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const features = [
  {
    icon: "⚡",
    title: "Resultados 4x mais rápidos",
    description: "Você entende o que acelera a queima de gordura e a definição muscular — sem atalhos perigosos."
  },
  {
    icon: "🎯",
    title: "Guia completo",
    description: "Passo a passo em videoaulas com dicas práticas para você aplicar na sua rotina imediatamente"
  },
  {
    icon: "🏅",
    title: "Método comprovado",
    description: "+1000 transformações reais acompanhadas ao longo de 7 anos."
  },
  {
    icon: "🎧",
    title: "Suporte completo",
    description: "Acompanhamento para dúvidas direto pela plataforma."
  }
];

export function WhySection() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-6">
            💡 Método Diferenciado
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-green-400 mb-4">
            Por que o Guia de Definição 4X é diferente?
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Não é apenas mais um guia. É um sistema completo baseado em ciência e praticidade, que resolverá seu problema pela raiz!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-900 border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg text-green-400 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black text-lg px-8 py-4">
            Quero começar por 13,90 por mês
          </Button>
        </div>
      </div>
    </section>
  );
}