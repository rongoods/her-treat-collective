import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TapeButton } from "@/components/ui/TapeButton";
import { TornPaper } from "@/components/ui/TornPaper";

export default function DonatePage() {
    return (
        <div className="min-h-screen flex flex-col bg-pink-50/30">
            <Navbar />
            <main className="flex-grow pt-96 px-4">
                <div className="max-w-3xl mx-auto">
                    <TornPaper className="bg-white text-center py-16">
                        <h1 className="font-shadows text-6xl mb-6 text-pink">Support the Collective</h1>
                        <p className="font-sans text-xl mb-12 max-w-lg mx-auto">
                            Your contribution helps us create more treats, support more women, and build a stronger community.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
                            {[10, 25, 50].map((amount) => (
                                <button
                                    key={amount}
                                    className="group relative p-6 border-2 border-dashed border-gray-300 hover:border-pink transition-colors rounded-lg"
                                >
                                    <span className="font-shadows text-4xl block mb-2 group-hover:text-pink-light">€{amount}</span>
                                    <span className="font-sans text-sm text-gray-500">One-time treat</span>
                                </button>
                            ))}
                        </div>

                        <div className="max-w-xs mx-auto">
                            <TapeButton text="Donate with Stripe" href="#" variant="washi" className="w-full justify-center" />
                            <p className="mt-4 text-xs text-gray-400 font-sans">Secure payment via Stripe. You will be redirected.</p>
                        </div>
                    </TornPaper>
                </div>
            </main>
            <Footer />
        </div>
    );
}
