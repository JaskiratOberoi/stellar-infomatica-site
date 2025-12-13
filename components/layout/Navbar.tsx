import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 transition-all glass-panel">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-bold text-xl text-foreground hover:opacity-90 transition-opacity">
                    Stellar Infomatica
                </Link>

                {/* CTA */}
                <Button asChild>
                    <a href="mailto:info@stellarinfomatica.com">Request Demo</a>
                </Button>
            </div>
        </header>
    );
}
