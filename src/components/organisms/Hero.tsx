'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';

interface HeroProps {
    onBookingClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookingClick }) => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[120px] opacity-60"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-40"></div>

            <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
                <div className="lg:col-span-7 reveal animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center gap-4 mb-8">
                        <span className="h-[1px] w-12 bg-emerald-600"></span>
                        <span className="text-emerald-700 font-bold tracking-[0.4em] text-xs uppercase">Genève • Vaud • Suisse Romande</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-medium leading-[0.95] text-zinc-950 mb-10 tracking-tighter">
                        Débarras <br />
                        <span className="font-serif italic text-emerald-600">Profissional.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-500 mb-14 leading-relaxed max-w-xl font-light">
                        Especialistas em esvaziamento de casas e <span className="text-zinc-900 font-medium">remoção técnica de eletrodomésticos</span> em Genebra. Serviço completo, rápido e com a discrição suíça.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Button
                            onClick={onBookingClick}
                            variant="primary"
                            size="lg"
                            className="group relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)] !bg-zinc-950 border border-zinc-900 hover:border-emerald-500/50"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(110deg,transparent,rgba(16,185,129,0.3),transparent)] bg-[length:200%_100%] animate-[flow_2.5s_linear_infinite]" />
                            <span className="relative z-10 flex items-center gap-3 transition-all duration-300 group-hover:tracking-wider">
                                Iniciar Orçamento
                                <svg className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-zinc-200 hover:bg-zinc-50 text-zinc-600 font-bold"
                        >
                            Saiba Mais
                        </Button>
                    </div>
                </div>

                <div className="lg:col-span-5 relative reveal animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <div className="relative rounded-[60px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)] transition-all duration-1000 group">
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                            className="w-full h-[650px] object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]"
                            alt="Interiores de Luxo"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent"></div>
                    </div>

                    <div className="absolute -bottom-12 -left-12 glass bg-white/10 backdrop-blur-lg p-10 rounded-[40px] shadow-2xl max-w-[320px] border-white/50 border">
                        <div className="flex items-center gap-5 mb-6">
                            <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-600/30">
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em]">Certificado</p>
                                <p className="text-zinc-900 font-bold text-lg leading-tight uppercase italic">AA Débarras</p>
                            </div>
                        </div>
                        <p className="text-sm text-zinc-500 italic font-light leading-relaxed">"O padrão ouro em esvaziamento e limpeza técnica na Europa."</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
