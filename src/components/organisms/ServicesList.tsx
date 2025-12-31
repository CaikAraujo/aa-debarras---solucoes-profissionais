import React from 'react';
import { Button } from '@/components/atoms/Button';

interface ServicesListProps {
    onBookingClick: () => void;
}

export const ServicesList: React.FC<ServicesListProps> = ({ onBookingClick }) => {
    const services = [
        {
            category: "Residencial",
            title: "Débarras de Casas",
            description: "Esvaziamento completo de vivendas, incluindo garagens, sótãos e jardins. Tratamos de tudo, desde a triagem inicial até à limpeza final.",
            features: ["Remoção de mobiliário", "Triagem de pertences", "Limpeza pós-obra", "Gestão de doações"],
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
            reverse: false
        },
        {
            category: "Apartamentos",
            title: "Apartamentos",
            description: "Serviço discreto para apartamentos em andares elevados com ou sem elevador. Especialistas em acessos difíceis e condomínios.",
            features: ["Acesso difícil/Escadas", "Elevador exterior", "Respeito condomínio", "Rapidez e discrição"],
            image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
            reverse: true
        },
        {
            category: "Comercial",
            title: "Escritórios e Empresas",
            description: "Soluções ágeis para empresas em mudança ou encerramento. Minimizamos o impacto nas suas operações com intervenções rápidas.",
            features: ["Desmontagem de cubículos", "Remoção de arquivo morto", "Reciclagem de eletrónicos", "Certificado de destruição"],
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
            reverse: false
        },
        {
            category: "Eletrodomésticos",
            title: "Débarras de électroménager",
            description: "Remoção ecológica de eletrodomésticos antigos, garantindo a reciclagem e o descarte responsável em centros certificados.",
            features: ["Reciclagem certificada", "Remoção de pesados", "Desconexão segura", "Eco-responsável"],
            image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070&auto=format&fit=crop",
            reverse: true
        }
    ];

    return (
        <section className="py-24 bg-zinc-50">
            <div className="container mx-auto px-6">
                <div className="space-y-32">
                    {services.map((service, i) => (
                        <div key={i} className={`flex flex-col lg:flex-row gap-16 items-center ${service.reverse ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Image Section */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="absolute inset-0 bg-emerald-600 rounded-[40px] rotate-3 group-hover:rotate-6 transition-transform duration-700 opacity-20"></div>
                                <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-[500px] object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent"></div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-1/2 space-y-8">
                                <span className="text-emerald-600 font-bold tracking-[0.3em] uppercase text-sm block">
                                    {service.category}
                                </span>
                                <h3 className="text-4xl md:text-5xl font-serif text-zinc-950 leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-zinc-600 text-lg leading-relaxed font-light">
                                    {service.description}
                                </p>

                                <ul className="grid grid-cols-2 gap-4">
                                    {service.features.map((feature, f) => (
                                        <li key={f} className="flex items-center gap-3 text-zinc-700 font-medium">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4">
                                    <Button onClick={onBookingClick} variant="outline" size="lg" className="border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white cursor-pointer">
                                        Solicitar Orçamento
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
