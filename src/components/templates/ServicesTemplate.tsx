'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import { ProjectBuilder } from '@/components/organisms/ProjectBuilder';
import { ServiceSelectionModal } from '@/components/organisms/ServiceSelectionModal';
import { PageHero } from '@/components/organisms/PageHero';
import { ProcessTimeline } from '@/components/organisms/ProcessTimeline';
import { ServicesList } from '@/components/organisms/ServicesList';
import { CallToAction } from '@/components/organisms/CallToAction';

export const ServicesTemplate: React.FC = () => {
    const [showBooking, setShowBooking] = useState(false);
    const [projectBuilderService, setProjectBuilderService] = useState<string | null>(null);

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
            {projectBuilderService ? (
                <div className="fixed inset-0 z-[60] bg-white animate-fade-in">
                    <ProjectBuilder
                        initialService={projectBuilderService}
                        onBack={() => setProjectBuilderService(null)}
                    />
                </div>
            ) : (
                <>
                    <Navbar onBookingClick={handleBookingClick} />

                    <PageHero
                        title="A Excelência em Esvaziamento"
                        subtitle="Nossos Serviços"
                        description="Combinamos eficiência logística com um atendimento premium para transformar espaços complexos em oportunidades claras."
                        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                    />

                    <ProcessTimeline />

                    <ServicesList onBookingClick={handleBookingClick} />

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
                                    <ServiceSelectionModal
                                        onSelect={(service) => {
                                            handleCloseBooking();
                                            setProjectBuilderService(service);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </main>
    );
};
