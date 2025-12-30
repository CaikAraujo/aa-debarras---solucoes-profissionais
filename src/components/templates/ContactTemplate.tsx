'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import { BookingForm } from '@/components/organisms/BookingForm';
import { PageHero } from '@/components/organisms/PageHero';
import { Button } from '@/components/atoms/Button';

export const ContactTemplate: React.FC = () => {
    const [showBooking, setShowBooking] = useState(false);
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });

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
                title="Fale Connosco"
                subtitle="Estamos Aqui"
                description="Tem alguma dúvida específica ou proposta de parceria? A nossa equipa está pronta para ouvir."
                backgroundImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
            />

            <section className="py-24 bg-zinc-50 -mt-20 relative z-20">
                <div className="container mx-auto px-6">
                    <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row">

                        {/* Commercial Info & Map Placeholder */}
                        <div className="lg:w-5/12 bg-zinc-950 p-12 md:p-16 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-900/20 rounded-full blur-[100px] -mr-20 -mt-20"></div>

                            <div className="relative z-10 space-y-12">
                                <div>
                                    <h3 className="text-2xl font-serif mb-6 text-emerald-400">Siège à Genève</h3>
                                    <p className="text-zinc-400 leading-relaxed text-lg font-light">
                                        Rue du Rhône 14<br />
                                        1204 Genève<br />
                                        Suisse
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-serif mb-6 text-emerald-400">Contact Direct</h3>
                                    <ul className="space-y-4 text-zinc-300">
                                        <li className="flex items-center gap-4 group cursor-pointer hover:text-white transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-emerald-900/50 transition-colors">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                            </div>
                                            +41 22 000 00 00
                                        </li>
                                        <li className="flex items-center gap-4 group cursor-pointer hover:text-white transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-emerald-900/50 transition-colors">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                            </div>
                                            info@aadebarras.ch
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-serif mb-6 text-emerald-400">Horaires</h3>
                                    <div className="flex justify-between text-zinc-400 border-b border-zinc-800 pb-2 mb-2">
                                        <span>Lun - Ven</span>
                                        <span>08:00 - 18:30</span>
                                    </div>
                                    <div className="flex justify-between text-zinc-400">
                                        <span>Sáb - Dom</span>
                                        <span>Urgências 24h</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* General Contact Form */}
                        <div className="lg:w-7/12 p-12 md:p-16 bg-white">
                            <h2 className="text-3xl font-medium text-zinc-950 mb-2">Envie uma Mensagem</h2>
                            <p className="text-zinc-500 mb-10">Responderemos em menos de 2h úteis.</p>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Nome</label>
                                        <input
                                            type="text"
                                            className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-emerald-500 transition-colors"
                                            placeholder="Seu nome"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Email</label>
                                        <input
                                            type="email"
                                            className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-emerald-500 transition-colors"
                                            placeholder="email@empresa.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Assunto</label>
                                    <select className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-emerald-500 transition-colors cursor-pointer text-zinc-600">
                                        <option>Informações Gerais</option>
                                        <option>Parcerias</option>
                                        <option>Recrutamento</option>
                                        <option>Imprensa</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Mensagem</label>
                                    <textarea
                                        rows={5}
                                        className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-emerald-500 transition-colors resize-none"
                                        placeholder="Como podemos ajudar?"
                                    ></textarea>
                                </div>

                                <Button variant="primary" size="lg" className="w-full md:w-auto shadow-xl">
                                    Enviar Mensagem
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

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
