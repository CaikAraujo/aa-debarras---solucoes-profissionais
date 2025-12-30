'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/atoms/Button';
import Link from 'next/link';

interface NavbarProps {
    onBookingClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookingClick }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <nav className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group z-50 relative">
                    <div className="w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-lg shadow-emerald-600/20 group-hover:scale-105 transition-transform">
                        AA
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-xl font-bold tracking-tight uppercase ${scrolled || mobileMenuOpen ? 'text-zinc-900' : 'text-zinc-900'}`}>
                            AA<span className="text-emerald-600">DÉBARRAS</span>
                        </span>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    {['Services', 'À Propos', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase().replace(' ', '-').replace('à-propos', 'about')}`}
                            className="relative text-xs font-bold text-zinc-500 uppercase tracking-widest group py-2"
                        >
                            <span className="group-hover:text-zinc-950 transition-colors duration-300">{item}</span>
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <Button onClick={onBookingClick} variant="primary" size="md" className="!bg-emerald-600 !text-white hover:!bg-emerald-700 shadow-emerald-500/20 hover:shadow-emerald-500/40 border-none transition-all hover:-translate-y-1">
                        Devis Gratuit
                    </Button>
                </div>

                <div className="flex items-center gap-4 md:hidden z-50">
                    <Button onClick={onBookingClick} variant="primary" size="sm" className="!bg-emerald-600 !text-white shadow-emerald-500/20 border-none !px-4 !py-2 text-[10px]">
                        Devis
                    </Button>
                    <button
                        className="p-2 text-zinc-900 relative group"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
                            <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'translate-x-full' : ''}`} />
                            <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white z-40 transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8 p-6 text-center">
                    {['Services', 'À Propos', 'Contact'].map((item, i) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase().replace(' ', '-').replace('à-propos', 'about')}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`text-3xl font-bold text-zinc-900 hover:text-emerald-600 transition-all transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            {item}
                        </Link>
                    ))}
                    <div className={`pt-8 w-full max-w-xs transition-all duration-700 delay-300 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <Button onClick={() => { setMobileMenuOpen(false); onBookingClick(); }} variant="primary" size="lg" className="w-full !bg-emerald-600 !text-white shadow-xl">
                            Solicitar Orçamento
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
