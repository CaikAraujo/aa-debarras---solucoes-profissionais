import React from 'react';

export const ValuesGrid: React.FC = () => {
    const values = [
        {
            title: "Precisão Suíça",
            description: "Não deixamos nada ao acaso. Cada projeto é planeado ao minuto e executado com rigor militar.",
            icon: "🇨🇭"
        },
        {
            title: "Discrição Absoluta",
            description: "Entendemos a sensibilidade de cada situação. A nossa equipa opera de forma silenciosa e confidencial.",
            icon: "🔒"
        },
        {
            title: "Compromisso Eco",
            description: "Priorizamos a economia circular. Doar, reciclar e valorizar antes de descartar.",
            icon: "🌱"
        },
        {
            title: "Transparência",
            description: "Orçamentos claros, sem custos ocultos. O valor acordado é o valor final.",
            icon: "💎"
        },
        {
            title: "Agilidade",
            description: "Capacidade de resposta imediata para situações urgentes, 7 dias por semana.",
            icon: "⚡"
        },
        {
            title: "Humanidade",
            description: "Por trás de cada objeto há uma história. Tratamos o passado com o respeito que ele merece.",
            icon: "🤝"
        }
    ];

    return (
        <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(30deg,#10b981_1px,transparent_1px)] bg-[length:50px_50px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-emerald-500 font-bold tracking-[0.3em] uppercase text-sm block mb-4">O Nosso DNA</span>
                    <h2 className="text-4xl md:text-5xl font-serif mb-6">Valores Inegociáveis</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Mais do que esvaziar espaços, construímos confiança através de princípios sólidos.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, i) => (
                        <div key={i} className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-8 rounded-3xl hover:border-emerald-500/30 hover:bg-zinc-900 transition-all duration-300 group">
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-emerald-50 group-hover:text-emerald-400 transition-colors">
                                {value.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed text-sm group-hover:text-zinc-300 transition-colors">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
