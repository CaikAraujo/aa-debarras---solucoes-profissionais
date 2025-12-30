'use client';

import React from 'react';
import { Button } from '@/components/atoms/Button';

interface CallToActionProps {
    onBookingClick: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onBookingClick }) => {
    return (
        <section id="contact" className="py-32 bg-zinc-50 border-y border-zinc-100">
            <div className="container mx-auto px-6 text-center">
                <span className="text-emerald-600 font-bold text-sm uppercase tracking-[0.4em] mb-6 block">Ready to start?</span>
                <h2 className="text-5xl md:text-7xl font-medium mb-10 text-zinc-950">Pronto para a <br /><span className="font-serif italic text-emerald-600">transformação?</span></h2>
                <p className="text-xl text-zinc-500 mb-14 max-w-2xl mx-auto font-light leading-relaxed">
                    De pequenos estúdios a complexos industriais. Oferecemos a precisão suíça que o seu imóvel merece.
                </p>
                <Button
                    onClick={onBookingClick}
                    variant="secondary"
                    size="lg"
                    className="shadow-2xl shadow-emerald-600/30 bg-emerald-600 hover:bg-emerald-700 text-white mx-auto"
                >
                    Solicitar Orçamento Gratuito
                </Button>
            </div>
        </section>
    );
};
