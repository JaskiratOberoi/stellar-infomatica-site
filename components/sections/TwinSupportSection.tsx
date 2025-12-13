"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BioStream } from "@/components/twin-support/BioStream";
import { TwinDashboard } from "@/components/twin-support/TwinDashboard";

export function TwinSupportSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // --- Transformations ---

    // Phase 1: Stream Animation (0 -> 0.4)
    // We map 0-0.4 of total scroll to a 0-1 progress for the stream component
    const streamProgress = useTransform(scrollYProgress, [0, 0.45], [0, 1]);

    // Opacity for the stream: it separates, then fades out as Dashboard enters
    const streamOpacity = useTransform(scrollYProgress, [0.4, 0.55], [1, 0]);
    const streamScale = useTransform(scrollYProgress, [0.4, 0.55], [1, 0.8]);

    // Phase 3: Dashboard Entry (0.5 -> 0.7)
    const dashboardY = useTransform(scrollYProgress, [0.5, 0.75], [100, 0]);
    const dashboardOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);

    // Text Transition
    // 0 - 0.4: "The Challenge..."
    // 0.4 - 0.6: Transition state
    // 0.6+: "The Solution..."
    const title1Opacity = useTransform(scrollYProgress, [0.35, 0.45], [1, 0]);
    const title2Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

    return (
        <section ref={containerRef} className="h-[300vh] relative bg-slate-950">

            {/* Sticky Stage */}
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

                <div className="container mx-auto px-4 relative h-full flex flex-col items-center justify-center">

                    {/* Titles Layer */}
                    <div className="absolute top-[10%] md:top-[12%] w-full text-center z-20 px-4 pointer-events-none">
                        <motion.h2
                            style={{ opacity: title1Opacity }}
                            className="text-2xl sm:text-3xl md:text-5xl font-bold text-white absolute w-full left-0 top-0 leading-tight"
                        >
                            The Challenge: Genetic Overlap
                        </motion.h2>
                        <motion.h2
                            style={{ opacity: title2Opacity }}
                            className="text-2xl sm:text-3xl md:text-5xl font-bold text-cyan-400 absolute w-full left-0 top-0 leading-tight"
                        >
                            The Solution: Isolated Algorithms
                        </motion.h2>
                    </div>

                    {/* Content Layer */}
                    <div className="relative w-full max-w-5xl h-[600px] flex items-center justify-center">

                        {/* Visual: BioStream (Behind) */}
                        <motion.div
                            className="absolute inset-x-0 top-0 bottom-0 z-0 h-[400px] my-auto"
                            style={{ opacity: streamOpacity, scale: streamScale }}
                        >
                            {/* We pass the transformed progress directly to the component if it accepted MotionValue, 
                        but it accepts number. So we render it as a child of a motion.div 
                        or we need to change BioStream to accept MotionValue.
                        Alternatively, we can just let Framer handle the parent transforms 
                        and pass a raw state... wait, useTransform returns a MotionValue.
                        
                        Correction: Changing BioStream to accept MotionValue is cleaner, 
                        BUT for simplicity here, we can just use the MotionValue if we modify the logic slightly,
                        OR simpler: We update BioStream to simply animate based on the prop, 
                        but since this is scroll driven, we need the raw number.
                        
                        Framer Motion's "useTransform" returns a MotionValue, which doesn't trigger re-renders 
                        for simple prop passing unless we use the .get() method in a loop (bad).
                        
                        SOLUTION: We will render the raw SVGs inside THIS component 
                        OR we simply just use the 'streamProgress' MotionValue to drive 
                        CSS variables or styles if passed down. 
                        
                        Actually, let's keep it simple: refactor BioStream slightly to accept style object or 
                        since it's SVG paths, we can use the `pathLength` or `d` path interpolation.

                        Wait, the prompt says "Pass the scroll progress to it".
                        Let's just pass the MotionValue and handle it in BioStream?
                        No, React components don't accept MotionValues as standard props easily unless designed for it.
                        
                        Let's use a workaround: We will just pass the style `translateY` directly to the `motion.div` 
                        WRAPPING the lines if possible, or refactor BioStream to be fully controlled here.
                        
                        DECISION: Refactor BioStream usage to be defined INLINE here for maximum control 
                        OR assuming BioStream uses `useMotionValue` internally? 
                        
                        ACTUALLY: The easiest way to get "progress" (number) from useScroll 
                        into a child component without re-rendering the parent constantly is to 
                        pass the MotionValue and use `useTransform` INSIDE the child.
                        
                        I will assume I can modify BioStream or just paste the SVG code here for the "Assembly" task 
                        to ensure perfect "morphing" syncing.
                    */}

                            {/* For this step, I will inline the SVG logic from step 1 but hooked up to the MotionValues created here
                        to ensure smooth 60fps scroll without React re-renders. 
                    */}
                            <BioStreamWrapper progress={streamProgress} />
                        </motion.div>

                        {/* Interact: Dashboard (Front) */}
                        <motion.div
                            className="relative z-10 w-full max-w-4xl"
                            style={{ y: dashboardY, opacity: dashboardOpacity }}
                        >
                            <TwinDashboard />
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
}

// Inner wrapper to handle MotionValue -> CSS Transform logic cleanly
function BioStreamWrapper({ progress }: { progress: any }) {
    // separation = progress * 50
    // We create new MotionValues for the Y offset
    const upY = useTransform(progress, [0, 1], [0, -50]);
    const downY = useTransform(progress, [0, 1], [0, 50]);

    const pathData = "M0,100 C250,20 250,180 500,100 C750,20 750,180 1000,100";

    return (
        <div className="w-full h-full flex items-center justify-center">
            <svg
                viewBox="0 0 1000 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
            >
                <motion.path
                    d={pathData}
                    stroke="#06b6d4"
                    strokeWidth="4"
                    strokeLinecap="round"
                    style={{ y: upY, filter: "drop-shadow(0 0 8px rgba(6,182,212,0.6))" }}
                />
                <motion.path
                    d={pathData}
                    stroke="#d946ef"
                    strokeWidth="4"
                    strokeLinecap="round"
                    style={{ y: downY, filter: "drop-shadow(0 0 8px rgba(217,70,239,0.6))" }}
                />
            </svg>
        </div>
    )
}
