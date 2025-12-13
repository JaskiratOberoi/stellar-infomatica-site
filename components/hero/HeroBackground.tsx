"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const nodes = [
        {
            color: "bg-cyan-500",
            top: "10%",
            left: "10%",
            size: "w-64 h-64",
            duration: 20,
            delay: 0,
        },
        {
            color: "bg-fuchsia-500",
            top: "20%",
            left: "80%",
            size: "w-72 h-72",
            duration: 25,
            delay: 2,
        },
        {
            color: "bg-cyan-500",
            top: "70%",
            left: "20%",
            size: "w-96 h-96",
            duration: 22,
            delay: 1,
        },
        {
            color: "bg-fuchsia-500",
            top: "60%",
            left: "70%",
            size: "w-80 h-80",
            duration: 28,
            delay: 3,
        },
        {
            color: "bg-cyan-500",
            top: "40%",
            left: "50%",
            size: "w-48 h-48",
            duration: 18,
            delay: 4,
        },
    ];

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden bg-slate-950">
            {/* Animated Grid Overlay */}
            <motion.div
                className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
                animate={{
                    backgroundPosition: ["0px 0px", "40px 40px"],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Base gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90 z-10" />

            {/* Floating Nodes */}
            {nodes.map((node, i) => (
                <motion.div
                    key={i}
                    className={`absolute rounded-full mix-blend-screen filter blur-3xl opacity-20 ${node.color} ${node.size}`}
                    style={{ top: node.top, left: node.left }}
                    animate={{
                        x: [0, 50, -50, 0],
                        y: [0, -30, 30, 0],
                        scale: [1, 1.2, 0.9, 1],
                    }}
                    transition={{
                        duration: node.duration,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                        delay: node.delay,
                    }}
                />
            ))}
        </div>
    );
}
