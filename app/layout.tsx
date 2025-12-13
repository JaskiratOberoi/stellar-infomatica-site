import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://stellarinfomatica.com'),
  title: {
    default: "Stellar Infomatica | Precision Prenatal Screening Software",
    template: "%s | Stellar Infomatica"
  },
  description: "Transform raw pathology data into lifesaving insights. The world’s first seamless Dual Marker Twin Support ecosystem for modern diagnostic centers.",
  keywords: ["prenatal screening", "dual marker", "triple marker", "quad marker", "pathology software", "LIS integration", "twin pregnancy screening"],
  openGraph: {
    title: "Stellar Infomatica | Precision Prenatal Screening Software",
    description: "Transform raw pathology data into lifesaving insights. The world’s first seamless Dual Marker Twin Support ecosystem.",
    url: 'https://stellarinfomatica.com',
    siteName: 'Stellar Infomatica',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col bg-background text-foreground`}>
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
      </body>
    </html>
  );
}
