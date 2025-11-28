
import { Polaroid } from "@/components/ui/Polaroid";
import { TapeButton } from "@/components/ui/TapeButton";
import { client } from "@/sanity/lib/client";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

// Revalidate every hour
export const revalidate = 3600;

export default async function EventsPage() {
    const events = await client.fetch(EVENTS_QUERY);

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h1 className="font-display text-6xl mb-6">All Treats</h1>
                <p className="font-sans text-xl max-w-2xl mx-auto">
                    Browse our upcoming and past events. Join us for connection and joy.
                </p>
            </div>

            {/* Filters (Placeholder) */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
                <button className="px-4 py-2 rounded-full bg-black text-white font-bold transform -rotate-1">All</button>
                <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-pink-100 font-bold transform rotate-1 transition-colors">Upcoming</button>
                <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-pink-100 font-bold transform -rotate-1 transition-colors">Past</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {events.length > 0 ? (
                    events.map((event: any, index: number) => (
                        <Link key={event._id} href={`/events/${event.slug.current}`} className="group block">
                            <div className="relative transform transition-transform group-hover:scale-105 group-hover:rotate-1">
                                <Polaroid
                                    src={event.imageUrl || "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"}
                                    alt={event.title}
                                    caption={event.title}
                                    rotation={index % 2 === 0 ? 1 : -1}
                                    className="w-full max-w-[403px] mx-auto"
                                />
                                <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 font-bold transform rotate-3 shadow-md">
                                    {new Date(event.date).toLocaleDateString()}
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="col-span-full text-center py-20">
                        <p className="text-xl text-gray-500 font-sans">No events found. Check back soon!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
