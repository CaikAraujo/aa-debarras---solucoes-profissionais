import React from 'react';
import { Button } from '@/components/atoms/Button';

interface ServicesListProps {
    onBookingClick: () => void;
}

export const ServicesList: React.FC<ServicesListProps> = ({ onBookingClick }) => {
    const services = [
        {
            category: "Residencial",
            title: "Esvaziamento de Casas",
            description: "Serviço completo para vivendas, apartamentos e propriedades de luxo. Tratamos de tudo, desde a triagem inicial até à limpeza final.",
            features: ["Remoção de mobiliário", "Triagem de pertences", "Limpeza pós-obra", "Gestão de doações"],
            image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop",
            reverse: false
        },
        {
            category: "Comercial",
            title: "Escritórios & Espaços Corporativos",
            description: "Soluções ágeis para empresas em mudança ou encerramento. Minimizamos o impacto nas suas operações com intervenções rápidas e discretas.",
            features: ["Desmontagem de cubículos", "Remoção de arquivo morto", "Reciclagem de eletrónicos", "Certificado de destruição"],
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
            reverse: true
        },
        {
            category: "Especializado",
            title: "Limpeza & Casos Complexos",
            description: "Intervenções em situações delicadas (Síndrome de Diógenes, sucessões complexas) com o máximo respeito, discrição e profissionalismo.",
            features: ["Discreção absoluta", "Equipamento de proteção", "Higienização profunda", "Respeito pela privacidade"],
            image: "https://images.unsplash.com/photo-1505798577917-a651a5d40318?q=80&w=2070&auto=format&fit=crop",
            reverse: false
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
