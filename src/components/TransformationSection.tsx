import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from './ui/carousel';
import { Badge } from './ui/badge';

const transformations = [
  {
    src: "/imagens/transformacoes/transformacao1.png",
    alt: "Transformação Real - Gabriela - Antes e Depois",
    name: "Gabriela - Paciente do RB Team",
  },
  {
    src: "/imagens/transformacoes/transformacao2.png",
    alt: "Transformação Real - Thiago - Antes e Depois",
    name: "Thiago - Paciente do RB Team",
  },
  {
    src: "/imagens/transformacoes/transformacao3.png",
    alt: "Transformação Real - Amanda - Antes e Depois",
    name: "Amanda - Paciente do RB Team",
  },
  {
    src: "/imagens/transformacoes/transformacao4.png",
    alt: "Transformação Real - Otávio - Antes e Depois",
    name: "Otávio - Paciente do RB Team",
  },
  {
    src: "/imagens/transformacoes/transformacao5.png",
    alt: "Transformação Real - Rodrigo - Antes e Depois",
    name: "Rodrigo - Paciente do RB Team",
  },
  {
    src: "/imagens/transformacoes/transformacao6.png",
    alt: "Transformação Real - Fernanda - Antes e Depois",
    name: "Fernanda - Paciente do RB Team",
  },
  {
    src: "/imagens/transformacoes/transformacao7.png",
    alt: "Transformação Real - Henrique - Antes e Depois",
    name: "Henrique - Paciente do RB Team",
  },
];

export function TransformationSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [api]);

  // Track current slide
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  if (transformations.length === 0) {
    return (
      <section id="resultados" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-500/10 text-green-600 border-green-500/30 mb-6">
              Resultados Reais
            </Badge>
            <h2 className="text-3xl md:text-4xl mb-6 text-slate-900 font-bold">
              Veja as <span className="text-green-500">Transformações</span> dos nossos alunos
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-500">Em breve, transformações incríveis!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="resultados" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-green-500/10 text-green-600 border-green-500/30 mb-6">
            Resultados Reais
          </Badge>
          <h2 className="text-3xl md:text-4xl mb-6 text-slate-900 font-bold">
            Veja as <span className="text-green-500">Transformações</span> dos nossos pacientes
          </h2>
        </div>
        
        {/* Carrossel de Transformações - Sem moldura */}
        <div className="max-w-4xl mx-auto">
          <div className="relative px-12 md:px-16">
            <Carousel
              setApi={setApi}
              opts={{
                align: 'center',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {transformations.map((transformation, index) => (
                  <CarouselItem key={index}>
                    <div className="px-2">
                      {/* Imagem sem moldura */}
                      <div className="rounded-xl overflow-hidden shadow-2xl">
                        <img
                          src={transformation.src}
                          alt={transformation.alt}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      {/* Texto abaixo da imagem */}
                      <div className="text-center mt-6">
                        <p className="text-lg text-gray-700">{transformation.name}</p>
                        <div className="flex items-center justify-center gap-2 mt-2">
                          <div className="h-1 w-1 rounded-full bg-green-500"></div>
                          <p className="text-sm text-green-600">Transformação Real</p>
                          <div className="h-1 w-1 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-green-500 hover:bg-green-600 border-green-500 text-white left-0 md:left-2 shadow-lg" />
              <CarouselNext className="bg-green-500 hover:bg-green-600 border-green-500 text-white right-0 md:right-2 shadow-lg" />
            </Carousel>

            {/* Indicadores customizados (dots) */}
            <div className="flex justify-center gap-2 mt-10">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'w-8 bg-green-500'
                      : 'w-2 bg-green-500/30 hover:bg-green-500/50'
                  }`}
                  aria-label={`Ir para transformação ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
