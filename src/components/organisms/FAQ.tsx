import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Como é calculado o orçamento?",
            answer: "O nosso orçamento é baseado no volume (m³) de bens a remover, na acessibilidade do local (andar, elevador, estacionamento) e no tipo de resíduos. Visitas técnicas para avaliação exata são gratuitas em toda a Suíça Romanda."
        },
        {
            question: "Vocês realizam limpezas pós-morte (Dioge)?",
            answer: "Sim, possuímos equipas especializadas e discretas para situações sensíveis, incluindo limpeza extrema, desinfeção e gestão de documentos importantes, sempre com respeito absoluto."
        },
        {
            question: "O que acontece aos objetos recolhidos?",
            answer: "Seguimos uma hierarquia ecológica rigorosa: 1) Doação a instituições locais parceiras; 2) Reciclagem em centros certificados; 3) Incineração de resíduos não valorizáveis. Nada é desperdiçado."
        },
        {
            question: "Têm seguro de responsabilidade civil?",
            answer: "Absolutamente. Estamos cobertos por um seguro profissional abrangente até CHF 5.000.000, garantindo tranquilidade total durante intervenções em propriedades de luxo ou com peças de arte."
        },
        {
            question: "Quanto tempo demora uma intervenção?",
            answer: "A maioria dos apartamentos (até 80m²) é esvaziada num único dia. Moradias maiores ou escritórios podem requerer 2 a 3 dias. Comprometemo-nos sempre com prazos fixos antes de iniciar."
        }
    ];

    return (
        <section className="py-32 bg-white border-t border-zinc-100">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-20 reveal animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-medium text-zinc-950 mb-6 tracking-tight">Dúvidas <span className="font-serif italic text-emerald-600">Frequentes</span></h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`border rounded-[32px] transition-all duration-300 overflow-hidden ${openIndex === i ? 'border-emerald-500/30 bg-emerald-50/10 shadow-lg shadow-emerald-900/5' : 'border-zinc-100 bg-zinc-50/50 hover:bg-white'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-8 text-left cursor-pointer"
                            >
                                <span className={`font-bold text-lg pr-8 transition-colors ${openIndex === i ? 'text-zinc-950' : 'text-zinc-600'}`}>
                                    {faq.question}
                                </span>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === i ? 'bg-emerald-600 text-white rotate-180' : 'bg-white border border-zinc-100 text-zinc-400'}`}>
                                    {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="px-8 pb-8 text-zinc-500 leading-relaxed font-light">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
