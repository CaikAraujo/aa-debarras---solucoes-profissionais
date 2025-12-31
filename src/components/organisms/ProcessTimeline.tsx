import React from 'react';

export const ProcessTimeline: React.FC = () => {
    const steps = [
        {
            number: "01",
            title: "Diagnóstico",
            description: "A nossa equipa realiza uma visita técnica para avaliar o volume, a acessibilidade e as especificidades do espaço. Fornecemos um orçamento transparente e detalhado em 24h.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            )
        },
        {
            number: "02",
            title: "Intervenção",
            description: "No dia agendado, a nossa equipa especializada chega com todo o equipamento necessário. Procedemos à triagem, desmontagem e remoção com extremo cuidado e eficiência.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            number: "03",
            title: "Valorização Eco",
            description: "Nada se perde. Encaminhamos os bens para doação, reciclagem ou deposição certificada, garantindo uma pegada ambiental mínima e responsabilidade social.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            )
        },
        {
            number: "04",
            title: "Finalização",
            description: "O espaço é entregue limpo (vassoura) e pronto para o seu próximo propósito. Oferecemos também serviços complementares de limpeza profunda se necessário.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent"></div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif text-zinc-950 mb-6">O Nosso Método</h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-light">
                        Um processo refinado ao longo de anos de experiência na Suíça e em toda a Europa.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {steps.map((step, i) => (
                        <div key={i} className="group relative p-8 rounded-3xl bg-zinc-50 hover:bg-white border border-zinc-100 hover:border-emerald-100 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-500 relative z-10 border border-zinc-100/50">
                                    {step.icon}
                                </div>
                                <span className="text-5xl font-bold text-zinc-100 group-hover:text-emerald-50 transition-colors duration-500 select-none font-serif">
                                    {step.number}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-zinc-900 mb-4">{step.title}</h3>
                            <p className="text-zinc-500 leading-relaxed text-sm">
                                {step.description}
                            </p>

                            <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
