'use client';

import { urlFor } from '@/sanity/lib/image';
import { CollageLayer } from '@/types';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CollageHeaderProps {
    layers: CollageLayer[];
    className?: string;
}

export function CollageHeader({ layers, className }: CollageHeaderProps) {
    if (!layers || layers.length === 0) return null;

    return (
        <div className={`relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-gray-50 ${className}`}>
            {layers.map((layer, index) => (
                <motion.div
                    key={layer._key || index}
                    className="absolute"
                    style={{
                        left: `${layer.x}%`,
                        top: `${layer.y}%`,
                        zIndex: layer.zIndex,
                        transform: `translate(-50%, -50%) rotate(${layer.rotation}deg) scale(${layer.scale})`,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: layer.scale }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    {layer.type === 'image' && layer.image && (
                        <div className="relative w-64 h-64 md:w-96 md:h-96 shadow-lg">
                            <Image
                                src={urlFor(layer.image).width(800).url()}
                                alt="Collage layer"
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}

                    {layer.type === 'polaroid' && layer.image && (
                        <div className="bg-white p-3 pb-12 shadow-polaroid w-48 md:w-64">
                            <div className="relative aspect-[4/5] w-full bg-gray-100">
                                <Image
                                    src={urlFor(layer.image).width(600).url()}
                                    alt="Polaroid layer"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    )}

                    {layer.type === 'sticker' && layer.image && (
                        <div className="relative w-32 h-32 md:w-48 md:h-48 drop-shadow-md hidden md:block">
                            <Image
                                src={urlFor(layer.image).width(400).url()}
                                alt="Sticker"
                                fill
                                className="object-contain"
                            />
                        </div>
                    )}

                    {layer.type === 'tape' && layer.image && (
                        <div className="relative w-32 h-12 md:w-48 md:h-16 opacity-90 mix-blend-multiply">
                            <Image
                                src={urlFor(layer.image).width(300).url()}
                                alt="Tape"
                                fill
                                className="object-contain"
                            />
                        </div>
                    )}

                    {layer.type === 'text' && layer.text && (
                        <div className="font-script text-2xl md:text-4xl text-pink-600 transform -rotate-6">
                            {layer.text}
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
}
