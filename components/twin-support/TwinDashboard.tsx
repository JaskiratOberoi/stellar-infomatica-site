"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { TwinGrowthChart } from "./TwinGrowthChart";
import { cn } from "@/lib/utils";

function RiskDonut({ percentage, color, label, probability }: { percentage: number; color: string; label: string; probability: string }) {
    const radius = 56;
    const center = 80;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex flex-col items-center gap-2 md:gap-3">
            <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                {/* Background Circle */}
                <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                    <circle cx={center} cy={center} r={radius} stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-800" />
                    <motion.circle
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        cx={center} cy={center} r={radius}
                        stroke="currentColor" strokeWidth="8" fill="transparent"
                        strokeLinecap="round"
                        className={color}
                        style={{ strokeDasharray: circumference }}
                    />
                </svg>
                <div className="absolute flex flex-col items-center">
                    <span className="text-xl md:text-2xl font-bold text-white">{probability}</span>
                    <span className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest mt-1">Risk</span>
                </div>
            </div>
            <span className="text-sm md:text-base font-medium text-slate-300">{label}</span>
        </div>
    );
}

export function TwinDashboard() {
    const [showReference, setShowReference] = useState(false);

    return (
        <div className="glass-panel rounded-xl p-1 overflow-hidden min-h-[auto] md:min-h-[400px] flex flex-col">
            <Tabs defaultValue="biomarkers" className="w-full flex-1 flex flex-col">

                {/* Header Control Bar */}
                <div className="flex flex-wrap items-center justify-between p-3 md:p-4 border-b border-slate-800 bg-slate-900/40 gap-4">
                    <TabsList className="bg-slate-950 border border-slate-800 scale-90 md:scale-100 origin-left">
                        <TabsTrigger value="biomarkers">Biomarker Levels</TabsTrigger>
                        <TabsTrigger value="risk">Risk Probability</TabsTrigger>
                    </TabsList>

                    {/* Contextual Controls */}
                    <div className="flex items-center gap-2 text-xs md:text-sm text-slate-400">
                        <Switch
                            checked={showReference}
                            onCheckedChange={setShowReference}
                            id="ref-mode"
                            className="scale-90 md:scale-100"
                        />
                        <label htmlFor="ref-mode" className="cursor-pointer">Show Ref. Line</label>
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-4 md:p-6 flex-1 relative">
                    <TabsContent value="biomarkers" className="mt-0 h-full">
                        <motion.div
                            key="biomarkers-content"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="h-full flex flex-col justify-center min-h-[300px] md:min-h-0"
                        >
                            <h3 className="text-base md:text-lg font-semibold text-white mb-4">Maternal Serum Markers (MoM)</h3>
                            <TwinGrowthChart showReference={showReference} />
                            <div className="flex gap-4 mt-4 justify-center text-xs md:text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-cyan-500"></span>
                                    <span className="text-slate-300">Twin A (CRL 65mm)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-fuchsia-500"></span>
                                    <span className="text-slate-300">Twin B (CRL 62mm)</span>
                                </div>
                            </div>
                        </motion.div>
                    </TabsContent>

                    <TabsContent value="risk" className="mt-0 h-full">
                        <motion.div
                            key="risk-content"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="h-full flex flex-col items-center justify-center min-h-[250px] md:min-h-0"
                        >
                            <h3 className="text-base md:text-lg font-semibold text-white mb-4 md:mb-8">Trisomy 21 Analysis</h3>
                            <div className="flex flex-wrap justify-center gap-4 md:gap-12 w-full">
                                <RiskDonut
                                    label="Fetus A"
                                    percentage={98}
                                    color="text-cyan-500"
                                    probability="1:5000"
                                />
                                <RiskDonut
                                    label="Fetus B"
                                    percentage={92}
                                    color="text-fuchsia-500"
                                    probability="1:4200"
                                />
                            </div>
                        </motion.div>
                    </TabsContent>
                </div>

            </Tabs>
        </div>
    );
}
