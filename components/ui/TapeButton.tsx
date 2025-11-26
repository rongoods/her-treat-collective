import Link from 'next/link';
import { cn } from '@/lib/utils';

interface TapeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    href?: string;
    variant?: 'clear' | 'washi' | 'masking';
    className?: string;
}

export function TapeButton({ text, href, variant = 'clear', className, ...props }: TapeButtonProps) {
    const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 font-bold text-black transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 rotate-[-1deg] hover:rotate-0";

    const variants = {
        clear: "bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-sm",
        washi: "bg-pink-light/90 text-white shadow-md",
        masking: "bg-yellow-100/90 text-gray-800 shadow-sm border border-yellow-200/50",
    };

    // Tape overlay effect (pseudo-element simulation)
    const tapeEffect = "before:absolute before:inset-0 before:bg-[url('/assets/tape-texture.png')] before:opacity-20 before:pointer-events-none";

    const content = (
        <span className={cn(baseStyles, variants[variant], tapeEffect, className)}>
            <span className="relative z-10 font-sans text-lg tracking-wide">{text}</span>
            {/* Tape ends simulation */}
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-transparent to-black/5 mask-image-zigzag" />
            <span className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-l from-transparent to-black/5 mask-image-zigzag" />
        </span>
    );

    if (href) {
        return (
            <Link href={href} className="inline-block">
                {content}
            </Link>
        );
    }

    return (
        <button {...props} className="inline-block">
            {content}
        </button>
    );
}
