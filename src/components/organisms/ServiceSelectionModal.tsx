import React from 'react';
import { Home, Building2, Briefcase, Zap } from 'lucide-react';

interface ServiceSelectionModalProps {
    onSelect: (service: string) => void;
}

export const ServiceSelectionModal: React.FC<ServiceSelectionModalProps> = ({ onSelect }) => {
    const services = [
        {
            id: 'Débarras de Casas',
            title: 'Casa / Vivenda',
            description: 'Esvaziamento completo residencial',
            icon: <Home className="w-8 h-8" strokeWidth={1.5} />,
            color: 'bg-emerald-100 text-emerald-600'
        },
        {
            id: 'Apartamentos',
            title: 'Apartamento',
            description: 'Serviço especializado para prédios',
            icon: <Building2 className="w-8 h-8" strokeWidth={1.5} />,
            color: 'bg-blue-100 text-blue-600'
        },
        {
            id: 'Escritórios e Empresas',
            title: 'Escritório',
            description: 'Soluções corporativas e comerciais',
            icon: <Briefcase className="w-8 h-8" strokeWidth={1.5} />,
            color: 'bg-purple-100 text-purple-600'
        },
        {
            id: 'Débarras de électroménager',
            title: 'Eletrodomésticos',
            description: 'Remoção e reciclagem eco-friendly',
            icon: <Zap className="w-8 h-8" strokeWidth={1.5} />,
            color: 'bg-amber-100 text-amber-600'
        }
    ];

    return (
        <div className="animate-reveal animate-fade-in">
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4 block">Começar</span>
            <h3 className="text-4xl font-medium text-zinc-950 mb-10 leading-tight">
                Qual serviço você <br />
                <span className="font-serif italic">precisa hoje?</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                    <button
                        key={service.id}
                        onClick={() => onSelect(service.id)}
                        className="group flex items-start gap-4 p-6 rounded-[24px] border border-zinc-100 bg-zinc-50 hover:bg-white hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 text-left active:scale-95"
                    >
                        <div className={`p-4 rounded-2xl ${service.color} transition-transform group-hover:scale-110 duration-500`}>
                            {service.icon}
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-sm text-zinc-500 group-hover:text-zinc-600 transition-colors mt-1 font-light">
                                {service.description}
                            </p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};
