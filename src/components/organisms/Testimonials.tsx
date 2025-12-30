import React from 'react';

export const Testimonials: React.FC = () => {
    const testimonials = [
        {
            text: "Impressionnant. L'équipe a vidé notre appartement à Cologny en une journée. Une discrétion absolue et un nettoyage final impeccable. Vraiment 'Switzerland Standards'.",
            author: "Isabelle de V.",
            role: "Résidente à Cologny"
        },
        {
            text: "J'utilise AA Débarras pour tous les transferts de bureaux de notre banque. La gestion des archives confidentielles et du matériel informatique est parfaite. Un partenaire de confiance.",
            author: "Marc Webber",
            role: "Facility Manager, Banque Privée"
        },
        {
            text: "Service exceptionnel pour la succession de ma mère. Ils ont trié les objets de valeur avec respect et géré tout le reste. Un soulagement immense dans un moment difficile.",
            author: "Sophie Laurent",
            role: "Genève"
        }
    ];

    return (
        <section className="py-32 bg-zinc-50 border-t border-zinc-100/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 reveal animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-medium text-zinc-950 mb-6 tracking-tight">O que dizem nossos <span className="font-serif italic text-emerald-600">Clientes</span></h2>
                    <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 border border-zinc-100 group hover:-translate-y-2 reveal animate-fade-in-up" style={{ animationDelay: `${0.2 * i}s` }}>
                            <div className="text-emerald-500 mb-8">
                                <svg className="w-10 h-10 opacity-30 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.293 14.922 13.916C15.489 12.612 16.486 11.235 17.522 10.372C16.921 10.511 16.634 10.579 16.275 10.579C14.735 10.579 13.513 9.387 13.513 7.825C13.513 6.262 14.801 5 16.402 5C18.406 5 20.021 6.883 20.021 9.94C20.021 15.362 16.92 19.462 14.475 20.93L14.017 21ZM5.524 21L5.524 18C5.524 16.896 5.828 15.293 6.429 13.916C6.996 12.612 7.993 11.235 9.029 10.372C8.428 10.511 8.141 10.579 7.782 10.579C6.242 10.579 5.02 9.387 5.02 7.825C5.02 6.262 6.308 5 7.909 5C9.913 5 11.528 6.883 11.528 9.94C11.528 15.362 8.427 19.462 5.982 20.93L5.524 21Z" />
                                </svg>
                            </div>
                            <p className="text-zinc-600 text-lg leading-relaxed mb-8 italic font-light">"{t.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center font-bold text-zinc-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-zinc-900 text-sm uppercase tracking-wide">{t.author}</p>
                                    <p className="text-zinc-400 text-xs uppercase tracking-widest mt-1">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
