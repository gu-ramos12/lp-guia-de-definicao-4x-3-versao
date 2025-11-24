import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from './ui/carousel';

const slides = [
  {
    src: "/imagens/treinador/treinador1.png",
    alt: "Rodrigo Brasileiro - Coach de Bodybuilding",
  },
  {
    src: "/imagens/treinador/treinador2.png",
    alt: "Quem é Rodrigo Brasileiro - História e Motivação",
  },
  {
    src: "/imagens/treinador/treinador3.png",
    alt: "Formação Acadêmica de Rodrigo Brasileiro",
  },
  {
    src: "/imagens/treinador/treinador4.png",
    alt: "Formação Internacional - Certificação de Treinador nos Estados Unidos",
  },
  {
    src: "/imagens/treinador/treinador5.png",
    alt: "Vivência no Esporte - Competições Men's Physique",
  },
  {
    src: "/imagens/treinador/treinador6.png",
    alt: "Meu Estilo de Trabalho - Nutrição Prática e Personalizada",
  },
];

export function AboutCoachSection() {
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
    }, 4000);

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

  return (
    <section id="sobre-coach" className="py-16 md:py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Título da Seção */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Conheça o <span className="text-green-400">Rodrigo Brasileiro</span>
            </h2>
            <p className="text-xl text-gray-300">
              Especialista em definição muscular e transformação corporal
            </p>
          </div>

          {/* Carrossel */}
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
                {slides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="px-2">
                      <div className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-green-500 hover:bg-green-600 border-green-500 text-white left-0 md:left-2" />
              <CarouselNext className="bg-green-500 hover:bg-green-600 border-green-500 text-white right-0 md:right-2" />
            </Carousel>

            {/* Indicadores customizados (dots) */}
            <div className="flex justify-center gap-2 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'w-8 bg-green-500'
                      : 'w-2 bg-green-500/30 hover:bg-green-500/50'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Botão Instagram */}
          <div className="flex justify-center mt-12">
            <a
              href="https://www.instagram.com/nutribrasileiro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="font-semibold">Siga @nutribrasileiro no Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
