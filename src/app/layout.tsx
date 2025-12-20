import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Wrapper } from "@/components/layout";
import { FollowMouse, IntroAnimation } from "@/components/effects";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
        <FollowMouse />
        <Wrapper>
          <main className="flex flex-col gap-2 px-5">
            {children} Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Possimus, repudiandae sunt, harum in reiciendis quibusdam culpa
            quasi adipisci doloremque illo blanditiis sed reprehenderit deserunt
            dolore explicabo nam vitae? Omnis, odit! Possimus, repudiandae sunt,
            harum in reiciendis quibusdam culpa quasi adipisci doloremque illo
            blanditiis sed reprehenderit deserunt dolore explicabo nam vitae?
            Omnis, odit! Possimus, repudiandae sunt, harum in reiciendis
            quibusdam culpa quasi adipisci doloremque illo blanditiis sed
            reprehenderit deserunt dolore explicabo nam vitae? Omnis, odit!
            Possimus, repudiandae sunt, harum in reiciendis quibusdam culpa
            quasi adipisci doloremque illo blanditiis sed reprehenderit deserunt
            dolore explicabo nam vitae? Omnis, odit! Possimus, repudiandae sunt,
            harum in reiciendis quibusdam culpa quasi adipisci doloremque illo
            blanditiis sed reprehenderit deserunt dolore explicabo nam vitae?
            Omnis, odit! Possimus, repudiandae sunt, harum in reiciendis
            quibusdam culpa quasi adipisci doloremque illo blanditiis sed
            reprehenderit deserunt dolore explicabo nam vitae? Omnis, odit!
          </main>
        </Wrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}
