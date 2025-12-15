
"use client";

import { Microscope, Activity, Server, Database, Cpu } from "lucide-react";
import { InstrumentCard } from "@/components/instruments/InstrumentCard";
import { ConnectionLine } from "@/components/instruments/ConnectionLine";

export function IntegrationEcosystem() {
    const instruments = [
        { label: "B.R.A.H.M.S Kryptor", icon: Microscope },
        { label: "Getein Biotech", icon: Activity },
        { label: "Roche Cobas", icon: Server },
        { label: "Abbott Architect", icon: Database },
    ];

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">LIS Integration & Workflow Optimization</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Bidirectional HL7 Interface connects to most lab instruments—but we optimize their throughput. Batch processing and custom report logic powered by Stellar Core transform raw data into clinical insights.
                    </p>
                </div>

                {/* Desktop Layout: Grid */}
                <div className="hidden md:grid grid-cols-[1fr_200px_1fr] gap-0 items-center max-w-5xl mx-auto">

                    {/* Column 1: Instruments */}
                    <div className="flex flex-col gap-6">
                        {instruments.map((inst, i) => (
                            <InstrumentCard
                                key={i}
                                label={inst.label}
                                icon={inst.icon}
                                isActive={i === 1} // Example active state
                            />
                        ))}
                    </div>

                    {/* Column 2: The Bridge (Connections) */}
                    <div className="flex flex-col justify-around h-full py-12 px-2">
                        {/* 
                We render a connector for each instrument. 
                Using flex + h-full to distribute them to match the instrument column.
             */}
                        {instruments.map((_, i) => (
                            <div key={i} className="flex items-center w-full">
                                <div className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></div>
                                <ConnectionLine className="flex-1" />
                                <div className="h-2 w-2 rounded-full bg-fuchsia-500 shadow-[0_0_10px_#d946ef]"></div>
                            </div>
                        ))}
                    </div>

                    {/* Column 3: The Core */}
                    <div className="h-full flex items-center">
                        <div className="glass-panel w-full h-[80%] flex flex-col justify-center items-center p-8 border-fuchsia-500/50 shadow-[0_0_40px_rgba(217,70,239,0.15)] rounded-2xl relative">
                            <div className="absolute inset-0 bg-fuchsia-500/5 rounded-2xl animate-pulse"></div>
                            <div className="bg-fuchsia-950/50 p-6 rounded-full border border-fuchsia-500/30 mb-6">
                                <Cpu size={48} className="text-fuchsia-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Stellar Core</h3>
                            <p className="text-sm text-fuchsia-200/60 text-center mb-3">
                                Centralized Processing Engine <br /> v2.4.0 (Stable)
                            </p>
                            <div className="text-xs text-slate-400 space-y-1 text-left w-full px-2">
                                <p>• Batch Processing</p>
                                <p>• Custom Report Logic</p>
                                <p>• Auto-Validation Pipeline</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Mobile Layout: Stack */}
                <div className="md:hidden flex flex-col gap-8">
                    {/* Instruments */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {instruments.map((inst, i) => (
                            <InstrumentCard key={i} label={inst.label} icon={inst.icon} isActive={i === 1} />
                        ))}
                    </div>

                    {/* Downward Flow Indicator */}
                    <div className="flex justify-center py-4">
                        <div className="w-[2px] h-16 bg-gradient-to-b from-cyan-500 to-fuchsia-500"></div>
                    </div>

                    {/* Core Box */}
                    <div className="glass-panel p-8 text-center border-fuchsia-500/50 rounded-xl">
                        <Cpu size={40} className="mx-auto text-fuchsia-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Stellar Core</h3>
                        <p className="text-xs text-slate-400 mb-3">v2.4.0 (Stable)</p>
                        <div className="text-xs text-slate-400 space-y-1">
                            <p>• Batch Processing</p>
                            <p>• Custom Report Logic</p>
                            <p>• Auto-Validation Pipeline</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
