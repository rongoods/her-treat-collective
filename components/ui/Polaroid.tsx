import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PolaroidProps {
    src: string;
    alt: string;
    caption?: string;
    rotation?: number;
    className?: string;
    priority?: boolean;
}

export function Polaroid({ src, alt, caption, rotation = 0, className, priority = false }: PolaroidProps) {
    return (
        <div
            className={cn(
                "relative bg-white p-3 pb-12 shadow-polaroid transition-transform hover:scale-105 hover:z-10 mx-auto",
                className
            )}
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            <div className="relative aspect-[2/3] w-full overflow-hidden bg-gray-100">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={priority}
                />
            </div>
            {caption && (
                <div className="absolute bottom-2 left-0 right-0 text-center">
                    <p className="font-sans text-sm text-gray-600 font-medium handwriting">{caption}</p>
                </div>
            )}
        </div>
    );
}
