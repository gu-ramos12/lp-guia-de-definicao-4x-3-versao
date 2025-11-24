import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Como recebo o acesso?",
    answer: "Você recebe o acesso imediatamente por e-mail assim que o pagamento é confirmado."
  },
  {
    question: "Preciso de academia?",
    answer: "Não. Há versões para academia e para casa, com ou sem equipamentos."
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
    answer: "Para quem procura \"milagres\" sem compromisso mínimo com treino/rotina e recomendações básicas de saúde."
  },
  {
    question: "Há acompanhamento?",
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-green-400 mb-4">
            Perguntas Frequentes
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
              <button
                className="w-full text-left p-6 flex justify-between items-center hover:bg-slate-750 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-white pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-green-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}