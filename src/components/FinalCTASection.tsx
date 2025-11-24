import { Button } from './ui/button';

export function FinalCTASection() {
  return (
    <section className="py-20 bg-white border-y-2 border-green-500">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-green-500 mb-4">
          Pronto para começar?
        </h2>
        <p className="text-gray-700 text-lg mb-8 font-bold">
          Faça parte do Rodrigo Brasileiro Team e comece hoje!
        </p>
        
        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-2xl py-6 px-12 mb-6">
          QUERO O GUIA POR 13,90 POR MÊS
        </Button>
        
        {/* Mini-selos */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span className="text-green-500">⚡</span>
            <span className="font-bold">Acesso imediato</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-500">🛡️</span>
            <span className="font-bold">Garantia 7 dias</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-500">🎧</span>
            <span className="font-bold">Suporte incluso</span>
          </div>
        </div>
      </div>
    </section>
  );
}