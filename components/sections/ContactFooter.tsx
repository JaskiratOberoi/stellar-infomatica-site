"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactFooter() {
    return (
        <footer id="contact" className="bg-slate-950 border-t border-slate-900 pt-24 pb-8 relative z-10">
            <div className="container mx-auto px-4">

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16 items-start">

                    {/* Column 1: The Hook */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-4xl font-bold text-white leading-tight">
                            Ready to Upgrade Your Lab?
                        </h2>
                        <p className="text-slate-400 text-lg max-w-md">
                            Join the network of high-precision diagnostic centers. Integration takes less than 48 hours.
                        </p>

                        <Link
                            href="mailto:info@stellarinfomatica.com"
                            className="inline-flex items-center gap-2 text-xl font-medium text-cyan-400 hover:text-cyan-300 transition-colors mt-4 group"
                        >
                            info@stellarinfomatica.com
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Column 2: Static Form */}
                    <div className="glass-panel p-8 rounded-2xl border-slate-800/50">
                        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                                    <Input
                                        id="name"
                                        placeholder="Dr. Sarah Connor"
                                        className="bg-slate-900/50 border-slate-700 focus:border-cyan-500/50 text-slate-200 placeholder:text-slate-500"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="company" className="text-sm font-medium text-slate-300">Company</label>
                                    <Input
                                        id="company"
                                        placeholder="Cyberdyne Systems"
                                        className="bg-slate-900/50 border-slate-700 focus:border-cyan-500/50 text-slate-200 placeholder:text-slate-500"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="details" className="text-sm font-medium text-slate-300">Requirement Details</label>
                                <Textarea
                                    id="details"
                                    placeholder="Tell us about your current LIS setup..."
                                    className="bg-slate-900/50 border-slate-700 focus:border-cyan-500/50 text-slate-200 placeholder:text-slate-500 min-h-[120px]"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold mt-2"
                            >
                                Inquire about subscription
                            </Button>
                        </form>
                    </div>

                </div>

            </div>
        </footer>
    );
}
