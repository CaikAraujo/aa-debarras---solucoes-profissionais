'use client';

import React, { useState } from 'react';
import { BookingStep } from '@/types';
import { Button } from '@/components/atoms/Button';

interface BookingFormProps {
    onComplete: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ onComplete }) => {
    const [step, setStep] = useState(BookingStep.PropertyType);
    const [formData, setFormData] = useState({
        type: '',
        size: '',
        urgent: false,
        cleaning: false,
        date: '',
        name: '',
        email: '',
        phone: ''
    });

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleServiceNext = () => {
        if (formData.urgent) {
            setStep(BookingStep.Contact);
        } else {
            setStep(BookingStep.DateSelection);
        }
    };

    const handleContactPrev = () => {
        if (formData.urgent) {
            setStep(BookingStep.Services);
        } else {
            setStep(BookingStep.DateSelection);
        }
    };

    const renderStep = () => {
        switch (step) {
            case BookingStep.PropertyType:
                return (
                    <div className="animate-reveal animate-fade-in">
                        <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4 block">Passo 01</span>
                        <h3 className="text-4xl font-medium text-zinc-950 mb-10 leading-tight">Que tipo de espaço <br /><span className="font-serif italic">vamos transformar?</span></h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { id: 'Casa', icon: '🏠', label: 'Residência' },
                                { id: 'Apartamento', icon: '🏢', label: 'Apartamento' },
                                { id: 'Escritório', icon: '💼', label: 'Comercial' },
                                { id: 'Garagem/Cave', icon: '📦', label: 'Armazém' }
                            ].map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => { setFormData({ ...formData, type: item.id }); nextStep(); }}
                                    className={`p-8 rounded-[32px] border-2 transition-all text-left flex flex-col gap-4 group cursor-pointer ${formData.type === item.id ? 'border-emerald-600 bg-emerald-50' : 'border-zinc-100 hover:border-emerald-200 bg-zinc-50/50'
                                        }`}
                                >
                                    <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                                    <span className="text-xl font-bold text-zinc-900">{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case BookingStep.Dimensions:
                return (
                    <div className="animate-reveal animate-fade-in">
                        <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4 block">Passo 02</span>
                        <h3 className="text-4xl font-medium text-zinc-950 mb-10">Qual a <span className="font-serif italic">escala</span> do projeto?</h3>
                        <div className="space-y-4">
                            {[
                                { id: 'Pequeno', label: 'Compacto', desc: 'Até 50m²' },
                                { id: 'Médio', label: 'Standard', desc: '50m² a 150m²' },
                                { id: 'Grande', label: 'Premium', desc: '150m² a 300m²' },
                                { id: 'Industrial', label: 'Corporativo', desc: 'Mais de 300m²' }
                            ].map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => { setFormData({ ...formData, size: item.id }); nextStep(); }}
                                    className={`w-full p-6 rounded-3xl border-2 transition-all text-left flex justify-between items-center group cursor-pointer ${formData.size === item.id ? 'border-emerald-600 bg-emerald-50 shadow-lg translate-x-2' : 'border-zinc-100 hover:border-emerald-100'
                                        }`}
                                >
                                    <div>
                                        <span className="text-xl font-bold block text-zinc-900">{item.label}</span>
                                        <span className="text-sm text-zinc-500">{item.desc}</span>
                                    </div>
                                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${formData.size === item.id ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-zinc-200'
                                        }`}>
                                        {formData.size === item.id && <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                                    </div>
                                </button>
                            ))}
                        </div>
                        <button onClick={prevStep} className="mt-8 text-zinc-400 font-bold text-sm uppercase tracking-widest hover:text-zinc-600">← Voltar</button>
                    </div>
                );

            case BookingStep.Services:
                return (
                    <div className="animate-reveal animate-fade-in">
                        <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4 block">Passo 03</span>
                        <h3 className="text-4xl font-medium text-zinc-950 mb-10">Toques <span className="font-serif italic">finais.</span></h3>
                        <div className="space-y-4">
                            <button
                                onClick={() => setFormData({ ...formData, urgent: !formData.urgent })}
                                className={`w-full p-8 rounded-[32px] border-2 flex items-center gap-6 text-left transition-all cursor-pointer ${formData.urgent ? 'border-emerald-600 bg-emerald-50' : 'border-zinc-100'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${formData.urgent ? 'bg-emerald-600 text-white' : 'bg-zinc-100 text-zinc-400'}`}>
                                    ⚡
                                </div>
                                <div>
                                    <span className="text-xl font-bold block text-zinc-900">Urgência Total</span>
                                    <p className="text-zinc-500 text-sm">Atendimento prioritário em 24h</p>
                                </div>
                            </button>

                            <button
                                onClick={() => setFormData({ ...formData, cleaning: !formData.cleaning })}
                                className={`w-full p-8 rounded-[32px] border-2 flex items-center gap-6 text-left transition-all cursor-pointer ${formData.cleaning ? 'border-emerald-600 bg-emerald-50' : 'border-zinc-100'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${formData.cleaning ? 'bg-emerald-600 text-white' : 'bg-zinc-100 text-zinc-400'}`}>
                                    ✨
                                </div>
                                <div>
                                    <span className="text-xl font-bold block text-zinc-900">Limpeza Profunda</span>
                                    <p className="text-zinc-500 text-sm">O imóvel fica pronto para habitar</p>
                                </div>
                            </button>

                            <Button
                                onClick={handleServiceNext}
                                variant="primary"
                                size="lg"
                                className="w-full mt-10 hover:bg-emerald-700 shadow-xl"
                            >
                                Continuar
                            </Button>
                        </div>
                        <button onClick={prevStep} className="mt-8 text-zinc-400 font-bold text-sm uppercase tracking-widest hover:text-zinc-600">← Voltar</button>
                    </div>
                );

            case BookingStep.DateSelection:
                return (
                    <div className="animate-reveal animate-fade-in">
                        <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4 block">Passo 04</span>
                        <h3 className="text-4xl font-medium text-zinc-950 mb-10">Para quando <span className="font-serif italic">precisa?</span></h3>

                        <div className="space-y-6">
                            <div className="p-8 rounded-[32px] border-2 border-zinc-100 bg-zinc-50/50">
                                <label className="block text-zinc-500 text-xs font-bold uppercase tracking-wider mb-4">Selecione uma data preferencial</label>
                                <input
                                    type="date"
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    className="w-full p-4 bg-white border border-zinc-200 rounded-xl outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-sans text-lg text-zinc-800"
                                    min={new Date().toISOString().split('T')[0]}
                                />
                                <p className="mt-4 text-sm text-zinc-400 font-light">
                                    *Data sujeita a confirmação após análise técnica.
                                </p>
                            </div>

                            <Button
                                onClick={() => setStep(BookingStep.Contact)}
                                disabled={!formData.date}
                                variant="primary"
                                size="lg"
                                className="w-full shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Continuar
                            </Button>
                        </div>
                        <button onClick={() => setStep(BookingStep.Services)} className="mt-8 text-zinc-400 font-bold text-sm uppercase tracking-widest hover:text-zinc-600">← Voltar</button>
                    </div>
                );

            case BookingStep.Contact:
                return (
                    <div className="animate-reveal animate-fade-in">
                        <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4 block">Final</span>
                        <h3 className="text-4xl font-medium text-zinc-950 mb-10">Quase lá. <span className="font-serif italic">Seus dados de contato.</span></h3>
                        <div className="space-y-6">
                            <div className="p-1 bg-zinc-100 rounded-[28px] p-8 space-y-4 border border-zinc-200/50">
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full p-5 bg-white border-0 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all text-lg font-light placeholder:text-zinc-400"
                                    placeholder="Seu nome completo"
                                />
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full p-5 bg-white border-0 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all text-lg font-light placeholder:text-zinc-400"
                                    placeholder="E-mail profissional"
                                />
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full p-5 bg-white border-0 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all text-lg font-light placeholder:text-zinc-400"
                                    placeholder="Telemóvel / WhatsApp"
                                />
                            </div>

                            <Button
                                onClick={nextStep}
                                disabled={!formData.name || !formData.email}
                                variant="secondary"
                                size="lg"
                                className="w-full disabled:opacity-30 shadow-2xl shadow-emerald-600/20"
                            >
                                Enviar Solicitação Premium
                            </Button>
                        </div>
                        <button onClick={handleContactPrev} className="mt-8 text-zinc-400 font-bold text-sm uppercase tracking-widest hover:text-zinc-600">← Voltar</button>
                    </div>
                );

            case BookingStep.Confirmation:
                return (
                    <div className="animate-reveal animate-fade-in text-center py-16">
                        <div className="w-32 h-32 bg-emerald-50 text-emerald-600 rounded-[40px] flex items-center justify-center mx-auto mb-10">
                            <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-5xl font-serif italic text-zinc-950 mb-6">Merci, {formData.name.split(' ')[0]}.</h3>
                        <p className="text-xl text-zinc-500 mb-12 max-w-md mx-auto leading-relaxed">
                            Recebemos seu pedido para o esvaziamento do seu {formData.type.toLowerCase()}.
                            {formData.date && <span className="block mt-2 font-medium text-emerald-600">Data preferencial: {new Date(formData.date).toLocaleDateString('fr-CH')}</span>}
                            Um especialista entrará em contato para o agendamento da visita técnica.
                        </p>
                        <Button
                            onClick={onComplete}
                            variant="primary"
                            size="lg"
                            className="shadow-xl"
                        >
                            Voltar ao Site
                        </Button>
                    </div>
                );
        }
    };

    return (
        <div className="relative max-w-2xl mx-auto">
            <div className="mb-12 flex justify-center gap-3">
                {[0, 1, 2, 3, 4].map((s) => (
                    <div
                        key={s}
                        className={`h-1.5 w-12 rounded-full transition-all duration-700 ${step >= s ? 'bg-emerald-600 w-16' : 'bg-zinc-100'
                            }`}
                    />
                ))}
            </div>
            {renderStep()}
        </div>
    );
};
