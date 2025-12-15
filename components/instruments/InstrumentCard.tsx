"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface InstrumentCardProps {
    label: string;
    icon: LucideIcon;
    isActive?: boolean;
}

export function InstrumentCard({ label, icon: Icon, isActive }: InstrumentCardProps) {
    return (
        <motion.div
            className={cn(
                "glass-panel p-6 flex flex-col items-center gap-4 rounded-xl cursor-pointer transition-all relative group",
                isActive && "shadow-[0_0_20px_rgba(6,182,212,0.3)] border-cyan-500/50"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
                borderColor: isActive ? "rgba(6,182,212,0.5)" : "var(--border)",
            }}
        >
            <div className={cn("p-3 rounded-full bg-slate-900/50", isActive && "text-cyan-400 bg-cyan-950/30")}>
                <Icon size={32} className={cn("text-slate-400 transition-colors", isActive && "text-cyan-400")} />
            </div>
            <span className={cn("font-medium text-slate-200", isActive && "text-cyan-100")}>{label}</span>
            
            {/* Tooltip */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                <div className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-300 whitespace-nowrap shadow-lg">
                    <div>Protocol: ASTM/HL7</div>
                    <div>Status: Auto-Validated</div>
                </div>
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 border-l border-t border-slate-700 rotate-45"></div>
            </div>
        </motion.div>
    );
}
