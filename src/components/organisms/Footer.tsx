import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-zinc-950 text-white py-32">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-16 mb-24">
                    <div className="col-span-2">
                        <div className="flex items-center gap-4 mb-10 group cursor-default">
                            <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold transition-transform group-hover:rotate-12">
                                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold tracking-tight uppercase italic">
                                    AA<span className="text-emerald-500 not-italic">DÉBARRAS</span>
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500 -mt-1">Switzerland</span>
                            </div>
                        </div>
                        <p className="text-zinc-400 text-lg max-w-md leading-relaxed font-light">
                            Referência europeia em serviços de limpeza técnica e esvaziamento de imóveis. Atuamos com os mais altos padrões de qualidade suíços, garantindo rapidez e responsabilidade absoluta.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-200 mb-10">Serviços</h4>
                        <ul className="space-y-5 text-zinc-500 font-medium text-sm">
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">Residencial Premium</a></li>
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">Esvaziamento Corporativo</a></li>
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">Limpeza Pós-Obras</a></li>
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">Gestão de Resíduos</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-200 mb-10">Contacto</h4>
                        <ul className="space-y-5 text-zinc-500 font-medium text-sm">
                            <li className="flex flex-col">
                                <span className="text-zinc-200">Suíça</span>
                                <span>+41 (0) 22 123 45 67</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="text-zinc-200">E-mail</span>
                                <span>contact@aa-debarras.ch</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest">© 2024 AA DÉBARRAS | EXCELLENCE IN SPACE REDEFINITION</p>
                    <div className="flex gap-8">
                        <a href="#" className="text-zinc-500 hover:text-white transition-all transform hover:-translate-y-1">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                        <a href="#" className="text-zinc-500 hover:text-white transition-all transform hover:-translate-y-1">
                            <span className="sr-only">Instagram</span>
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
