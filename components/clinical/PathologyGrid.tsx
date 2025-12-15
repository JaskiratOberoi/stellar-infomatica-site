"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Pathology {
    id: string;
    name: string;
    markers: string[];
    description: string;
    gridSpan?: string; // For Bento Grid layout
}

const pathologies: Pathology[] = [
    {
        id: "t21",
        name: "Trisomy 21 (Down Syndrome)",
        markers: ["Free β-hCG", "PAPP-A"],
        description: "Chromosomal anomaly caused by an extra copy of chromosome 21.",
        gridSpan: "md:col-span-2", // Larger card
    },
    {
        id: "osb",
        name: "Neural Tube Defects (OSB)",
        markers: ["AFP"],
        description: "Open Spina Bifida and Anencephaly detection.",
        gridSpan: "md:col-span-1",
    },
    {
        id: "t18-13",
        name: "Trisomy 18/13",
        markers: ["Low uE3", "Low hCG"],
        description: "Edwards syndrome (T18) and Patau syndrome (T13) screening through integrated marker analysis.",
        gridSpan: "md:col-span-2", // Larger card
    },
    {
        id: "preeclampsia",
        name: "Pre-eclampsia",
        markers: ["PlGF", "PAPP-A"],
        description: "Early-onset hypertensive disorder risk assessment.",
        gridSpan: "md:col-span-1",
    },
];

export function PathologyGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            {pathologies.map((pathology) => (
                <Card
                    key={pathology.id}
                    className={cn(
                        "glass-panel p-6 border-slate-800",
                        "hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]",
                        "transition-all duration-300 cursor-pointer",
                        "flex flex-col",
                        pathology.gridSpan
                    )}
                >
                    <h3 className="text-xl font-semibold text-white mb-3">
                        {pathology.name}
                    </h3>
                    
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                        {pathology.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {pathology.markers.map((marker) => (
                            <Badge
                                key={marker}
                                variant="outline"
                                className="border-cyan-500/30 text-cyan-400 bg-cyan-950/20 hover:bg-cyan-950/30 text-xs font-medium"
                            >
                                {marker}
                            </Badge>
                        ))}
                    </div>
                </Card>
            ))}
        </div>
    );
}

