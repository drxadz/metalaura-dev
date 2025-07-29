import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron"
});

export const metadata: Metadata = {
  title: "METALAURA - Premium Aluminum Fabrication",
  description: "Crafting excellence in aluminum fabrication with precision engineering, custom design, and professional installation services.",
  keywords: "aluminum fabrication, custom metalwork, engineering, installation, precision manufacturing",
  authors: [{ name: "MetaLaura Team" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${orbitron.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}