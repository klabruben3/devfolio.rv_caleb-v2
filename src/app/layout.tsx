import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { IntroAnimation } from "@/components/effects";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer, Header } from "@/components/layout";
import Terminal from "@/components/effects/terminal";
import { SessionProvider } from "next-auth/react";

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
        <SpeedInsights />
        <Terminal />
        <SessionProvider>
          <Header />
        </SessionProvider>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
