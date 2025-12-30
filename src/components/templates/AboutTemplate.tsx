'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import { BookingForm } from '@/components/organisms/BookingForm';
import { PageHero } from '@/components/organisms/PageHero';
import { ValuesGrid } from '@/components/organisms/ValuesGrid';
import { CallToAction } from '@/components/organisms/CallToAction';

export const AboutTemplate: React.FC = () => {
    const [showBooking, setShowBooking] = useState(false);

    const handleBookingClick = () => {
        setShowBooking(true);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseBooking = () => {
        setShowBooking(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar onBookingClick={handleBookingClick} />

            <PageHero
                title="O Padrão Suíço em Portugal"
                subtitle="Sobre Nós"
                description="Uma história de precisão, dedicação e serviço premium. Trazemos a experiência de Genebra para Lisboa."
                backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            />

            {/* Manifesto Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop"
                                    alt="Equipa em reunião"
                                    className="rounded-[40px] shadow-2xl relative z-10"
                                />
                                <div className="absolute top-10 -right-10 w-full h-full border-2 border-emerald-600 rounded-[40px] z-0 hidden lg:block"></div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-8">
                            <span className="text-emerald-600 font-bold tracking-[0.3em] uppercase text-sm block">A Nossa Missão</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-zinc-950 leading-tight">
                                Mais do que limpeza.<br />
                                <span className="italic text-zinc-500">Renovação.</span>
                            </h2>
                            <div className="space-y-6 text-lg text-zinc-600 font-light leading-relaxed">
                                <p>
                                    Fundada com base nos princípios de excelência e organização suíços, a AA Débarras nasceu para preencher uma lacuna no mercado português: a necessidade de um serviço de esvaziamento profissional, discreto e completo.
                                </p>
                                <p>
                                    Sabemos que esvaziar um imóvel é muitas vezes um momento de transição — uma mudança, uma herança, uma venda. Por isso, a nossa abordagem vai além do físico. Cuidamos do espaço para que se possa focar no futuro.
                                </p>
                                <p className="font-medium text-emerald-800">
                                    "A nossa promessa é simples: entregar um espaço imaculado, no prazo estipulado, sem surpresas."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ValuesGrid />

            <CallToAction onBookingClick={handleBookingClick} />

            <Footer />

            {/* Booking Modal Overlay */}
            {showBooking && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <div
                        className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm transition-opacity"
                        onClick={handleCloseBooking}
                    ></div>
                    <div className="relative w-full max-w-4xl bg-white rounded-[40px] shadow-2xl overflow-hidden animate-reveal max-h-[90vh] overflow-y-auto custom-scrollbar">
                        <div className="absolute top-6 right-6 z-10">
                            <button
                                onClick={handleCloseBooking}
                                className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-zinc-200 transition-colors cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="p-8 md:p-12">
                            <BookingForm onComplete={handleCloseBooking} />
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};
