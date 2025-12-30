import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
    className,
    variant = 'primary',
    size = 'md',
    children,
    ...props
}) => {
    const baseStyles = "rounded-full font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer";

    const variants = {
        primary: "bg-zinc-950 text-white hover:bg-emerald-600 shadow-lg hover:shadow-emerald-600/20",
        secondary: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/30",
        outline: "border border-zinc-200 text-zinc-600 hover:bg-zinc-50",
        ghost: "text-zinc-500 hover:text-emerald-600 bg-transparent hover:bg-zinc-100/50"
    };

    const sizes = {
        sm: "px-6 py-2 text-xs uppercase tracking-widest",
        md: "px-8 py-3 text-sm uppercase tracking-widest",
        lg: "px-12 py-6 text-xl"
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
};
