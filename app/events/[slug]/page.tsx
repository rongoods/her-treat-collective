import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CollageHeader } from "@/components/modules/CollageHeader";
import { TapeButton } from "@/components/ui/TapeButton";
import { TornPaper } from "@/components/ui/TornPaper";
import { client } from "@/sanity/lib/client";
import { EVENT_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import { Polaroid } from "@/components/ui/Polaroid";
import { urlFor } from "@/sanity/lib/image";

// Revalidate every hour
export const revalidate = 3600;

export default async function EventPage({ params }: { params: { slug: string } }) {
    const event = await client.fetch(EVENT_BY_SLUG_QUERY, { slug: params.slug });

    if (!event) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col bg-white pt-48">
            <Navbar />

            {/* Collage Header */}
            <CollageHeader layers={event.collageLayers} className="mb-8" />

            <main className="max-w-5xl mx-auto px-4 -mt-20 relative z-10">
                <TornPaper className="bg-white mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-2">
                            <h1 className="font-shadows text-5xl md:text-7xl mb-4 text-pink">{event.title}</h1>
                            <div className="flex flex-wrap gap-4 mb-8 font-sans text-lg">
                                <span className="bg-pink-pale/20 px-3 py-1 rounded-sm transform -rotate-1">
                                    📅 {new Date(event.date).toLocaleDateString()}
                                </span>
                                <span className="bg-yellow-100 px-3 py-1 rounded-sm transform rotate-1">
                                    📍 {event.location}
                                </span>
                                <span className="bg-blue-100 px-3 py-1 rounded-sm transform -rotate-1">
                                    🎟️ {event.price}
                                </span>
                            </div>

                            <div className="prose prose-lg font-sans mb-8">
                                {event.longDesc && <PortableText value={event.longDesc} />}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                {event.dressCode && (
                                    <div className="bg-gray-50 p-4 border border-gray-200 transform rotate-1">
                                        <h3 className="font-bold mb-2">👗 Dress Code</h3>
                                        <p>{event.dressCode}</p>
                                    </div>
                                )}
                                {event.whatToBring && (
                                    <div className="bg-gray-50 p-4 border border-gray-200 transform -rotate-1">
                                        <h3 className="font-bold mb-2">🎒 What to Bring</h3>
                                        <p>{event.whatToBring}</p>
                                    </div>
                                )}
                            </div>

                            <div className="flex gap-4">
                                <TapeButton text="Get Tickets" href="#" variant="washi" />
                                <TapeButton text="Add to Calendar" href="#" variant="clear" />
                            </div>
                        </div>

                        {/* Sidebar / Gallery Preview */}
                        <div className="md:col-span-1 space-y-8">
                            <div className="bg-pink-pale/10 p-6 transform rotate-2">
                                <h3 className="font-shadows text-2xl mb-4 text-pink">Share</h3>
                                <div className="flex gap-2">
                                    <button className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center hover:scale-110 transition-transform">FB</button>
                                    <button className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center hover:scale-110 transition-transform">IG</button>
                                    <button className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center hover:scale-110 transition-transform">TW</button>
                                </div>
                            </div>

                            {event.galleryImages && event.galleryImages.length > 0 && (
                                <div className="space-y-4">
                                    {event.galleryImages.slice(0, 2).map((img: any, i: number) => (
                                        <Polaroid
                                            key={i}
                                            src={urlFor(img).width(400).url()}
                                            alt="Gallery"
                                            rotation={i % 2 === 0 ? -3 : 3}
                                            className="w-full"
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </TornPaper>
            </main>
            <Footer />
        </div>
    );
}
