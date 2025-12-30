'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/organisms/Navbar';
import { Hero } from '@/components/organisms/Hero';
import { Features } from '@/components/organisms/Features';
import { Services } from '@/components/organisms/Services';
import { CallToAction } from '@/components/organisms/CallToAction';
import { Footer } from '@/components/organisms/Footer';
import { BookingForm } from '@/components/organisms/BookingForm';

export const HomeTemplate: React.FC = () => {
    const [showBooking, setShowBooking] = useState(false);

    return (
        <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden">
            <Navbar onBookingClick={() => setShowBooking(true)} />

            <main className="flex-grow">
                <Hero onBookingClick={() => setShowBooking(true)} />
                <Features />
                <Services />

                {showBooking && (
                    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
                        <div className="bg-white rounded-[48px] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative border border-white/20 animate-reveal">
                            <button
                                onClick={() => setShowBooking(false)}
                                className="absolute top-8 right-8 text-zinc-400 hover:text-zinc-950 transition-colors z-10 p-2 hover:bg-zinc-100 rounded-full"
                            >
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="p-8 md:p-16">
                                <BookingForm onComplete={() => setShowBooking(false)} />
                            </div>
                        </div>
                    </div>
                )}

                <CallToAction onBookingClick={() => setShowBooking(true)} />
            </main>

            <Footer />
        </div>
    );
};
