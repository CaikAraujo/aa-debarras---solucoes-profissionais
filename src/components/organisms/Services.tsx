import React from 'react';

interface ServicesProps {
    onServiceSelect: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onServiceSelect }) => {
    const items = [
        {
            title: "Débarras de Casas",
            img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
            desc: "Esvaziamento completo de vivendas, incluindo garagens, sótãos e jardins."
        },
        {
            title: "Apartamentos",
            img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
            desc: "Serviço discreto para apartamentos em andares elevados com ou sem elevador."
        },
        {
            title: "Escritórios e Empresas",
            img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
            desc: "Remoção de mobiliário de escritório, arquivos mortos e equipamentos eletrónicos."
        },
        {
            title: "Débarras de électroménager",
            img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070&auto=format&fit=crop",
            desc: "Remoção ecológica de eletrodomésticos antigos, garantindo a reciclagem e o descarte responsável."
        }
    ];

    return (
        <section id="services" className="py-32 bg-zinc-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 animate-reveal">
                    <h2 className="text-5xl md:text-6xl font-medium text-zinc-950 mb-6 tracking-tight">Nossas <span className="font-serif italic text-emerald-600">Soluções</span></h2>
                    <p className="text-zinc-500 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Oferecemos uma gama completa de serviços adaptados às suas necessidades específicas.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, i) => (
                        <div key={i} className="group bg-white rounded-[32px] overflow-hidden border border-zinc-100 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500 transform hover:-translate-y-2">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-zinc-950 mb-3 group-hover:text-emerald-700 transition-colors">{item.title}</h3>
                                <p className="text-zinc-500 mb-8 leading-relaxed font-light text-sm">{item.desc}</p>
                                <button
                                    onClick={() => onServiceSelect(item.title)}
                                    className="text-zinc-950 font-bold text-xs uppercase tracking-widest flex items-center gap-3 group-hover:gap-5 transition-all cursor-pointer group-hover:text-emerald-600"
                                >
                                    Saber mais
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
