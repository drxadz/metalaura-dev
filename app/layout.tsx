import "./globals.css";
import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000"]
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
      <body className={`${dmSans.variable} font-dm-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}