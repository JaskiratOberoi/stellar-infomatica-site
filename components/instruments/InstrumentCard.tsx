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
                "glass-panel p-6 flex flex-col items-center gap-4 rounded-xl cursor-pointer transition-all",
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
        </motion.div>
    );
}
