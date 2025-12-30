import React from 'react';

export const Features: React.FC = () => {
    const features = [
        {
            label: "Spécialité",
            title: "Expertise em Eletrodomésticos",
            desc: "Remoção técnica e segura de grandes equipamentos (frigoríficos, máquinas, etc).",
            color: "bg-emerald-600"
        },
        {
            label: "Efficacité",
            title: "Rigor Suíço",
            desc: "Execução precisa e pontual. Planeamento detalhado para zero imprevistos.",
            color: "bg-zinc-950"
        },
        {
            label: "Discrétion",
            title: "Sigilo Total",
            desc: "Protocolos de confidencialidade estritos para clientes de alto perfil.",
            color: "bg-zinc-800"
        }
    ];

    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-16">
                    {features.map((f, i) => (
                        <div key={i} className="group reveal animate-fade-in" style={{ animationDelay: `${0.2 * i}s` }}>
                            <span className="text-zinc-300 font-bold text-6xl block mb-6 transition-colors group-hover:text-emerald-100 leading-none">0{i + 1}</span>
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`w-3 h-3 rounded-full ${f.color}`}></div>
                                <span className="text-zinc-400 font-bold uppercase tracking-[0.3em] text-[10px]">{f.label}</span>
                            </div>
                            <h3 className="text-3xl font-medium text-zinc-950 mb-6">{f.title}</h3>
                            <p className="text-zinc-500 text-lg leading-relaxed font-light">{f.desc}</p>
                            <div className="h-1 w-0 bg-emerald-600 mt-8 transition-all duration-700 group-hover:w-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
