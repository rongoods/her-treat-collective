import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TapeButton } from "@/components/ui/TapeButton";
import { TornPaper } from "@/components/ui/TornPaper";
import { Polaroid } from "@/components/ui/Polaroid";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-96 pb-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h1 className="font-display text-6xl md:text-8xl mb-6 leading-tight">
                She shares <br />
                <span className="relative inline-block">
                  what she saves.
                  <svg className="absolute w-full h-4 -bottom-2 left-0 text-pink-500" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h1>
              <p className="font-sans text-xl md:text-2xl mb-8 max-w-md transform -rotate-1">
                A collective for connection, empowerment, and joy. Join us for our next treat.
              </p>
              <div className="flex flex-wrap gap-4">
                <TapeButton text="Join an Event" href="/events" variant="washi" />
                <TapeButton text="Support Us" href="/donate" variant="clear" />
              </div>
            </div>

            <div className="relative h-[500px] w-full hidden md:block">
              {/* Decorative Collage Elements */}
              <div className="absolute top-10 right-10 rotate-3 z-10">
                <Polaroid
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
                  alt="Her Treat Event"
                  caption="Summer 2024"
                  rotation={3}
                  className="w-48"
                />
              </div>
              <div className="absolute top-40 left-10 -rotate-6 z-0">
                <Polaroid
                  src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80"
                  alt="Joy"
                  rotation={-6}
                  className="w-40"
                />
              </div>
              {/* Tape decorations */}
              <div className="absolute top-0 right-32 w-32 h-8 bg-pink-300/50 rotate-45 mix-blend-multiply transform translate-y-4"></div>
            </div>
          </div>
        </section>

        {/* Highlight Section */}
        <section className="py-20 bg-pink-50 relative">
          {/* Torn edge top */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 10%)' }}></div>

          <div className="max-w-5xl mx-auto px-4">
            <TornPaper className="bg-white transform rotate-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-bold mb-4 transform -rotate-2">Next Up</span>
                  <h2 className="font-display text-4xl mb-4">Summer Solstice Picnic</h2>
                  <p className="font-sans text-lg mb-6">
                    Join us for an afternoon of sun, snacks, and sisterhood. Bring your favorite dish to share!
                  </p>
                  <TapeButton text="RSVP Now" href="/events/summer-solstice" variant="masking" />
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <Polaroid
                    src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80"
                    alt="Picnic"
                    rotation={2}
                    className="w-40"
                  />
                </div>
              </div>
            </TornPaper>
          </div>
        </section>

        {/* Quick Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-5xl text-center mb-16">Upcoming Treats</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group">
                  <Polaroid
                    src={`https://images.unsplash.com/photo-${i === 1 ? '1626803775151-61d756612f97' : i === 2 ? '1558301211-0d8c8ddee6ec' : '1535141192574-5d4897c12636'}?auto=format&fit=crop&w=800&q=80`}
                    alt={`Event ${i}`}
                    caption={`Event Title ${i}`}
                    rotation={i % 2 === 0 ? 2 : -2}
                    className="w-full max-w-[200px] mx-auto"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <TapeButton text="View All Events" href="/events" variant="clear" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
