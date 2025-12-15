import { ReactNode } from "react";

interface LegalLayoutProps {
    title: string;
    date: string;
    children: ReactNode;
}

export function LegalLayout({ title, date, children }: LegalLayoutProps) {
    return (
        <div className="min-h-screen bg-slate-950">
            {/* Header Section */}
            <div className="bg-slate-900/50 py-16 text-center border-b border-slate-800">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        {title}
                    </h1>
                    <p className="text-slate-400">
                        Last Updated: {date}
                    </p>
                </div>
            </div>

            {/* Content Body */}
            <main className="max-w-3xl mx-auto px-6 py-12">
                <div className="text-slate-300 leading-relaxed space-y-6">
                    {children}
                </div>
            </main>
        </div>
    );
}

