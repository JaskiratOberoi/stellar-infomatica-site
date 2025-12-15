"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

export function MoMExplainer() {
    const [momValue, setMomValue] = useState(1.0);
    
    // Calculate position (0 = bottom, 1 = top, 0.5 = middle)
    // We'll map: 0.1 MoM = top, 3.0 MoM = bottom (inverted for visual)
    // Actually, let's make it more intuitive: higher MoM = higher on screen
    const minMoM = 0.1;
    const maxMoM = 3.0;
    const range = maxMoM - minMoM;
    
    // Position: 0.1 MoM = bottom (0%), 3.0 MoM = top (100%)
    // But we want: 1.0 MoM = middle (50%)
    // So: position = ((momValue - minMoM) / range) * 100
    // But inverted: 100 - ((momValue - minMoM) / range) * 100
    const position = 100 - ((momValue - minMoM) / range) * 100;
    
    // Determine status text
    const getStatusText = () => {
        if (momValue === 1.0) {
            return "1.0 MoM (Average Risk)";
        } else if (momValue > 1.0) {
            return `${momValue.toFixed(1)} MoM (Deviated High)`;
        } else {
            return `${momValue.toFixed(1)} MoM (Deviated Low)`;
        }
    };
    
    // Determine risk level color
    const getRiskColor = () => {
        if (momValue === 1.0) {
            return "text-cyan-400";
        } else if (momValue > 1.0) {
            return "text-fuchsia-400";
        } else {
            return "text-yellow-400";
        }
    };
    
    return (
        <Card className="glass-panel p-8 border-slate-800">
            <div className="space-y-6">
                <p className="text-slate-300 leading-relaxed">
                    Normalization allows us to compare diverse biological profiles against a standard curve, regardless of gestational age.
                </p>
                
                {/* Visual Container */}
                <div className="relative bg-slate-900/50 rounded-lg p-8 border border-slate-800 min-h-[400px] flex flex-col">
                    {/* Y-axis labels */}
                    <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-between text-xs text-slate-500 py-8">
                        <span>3.0</span>
                        <span>2.0</span>
                        <span className="text-cyan-400 font-semibold">1.0</span>
                        <span>0.5</span>
                        <span>0.1</span>
                    </div>
                    
                    {/* Visualization Area */}
                    <div className="flex-1 relative ml-12 mr-4 my-8">
                        {/* Grid lines */}
                        <div className="absolute inset-0 flex flex-col justify-between">
                            {[0, 0.25, 0.5, 0.75, 1.0].map((ratio) => (
                                <div
                                    key={ratio}
                                    className={`h-px w-full ${
                                        ratio === 0.5
                                            ? "border-t-2 border-dashed border-cyan-500/50"
                                            : "border-t border-slate-700/30"
                                    }`}
                                />
                            ))}
                        </div>
                        
                        {/* Median Line (1.0 MoM) */}
                        <div
                            className="absolute left-0 right-0 border-t-2 border-dashed border-cyan-500/70"
                            style={{ top: "50%" }}
                        >
                            <div className="absolute -left-16 -top-3 text-xs text-cyan-400 font-medium">
                                Population Median (1.0 MoM)
                            </div>
                        </div>
                        
                        {/* Patient Result Dot */}
                        <div
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                            style={{ top: `${position}%` }}
                        >
                            <div className="relative">
                                {/* Dot */}
                                <div
                                    className={`w-6 h-6 rounded-full border-2 ${
                                        momValue === 1.0
                                            ? "bg-cyan-500 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                                            : momValue > 1.0
                                            ? "bg-fuchsia-500 border-fuchsia-400 shadow-[0_0_20px_rgba(217,70,239,0.6)]"
                                            : "bg-yellow-500 border-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.6)]"
                                    }`}
                                />
                                
                                {/* Value label above dot */}
                                <div
                                    className={`absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-semibold ${getRiskColor()}`}
                                >
                                    {momValue.toFixed(1)} MoM
                                </div>
                                
                                {/* Connecting line to median */}
                                {momValue !== 1.0 && (
                                    <div
                                        className={`absolute left-1/2 -translate-x-1/2 w-0.5 ${
                                            momValue > 1.0 ? "bg-fuchsia-500/30" : "bg-yellow-500/30"
                                        }`}
                                        style={{
                                            top: momValue > 1.0 ? "50%" : `${position}%`,
                                            bottom: momValue > 1.0 ? `${100 - position}%` : "50%",
                                            height: `${Math.abs(position - 50)}%`,
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    
                    {/* Status Text */}
                    <div className="text-center mt-4">
                        <p className={`text-lg font-semibold ${getRiskColor()}`}>
                            {getStatusText()}
                        </p>
                    </div>
                    
                    {/* Slider Control */}
                    <div className="mt-6 px-4">
                        <label htmlFor="mom-slider" className="block text-sm text-slate-400 mb-3 text-center">
                            Adjust Patient Result
                        </label>
                        <input
                            id="mom-slider"
                            type="range"
                            min={minMoM}
                            max={maxMoM}
                            step={0.1}
                            value={momValue}
                            onChange={(e) => setMomValue(parseFloat(e.target.value))}
                            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-500 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-cyan-400 [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(6,182,212,0.5)] [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-cyan-500 [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-cyan-400 [&::-moz-range-thumb]:shadow-[0_0_10px_rgba(6,182,212,0.5)] [&::-moz-range-thumb]:cursor-pointer"
                            style={{
                                background: `linear-gradient(to right, 
                                    rgba(234, 179, 8, 0.3) 0%, 
                                    rgba(234, 179, 8, 0.3) ${((1.0 - minMoM) / range) * 100}%,
                                    rgba(6, 182, 212, 0.3) ${((1.0 - minMoM) / range) * 100}%,
                                    rgba(6, 182, 212, 0.3) ${((1.0 - minMoM) / range) * 100}%,
                                    rgba(217, 70, 239, 0.3) ${((1.0 - minMoM) / range) * 100}%,
                                    rgba(217, 70, 239, 0.3) 100%)`
                            }}
                        />
                        <div className="flex justify-between text-xs text-slate-500 mt-2">
                            <span>0.1 MoM</span>
                            <span className="text-cyan-400">1.0 MoM</span>
                            <span>3.0 MoM</span>
                        </div>
                    </div>
                </div>
                
                {/* Information Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-slate-900/30 p-4 rounded-lg border border-slate-800">
                        <h4 className="text-cyan-400 font-semibold mb-2">Median Calculation</h4>
                        <p className="text-slate-400 text-sm">
                            Population-specific medians adjusted for gestational age and maternal factors.
                        </p>
                    </div>
                    <div className="bg-slate-900/30 p-4 rounded-lg border border-slate-800">
                        <h4 className="text-cyan-400 font-semibold mb-2">Deviation Analysis</h4>
                        <p className="text-slate-400 text-sm">
                            Statistical deviation from expected values using log-normal distribution models.
                        </p>
                    </div>
                    <div className="bg-slate-900/30 p-4 rounded-lg border border-slate-800">
                        <h4 className="text-cyan-400 font-semibold mb-2">Risk Integration</h4>
                        <p className="text-slate-400 text-sm">
                            Combined risk calculation incorporating multiple markers and prior probabilities.
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    );
}

