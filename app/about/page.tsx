
import { TornPaper } from "@/components/ui/TornPaper";
import { Polaroid } from "@/components/ui/Polaroid";

export default function AboutPage() {
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-4">
            <div>
                <div className="relative">
                    <Polaroid
                        src="https://images.unsplash.com/photo-1616031037011-087000171abe?auto=format&fit=crop&w=800&q=80"
                        alt="Founding Photo"
                        caption="Where it all started, 1999"
                        rotation={-3}
                        className="w-full max-w-[403px] mx-auto"
                    />
                    {/* Decorative tape */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/80 rotate-2 mix-blend-multiply"></div>
                </div>
            </div>

            <div>
                <h1 className="font-shadows text-6xl mb-8 text-pink">Our Story</h1>
                <TornPaper className="bg-white transform rotate-1">
                    <div className="prose prose-lg font-sans">
                        <p>
                            Her Treat Collective was born from a simple idea: <strong>She shares what she saves.</strong>
                        </p>
                        <p>
                            We believe in the power of small treats—moments of joy, connection, and rest that we can gift to ourselves and each other. What started as a small gathering of friends has grown into a community dedicated to celebrating the everyday magic of womanhood.
                        </p>
                        <p>
                            Our mission is to create spaces where you can show up as you are, leave your worries at the door, and fill your cup. Whether it's a picnic in the park, a creative workshop, or a dance party, every event is a treat designed just for you.
                        </p>
                    </div>
                </TornPaper>
            </div>
        </div>
    );
}
