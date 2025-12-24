import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { IntroAnimation, Home } from "@/components/effects";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "@/components/layout";

const jackInput = localFont({
  src: "../assets/fonts/jackinput/JAi_____.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ruben Caleb | Devfolio",
  icons: "/rv_logo.svg",
  description: "Ruben Caleb's Devfolio created with Nextjs",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jackInput.className}`}>
        <IntroAnimation />
        <Home />
        <SpeedInsights />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
