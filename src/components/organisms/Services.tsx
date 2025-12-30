import React from 'react';

export const Services: React.FC = () => {
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
            title: "Limpeza Profissional",
            img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070&auto=format&fit=crop",
            desc: "Limpeza profunda após esvaziamento para que o imóvel esteja pronto para venda ou aluguer."
        }
    ];

    return (
        <section id="services" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-serif text-blue-950 mb-6">Nossas Soluções</h2>
                    <p className="text-slate-600 text-xl max-w-2xl mx-auto">
                        Oferecemos uma gama completa de serviços adaptados às suas necessidades específicas.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, i) => (
                        <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <div className="h-64 overflow-hidden">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-blue-950 mb-3">{item.title}</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">{item.desc}</p>
                                <button className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-4 transition-all cursor-pointer">
                                    Saber mais
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
