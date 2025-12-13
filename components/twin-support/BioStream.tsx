"use client";

import { motion } from "framer-motion";

interface BioStreamProps {
    progress: number; // 0 to 1
}

export function BioStream({ progress }: BioStreamProps) {
    // Calculate vertical separation based on progress
    // At progress 0: overlap (offset 0)
    // At progress 1: separate (offset 50)
    // Path A moves UP (-offset), Path B moves DOWN (+offset)
    const separation = progress * 50;

    // A smooth sine wave centered vertically in a 200px high viewbox (at y=100)
    // M0,100 start
    // C250,20 control points for first peak (goes up) -> wait, if baseline is 100, going up is < 100
    // C250,180 control points for first trough (goes down) -> > 100
    // Let's us a simple repeating wave curve
    const pathData = "M0,100 C250,20 250,180 500,100 C750,20 750,180 1000,100";

    return (
        <div className="w-full h-full flex items-center justify-center">
            <svg
                viewBox="0 0 1000 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
            >
                {/* Path A: Cyan (The Twin A) */}
                <motion.path
                    d={pathData}
                    stroke="#06b6d4" // cyan-500
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={false}
                    animate={{ translateY: -separation }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    style={{
                        filter: "drop-shadow(0 0 8px rgba(6,182,212,0.6))",
                    }}
                />

                {/* Path B: Magenta (The Twin B) */}
                <motion.path
                    d={pathData}
                    stroke="#d946ef" // fuchsia-500
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={false}
                    animate={{ translateY: separation }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    style={{
                        filter: "drop-shadow(0 0 8px rgba(217,70,239,0.6))",
                    }}
                />
            </svg>
        </div>
    );
}
