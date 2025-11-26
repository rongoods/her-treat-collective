'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { TapeButton } from '../ui/TapeButton';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { href: '/events', label: 'Events' },
        { href: '/about', label: 'About Us' },
        { href: '/donate', label: 'Donate' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 pointer-events-none">
            <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto relative">
                {/* Logo */}
                <Link href="/" className="relative z-50 block w-24 h-24 transition-transform hover:scale-105">
                    <Image
                        src="/assets/logo.png"
                        alt="Her Treat Collective"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4">
                    {/* Donate Button (Visible on Desktop) */}
                    <div className="hidden md:block">
                        <TapeButton text="Donate" href="/donate" variant="washi" />
                    </div>

                    {/* Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="relative z-50 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-pink-50 transition-colors border border-gray-100"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                    <div className="absolute top-24 right-0 w-64 bg-white shadow-xl p-6 rotate-1 border-2 border-gray-100 z-40">
                        {/* Tape effect on top */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-pink-200/50 rotate-[-2deg] mix-blend-multiply pointer-events-none" />

                        <nav className="flex flex-col gap-4">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="font-display text-2xl hover:text-pink-500 transition-colors border-b border-dashed border-gray-200 pb-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="md:hidden pt-2">
                                <TapeButton text="Donate" href="/donate" variant="washi" className="w-full justify-center" />
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
