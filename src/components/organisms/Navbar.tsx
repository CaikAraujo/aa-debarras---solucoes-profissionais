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

    return (

        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <nav className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-lg shadow-emerald-600/20 group-hover:scale-105 transition-transform">
                        AA
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-xl font-bold tracking-tight uppercase ${scrolled ? 'text-zinc-900' : 'text-zinc-900'}`}>
                            AA<span className="text-emerald-600">DÉBARRAS</span>
                        </span>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/services" className="text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors uppercase tracking-wider">Services</Link>
                    <Link href="/about" className="text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors uppercase tracking-wider">À Propos</Link>
                    <Link href="/contact" className="text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors uppercase tracking-wider">Contact</Link>
                    <Button onClick={onBookingClick} variant="primary" size="md" className="shadow-none hover:shadow-lg translate-y-0">
                        Devis Gratuit
                    </Button>
                </div>

                <button className="md:hidden p-2 text-zinc-800" onClick={onBookingClick}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>
        </header>
    );

};
