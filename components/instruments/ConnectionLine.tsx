"use client";

import { motion } from "framer-motion";

interface ConnectionLineProps {
    className?: string; // Allow custom widths or positioning override
}

export function ConnectionLine({ className = "" }: ConnectionLineProps) {
    return (
        <div className={`relative h-[2px] w-full bg-slate-800 overflow-hidden ${className}`}>
            <motion.div
                className="absolute top-0 left-0 h-full w-[40%] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-80"
                initial={{ x: "-100%" }}
                animate={{ x: "400%" }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear",
                }}
            />
        </div>
    );
}
