import React from 'react';

interface PageHeroProps {
    title: string;
    subtitle: string;
    description?: string;
    backgroundImage?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
    title,
    subtitle,
    description,
    backgroundImage = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
}) => {
    return (
        <section className="relative pt-48 pb-24 overflow-hidden bg-zinc-950">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 opacity-40">
                <img
                    src={backgroundImage}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-zinc-950/80"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in-up">
                <div className="flex items-center justify-center gap-4 mb-8">
                    <span className="h-[1px] w-12 bg-emerald-600"></span>
                    <span className="text-emerald-500 font-bold tracking-[0.4em] text-xs uppercase">{subtitle}</span>
                    <span className="h-[1px] w-12 bg-emerald-600"></span>
                </div>

                <h1 className="text-5xl md:text-7xl font-medium text-white mb-8 tracking-tight">
                    {title}
                </h1>

                {description && (
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
};
