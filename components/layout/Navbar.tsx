// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { useState } from 'react';
// // import { Menu, X } from 'lucide-react';
// import { TapeButton } from '../ui/TapeButton';

// export function Navbar() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const links = [
//         { href: '/events', label: 'Events' },
//         { href: '/about', label: 'About Us' },
//         { href: '/donate', label: 'Donate' },
//         { href: '/contact', label: 'Contact' },
//     ];

//     return (
//         <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 pointer-events-none">
//             {/* Logo - Static Top Left */}
//             <div className="absolute top-4 left-4 z-50 pointer-events-auto">
//                 <Link href="/" className="block w-24 h-24">
//                     <Image
//                         src="/assets/logo.png"
//                         alt="Her Treat Collective"
//                         fill
//                         className="object-contain"
//                         priority
//                     />
//                 </Link>
//             </div>

//             <div className="max-w-7xl mx-auto flex items-center justify-end pointer-events-auto relative">

//                 {/* Right Side Actions */}
//                 <div className="flex items-center gap-4">
//                     {/* Donate Button (Visible on Desktop) */}
//                     <div className="hidden md:block">
//                         <TapeButton text="Donate" href="/donate" variant="washi" />
//                     </div>

//                     {/* Menu Toggle */}
//                     <button
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                         className="relative z-50 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-pink-pale/20 transition-colors border border-gray-100"
//                         aria-label="Toggle menu"
//                     >
//                         {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                     </button>
//                 </div>

//                 {/* Dropdown Menu */}
//                 {isMenuOpen && (
//                     <div className="absolute top-24 right-0 w-64 bg-white shadow-xl p-6 rotate-1 border-2 border-gray-100 z-40">
//                         {/* Tape effect on top */}
//                         <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-pink-pale/50 rotate-[-2deg] mix-blend-multiply pointer-events-none" />

//                         <nav className="flex flex-col gap-4">
//                             {links.map((link) => (
//                                 <Link
//                                     key={link.href}
//                                     href={link.href}
//                                     className="font-shadows text-2xl hover:text-pink-light transition-colors border-b border-dashed border-gray-200 pb-2"
//                                     onClick={() => setIsMenuOpen(false)}
//                                 >
//                                     {link.label}
//                                 </Link>
//                             ))}
//                             <div className="md:hidden pt-2">
//                                 <TapeButton text="Donate" href="/donate" variant="washi" className="w-full justify-center" />
//                             </div>
//                         </nav>
//                     </div>
//                 )}
//             </div>
//         </header>
//     );
// }
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
// import { Menu, X } from 'lucide-react';
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
            {/* Logo - fixed top-left */}
            <div className="fixed top-0 left-0 z-50 pointer-events-auto">
                <Link href="/" className="block w-[86px] h-[86px]" onClick={() => setIsMenuOpen(false)}>
                    <Image
                        src="/assets/logo-v2.png" // keep your logo in public/assets/logo.png or adjust path
                        alt="Her Treat Collective"
                        width={150}
                        height={150}
                        className="object-contain"
                        priority
                    />
                </Link>
            </div>

            {/* Hamburger + optional donate button - fixed top-right */}
            <div className="fixed top-4 right-4 z-50 pointer-events-auto flex items-center gap-4">
                {/* Donate button (desktop only) */}
                <div className="hidden md:block">
                    <TapeButton text="Donate" href="/donate" variant="washi" />
                </div>

                {/* Menu toggle */}
                {/* <button
                    onClick={() => setIsMenuOpen((s) => !s)}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle menu"
                    className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-pink-pale/20 transition-colors border border-gray-100"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button> */}
                <button
                    onClick={() => setIsMenuOpen((s) => !s)}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle menu"
                    style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 99999 }}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-pink-pale/20 transition-colors border border-gray-100"
                // Toggle menu icon based on state
                >
                    {isMenuOpen ? (
                        <div className="relative w-8 h-8">
                            <Image src="/assets/cake-v2.png" alt="Close menu" fill className="object-contain" />
                        </div>
                    ) : (
                        <div className="relative w-8 h-8">
                            <Image src="/assets/hamburger-v2.png" alt="Open menu" fill className="object-contain" />
                        </div>
                    )}
                </button>
            </div>

            {/* Dropdown menu (fixed position under the hamburger) */}
            {isMenuOpen && (
                // <div
                //     role="dialog"
                //     aria-label="Main menu"
                //     className="fixed top-20 right-4 w-64 bg-white shadow-xl p-6 rotate-1 border-2 border-gray-100 z-40 pointer-events-auto"
                // >

                <div
                    style={{ position: 'fixed', top: '5rem', right: '1rem', zIndex: 99998 }}
                    className="w-64 bg-white shadow-xl p-6 rotate-1 border-2 border-gray-100 pointer-events-auto"
                >

                    {/* decorative tape */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-pink-pale/50 rotate-[-2deg] mix-blend-multiply pointer-events-none" />

                    <nav className="flex flex-col gap-4">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="font-shadows text-2xl hover:text-pink-light transition-colors border-b border-dashed border-gray-200 pb-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Donate visible inside menu on mobile */}
                        <div className="md:hidden pt-2">
                            <TapeButton
                                text="Donate"
                                href="/donate"
                                variant="washi"
                                className="w-full justify-center"
                                onClick={() => setIsMenuOpen(false)}
                            />
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Navbar;

