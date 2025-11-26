import { cn } from '@/lib/utils';

interface TornPaperProps {
    children: React.ReactNode;
    className?: string;
}

export function TornPaper({ children, className }: TornPaperProps) {
    return (
        <div className={cn("relative p-8 bg-white shadow-lg", className)}>
            {/* Top torn edge */}
            <div
                className="absolute -top-3 left-0 right-0 h-4 bg-white"
                style={{
                    clipPath: 'polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)'
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>

            {/* Bottom torn edge */}
            <div
                className="absolute -bottom-3 left-0 right-0 h-4 bg-white"
                style={{
                    clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)'
                }}
            />
        </div>
    );
}
