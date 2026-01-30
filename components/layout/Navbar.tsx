"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/clinical", label: "Clinical Logic" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 transition-all glass-panel">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-bold text-xl text-foreground hover:opacity-90 transition-opacity">
                    Stellar Infomatica
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navigationLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button asChild>
                        <a href="mailto:support@stellarinfomatica.com">Request Demo</a>
                    </Button>
                </nav>

                {/* Mobile Menu */}
                <div className="md:hidden flex items-center gap-4">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-foreground">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-slate-950 border-slate-800">
                            <nav className="flex flex-col gap-4 mt-8">
                                {navigationLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-slate-300 hover:text-white transition-colors text-lg font-medium py-2 border-b border-slate-800"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <Button asChild className="mt-4">
                                    <a href="mailto:support@stellarinfomatica.com" onClick={() => setIsOpen(false)}>
                                        Request Demo
                                    </a>
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
