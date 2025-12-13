import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { TextReveal } from "@/components/hero/TextReveal";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Layer 1: Background */}
            <HeroBackground />

            {/* Layer 2: Content */}
            <div className="container relative z-10 px-4 flex flex-col items-center text-center gap-6">

                {/* Badge */}
                <Badge variant="outline" className="mb-2 border-slate-700 bg-slate-900/50 text-cyan-400 backdrop-blur-sm px-4 py-1.5 text-sm uppercase tracking-wide">
                    New v2.0 Release: Twin Support
                </Badge>

                {/* Headline */}
                <TextReveal
                    text="Precision in Every Pulse"
                    className="text-5xl md:text-7xl font-bold tracking-tight text-white justify-center pb-2"
                />

                {/* Subhead */}
                <p className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed">
                    Transform raw pathology data into lifesaving insights. Introducing the world’s first seamless Dual Marker Twin Support ecosystem.
                </p>

                {/* CTA Group */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
                    <Button
                        size="lg"
                        className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold h-12 px-8 text-base shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300"
                        asChild
                    >
                        <a href="mailto:info@stellarinfomatica.com">
                            Request Demo
                        </a>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white h-12 px-8 text-base backdrop-blur-sm"
                        asChild
                    >
                        <Link href="#contact">
                            Get in Touch
                        </Link>
                    </Button>
                </div>
            </div>
        </section >
    );
}
