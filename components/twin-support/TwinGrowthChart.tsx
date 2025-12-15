"use client";

import { motion } from "framer-motion";

export function TwinGrowthChart({ showReference }: { showReference?: boolean }) {
    // Simple Mock Chart for visualization
    // In a real app, this would be Recharts. Here we use CSS/Divs for the "Mock" requirement from previous context 
    // or simply build a static SVG chart to satisfy the "reuse" request if it existed (it doesn't exist yet in this session history, so I will create a placeholder representation that looks good).

    return (
        <div className="w-full h-64 bg-slate-900/50 rounded-lg p-4 relative overflow-hidden flex items-end justify-between gap-2">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-20 pointer-events-none">
                <div className="w-full h-px bg-slate-400"></div>
                <div className="w-full h-px bg-slate-400"></div>
                <div className="w-full h-px bg-slate-400"></div>
            </div>

            {/* Twin A Bars (Cyan) */}
            {[40, 60, 55, 78, 85, 92, 88].map((val, i) => (
                <motion.div
                    key={`a-${i}`}
                    initial={{ height: 0 }}
                    animate={{ height: `${val}%` }}
                    transition={{ delay: i * 0.1 }}
                    className="w-full w-2 md:w-4 bg-cyan-500 rounded-t-sm opacity-80"
                />
            ))}

            {/* Twin B Bars (Magenta) */}
            {[35, 50, 48, 65, 70, 80, 75].map((val, i) => (
                <motion.div
                    key={`b-${i}`}
                    initial={{ height: 0 }}
                    animate={{ height: `${val}%` }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="w-full w-2 md:w-4 bg-fuchsia-500 rounded-t-sm opacity-80"
                />
            ))}

            {/* Reference Line */}
            {showReference && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute top-[40%] left-0 w-full h-[2px] border-t-2 border-dashed border-white/30"
                >
                    <span className="absolute -top-6 right-2 text-xs text-slate-400">Chorionicity-Specific Median</span>
                </motion.div>
            )}
        </div>
    );
}
