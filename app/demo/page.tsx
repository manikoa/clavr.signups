"use client";

import Navigation from "@/components/Navigation";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function DemoPage() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "15min" });
            cal("ui", {
                theme: "light",
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        })();
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation - fixed at top with high z-index */}
            <Navigation />

            {/* Cal.com embed - below navigation */}
            <main className="pt-20 md:pt-24">
                {/* Header with description */}
                <div className="text-center px-4 md:px-8 mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-black mb-2">
                        Book a Demo
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
                        Schedule a personalized demo to see how Clavr can transform your productivity
                    </p>
                </div>

                {/* Calendar */}
                <div className="w-full h-[calc(100vh-200px)] md:h-[calc(100vh-220px)] px-4 md:px-8">
                    <Cal
                        namespace="15min"
                        calLink="clavr-inc-qy7nlq/15min"
                        style={{ width: "100%", height: "100%" }}
                        config={{
                            layout: "month_view",
                            theme: "light"
                        }}
                    />
                </div>
            </main>
        </div>
    );
}
