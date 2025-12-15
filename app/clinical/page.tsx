"use client";

import { Card } from "@/components/ui/card";
import { PathologyGrid } from "@/components/clinical/PathologyGrid";
import { MoMExplainer } from "@/components/clinical/MoMExplainer";

export default function ClinicalPage() {
    return (
        <div className="min-h-screen bg-slate-950">
            {/* Hero Section */}
            <section className="relative py-24 px-4 overflow-hidden">
                {/* Grid Pattern Background */}
                <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px'
                    }}
                />
                
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            The Science of Probability.
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Deep dive into the algorithms, markers, and pathologies that drive the Stellar Engine.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 max-w-6xl pb-24">
                
                {/* Section A: Target Pathologies */}
                <section className="mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Target Pathologies
                    </h2>
                    <PathologyGrid />
                </section>

                {/* Section B: The Mathematics of Deviation (MoM) */}
                <section className="mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        The Mathematics of Deviation (MoM)
                    </h2>
                    <MoMExplainer />
                </section>

                {/* Section C: Input Vectors */}
                <section>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Input Vectors
                    </h2>
                    <Card className="glass-panel p-8 border-slate-800">
                        <p className="text-slate-300 mb-6 leading-relaxed">
                            Risk factors and covariates that influence marker levels and final risk calculations.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3 p-4 bg-slate-900/30 rounded-lg border border-slate-800 relative">
                                <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="text-white font-semibold">IVF Treatment</h4>
                                        <span className="inline-flex items-center rounded-full border border-amber-500/50 bg-amber-950/20 text-amber-400 px-2 py-0.5 text-xs font-semibold">
                                            Coming Soon
                                        </span>
                                    </div>
                                    <p className="text-slate-400 text-sm">
                                        Correction factors applied for in-vitro fertilization pregnancies.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3 p-4 bg-slate-900/30 rounded-lg border border-slate-800">
                                <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Smoking Status</h4>
                                    <p className="text-slate-400 text-sm">
                                        Maternal smoking affects PAPP-A and free β-hCG levels.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3 p-4 bg-slate-900/30 rounded-lg border border-slate-800">
                                <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Maternal Weight</h4>
                                    <p className="text-slate-400 text-sm">
                                        Weight-based adjustments for marker concentration calculations.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3 p-4 bg-slate-900/30 rounded-lg border border-slate-800">
                                <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Ethnicity</h4>
                                    <p className="text-slate-400 text-sm">
                                        Population-specific median adjustments for different ethnic groups.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3 p-4 bg-slate-900/30 rounded-lg border border-slate-800">
                                <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Gestational Age</h4>
                                    <p className="text-slate-400 text-sm">
                                        Critical factor for marker level normalization and risk calculation.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3 p-4 bg-slate-900/30 rounded-lg border border-slate-800">
                                <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Diabetes</h4>
                                    <p className="text-slate-400 text-sm">
                                        Type 1 and Type 2 diabetes require marker level corrections.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </section>
            </div>
        </div>
    );
}

