import Link from 'next/link';
import { cn } from '@/lib/utils';

interface TapeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    href?: string;
    variant?: 'clear' | 'washi' | 'masking';
    className?: string;
}

export function TapeButton({ text, href, variant = 'clear', className, ...props }: TapeButtonProps) {
    const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 font-bold text-black transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 rotate-[-1deg] hover:rotate-0 tape-clip";

    const variants = {
        clear: "bg-white/60 backdrop-blur-sm border-2 border-white/50 shadow-sm",
        washi: "bg-pink-400/80 text-white shadow-md",
        masking: "bg-yellow-100/90 text-gray-800 shadow-sm border border-yellow-200/50",
    };

    // Tape overlay effect
    const tapeTexture = "before:absolute before:inset-0 before:bg-[url('/assets/tape-texture.png')] before:opacity-30 before:pointer-events-none before:bg-repeat";

    const content = (
        <span className={cn(baseStyles, variants[variant], tapeTexture, className)}>
            <span className="relative z-10 font-sans text-lg tracking-wide">{text}</span>
        </span>
    );

    if (href) {
        return (
            <Link href={href} className="inline-block filter drop-shadow-md">
                {content}
            </Link>
        );
    }

    return (
        <button {...props} className="inline-block filter drop-shadow-md">
            {content}
        </button>
    );
}
