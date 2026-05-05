import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { trackCustomEvent } from '../lib/metaPixel';

const faqs = [
  {
    question: "Como recebo o acesso?",
    answer: "Você recebe o acesso imediatamente por e-mail assim que o pagamento é confirmado."
  },
  {
    question: "Em quanto tempo vejo resultados?",
    answer: "Muitos alunos relatam mudanças em poucas semanas. O ritmo varia conforme perfil e adesão."
  },
  {
    question: "Para quem é?",
    answer: "Para adultos que buscam definição muscular com treinos curtos e orientação prática de alimentação."
  },
  {
    question: "Para quem não é?",
    answer: "Não é para quem já está satisfeito com o que vê no espelho"
  },
  {
    question: "Tem suporte para dúvidas sobre o guia?",
    answer: "Sim. Você tem suporte para dúvidas diretamente na plataforma."
  },
  {
    question: "Existe garantia?",
    answer: "Sim, garantia de 7 dias. Se não curtir, pedimos o reembolso."
  },
  {
    question: "Quais formas de pagamento?",
    answer: "Cartão, PIX e Boleto (processamento seguro)."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // Track which FAQs have already fired the event to avoid double-counting
  // when a user opens, closes, and reopens the same item.
  const [trackedIndices, setTrackedIndices] = useState<Set<number>>(new Set());

  const toggleFAQ = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);

    // Fire event only when OPENING a FAQ for the first time
    if (isOpening && !trackedIndices.has(index)) {
      trackCustomEvent('FAQ_Open', {
        question: faqs[index].question,
        index,
      });
      setTrackedIndices((prev) => new Set(prev).add(index));
    }
  };

  return (
    <section className="py-12 md:py-20 bg-slate-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-green-400 mb-3 md:mb-4 px-2 leading-tight">
            Perguntas Frequentes
          </h2>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
              <button
                className="w-full text-left p-4 sm:p-5 md:p-6 flex justify-between items-center hover:bg-slate-750 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-white text-sm sm:text-base pr-3 sm:pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
                  <p className="text-gray-300 text-sm sm:text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
