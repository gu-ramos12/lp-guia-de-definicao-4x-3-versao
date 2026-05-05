import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from './ui/carousel';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { trackCustomEvent } from '../lib/metaPixel';
import { useInView } from '../hooks/useInView';

import transformation1 from 'figma:asset/2093a5897e3709cf075453176bf4b1c36fa677f8.png';
import transformation2 from 'figma:asset/758aceae606c8b5bc76cf1b9d8bacd9610fa8551.png';
import transformation3 from 'figma:asset/af7817a41b61632419e57f8489262873fcf9a659.png';
import transformation4 from 'figma:asset/7859c881e06a304b743d1502f57525f27ee729c6.png';
import transformation5 from 'figma:asset/be2757aa9c3e4c74d9928c0059e8fc33c0d1bd30.png';
import transformation6 from 'figma:asset/6320db0e320a2aae88ed4836cc1f1d0394c5e3fa.png';
import transformation7 from 'figma:asset/1bf8d0b41592385fbecdf7bd6aedb9678ec6bfa8.png';
import danielle from '../assets/danielle.jpeg';
import lucas from '../assets/lucas.jpeg';
import mateus from '../assets/mateus.jpeg';
import otavioNovo from '../assets/otavio-novo.jpeg';

const transformations = [
  {
    src: transformation1,
    alt: "Transformação Real - Gabriela - Antes e Depois",
    name: "Gabriela - Paciente do RB Team",
  },
  {
    src: lucas,
    alt: "Transformação Real - Lucas - Antes e Depois",
    name: "Lucas - Paciente do RB Team",
  },
  {
    src: danielle,
    alt: "Transformação Real - Danielle - Antes e Depois",
    name: "Danielle - Paciente do RB Team",
  },
  {
    src: transformation2,
    alt: "Transformação Real - Thiago - Antes e Depois",
    name: "Thiago - Paciente do RB Team",
  },
  {
    src: transformation3,
    alt: "Transformação Real - Amanda - Antes e Depois",
    name: "Amanda - Paciente do RB Team",
  },
  {
    src: transformation4,
    alt: "Transformação Real - Otávio - Antes e Depois",
    name: "Otávio - Paciente do RB Team",
  },
  {
    src: mateus,
    alt: "Transformação Real - Mateus - Antes e Depois",
    name: "Mateus - Paciente do RB Team",
  },
  {
    src: transformation6,
    alt: "Transformação Real - Fernanda - Antes e Depois",
    name: "Fernanda - Paciente do RB Team",
  },
  {
    src: transformation5,
    alt: "Transformação Real - Rodrigo - Antes e Depois",
    name: "Rodrigo - Paciente do RB Team",
  },
  {
    src: transformation7,
    alt: "Transformação Real - Henrique - Antes e Depois",
    name: "Henrique - Paciente do RB Team",
  },
  {
    src: otavioNovo,
    alt: "Transformação Real - Otávio - Antes e Depois",
    name: "Otávio - Paciente do RB Team",
  },
];

export function TransformationSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Tracks whether Carousel_Engaged has already fired (1x per session)
  const carouselTrackedRef = useRef(false);

  // Fires View_SocialProof the first time the section enters viewport
  const handleViewSocialProof = useCallback(() => {
    trackCustomEvent('View_SocialProof', {
      section: 'transformations',
    });
  }, []);

  const sectionRef = useInView<HTMLElement>(handleViewSocialProof, 0.3);

  // Fires Carousel_Engaged on the first human interaction (click/touch/swipe).
  // Auto-play does NOT trigger pointer events, so it's safely ignored.
  const handleCarouselInteraction = useCallback(() => {
    if (carouselTrackedRef.current) return;
    carouselTrackedRef.current = true;
    trackCustomEvent('Carousel_Engaged', {
      section: 'transformations',
    });
  }, []);

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
      <section ref={sectionRef} id="resultados" className="py-20 bg-white">
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
    <section ref={sectionRef} id="resultados" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <Badge className="bg-green-500/10 text-green-600 border-green-500/30 mb-4 md:mb-6 text-xs sm:text-sm">
            Resultados Reais
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-slate-900 font-bold px-2 leading-tight">
            Veja as <span className="text-green-500">Transformações</span> dos nossos pacientes
          </h2>
        </div>
        
        {/* Carrossel de Transformações - Sem moldura */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative px-8 sm:px-10 md:px-12 lg:px-16"
            onPointerDown={handleCarouselInteraction}
          >
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
                    <div className="px-1 sm:px-2">
                      {/* Imagem sem moldura */}
                      <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-xl sm:shadow-2xl">
                        <ImageWithFallback
                          src={transformation.src}
                          alt={transformation.alt}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      {/* Texto abaixo da imagem */}
                      <div className="text-center mt-4 md:mt-6">
                        <p className="text-sm sm:text-base md:text-lg text-gray-700">{transformation.name}</p>
                        <div className="flex items-center justify-center gap-2 mt-2">
                          <div className="h-1 w-1 rounded-full bg-green-500"></div>
                          <p className="text-xs sm:text-sm text-green-600">Transformação Real</p>
                          <div className="h-1 w-1 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-green-500 hover:bg-green-600 border-green-500 text-white left-0 sm:left-1 md:left-2 shadow-lg w-8 h-8 sm:w-10 sm:h-10" />
              <CarouselNext className="bg-green-500 hover:bg-green-600 border-green-500 text-white right-0 sm:right-1 md:right-2 shadow-lg w-8 h-8 sm:w-10 sm:h-10" />
            </Carousel>

            {/* Indicadores customizados (dots) */}
            <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 md:mt-10">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'w-6 sm:w-8 bg-green-500'
                      : 'w-1.5 sm:w-2 bg-green-500/30 hover:bg-green-500/50'
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
