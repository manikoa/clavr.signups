import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import BackgroundBubbles from "@/components/BackgroundBubbles";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="fixed inset-0 w-full h-[100dvh] bg-white flex flex-col overscroll-none">
            {/* Bubbles at root level */}
            <BackgroundBubbles className="fixed inset-0 z-0 overflow-hidden" />

            {/* Navigation - fixed height, won't shrink */}
            <div className="shrink-0 relative z-10">
                <Navigation />
            </div>

            {/* Main content - takes remaining space */}
            <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 gap-1 md:gap-4 pointer-events-none">
                <div className="scale-[0.75] sm:scale-[0.85] md:scale-[0.9] lg:scale-[0.85] flex flex-col items-center">
                    <Hero />
                </div>

                <div className="pointer-events-auto z-20 scale-[0.5] sm:scale-[0.65] md:scale-[0.75] lg:scale-[0.7] pb-8 -mt-12 md:-mt-24">
                    <Countdown />
                </div>
            </main>

            {/* Footer - fixed height, won't shrink, always visible at bottom */}
            <div className="shrink-0 pointer-events-auto z-20 w-full py-2 md:py-4">
                <Footer />
            </div>
        </div>
    );
}

