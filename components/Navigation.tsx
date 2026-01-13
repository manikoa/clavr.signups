"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-xl">
            <div className="flex flex-col w-full">
                {/* Top Spacer Buffer */}
                <div className="h-3 md:h-6 w-full" />

                <div className="flex items-center px-4 md:px-0">
                    {/* Left Spacer Buffer - ONLY ON DESKTOP */}
                    <div className="hidden md:block md:w-64 shrink-0" />

                    <div className="flex-1 flex justify-center md:justify-start pointer-events-auto">
                        <Link href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
                            <Image
                                src="/logos/Clavr Logo - Black - Full Lockup.png"
                                alt="Clavr Logo"
                                width={140}
                                height={49}
                                className="h-6 md:h-12 w-auto mb-3 md:mb-6"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Demo Button - Hidden for now
                    <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2">
                        <Link
                            href="/demo"
                            className="demo-btn px-5 py-2 md:px-6 md:py-2.5 bg-black text-sm font-medium rounded-full border border-black hover:bg-white transition-all duration-300"
                        >
                            Book a Demo
                        </Link>
                    </div>
                    */}
                </div>
            </div>
        </nav>
    );
}
