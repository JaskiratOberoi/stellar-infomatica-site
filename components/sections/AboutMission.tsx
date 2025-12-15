"use client";

export function AboutMission() {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Built for the Modern Era of Prenatal Screening
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                        <p className="text-slate-400">
                            For over three decades, industry leaders have provided legacy stability to prenatal screening labs. Their systems have served the market well, establishing foundational workflows that countless diagnostic centers rely on today.
                        </p>

                        <p className="text-white">
                            But the landscape has shifted. The rise of <span className="text-cyan-400 font-semibold">IVF treatments</span>, the increasing complexity of <span className="text-cyan-400 font-semibold">twin pregnancies</span>, and the demand for <span className="text-cyan-400 font-semibold">real-time data visualization</span> have exposed the limitations of systems built for a different era.
                        </p>

                        <p className="text-slate-300">
                            Stellar Infomatica was architected from the ground up to meet these challenges. <span className="text-fuchsia-400 font-semibold">Next-generation algorithms</span>, <span className="text-fuchsia-400 font-semibold">unencumbered by legacy code</span>, power our <span className="text-fuchsia-400 font-semibold">native twin architecture</span>—treating each fetus as a distinct patient from the moment of data ingestion, not as an exception to be adjusted retroactively.
                        </p>

                        <p className="text-slate-400 italic border-l-4 border-cyan-500/30 pl-6 py-2">
                            We respect the past. We're building the future.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

