import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import InteractiveGridBackground from "@/components/Background";
import BeamGridBackground from "@/components/Galaxy";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Thịnh | Frontend Developer",
  description: "React / Next.js / React Native Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body
        className={`
    ${geistSans.variable}
    ${geistMono.variable}
    antialiased
    bg-[#0b0f14]
    text-white
    relative
    min-h-screen
  `}
      >
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <BeamGridBackground
            gridSize={40}
            gridColor="#000"
            darkGridColor="#1f2937"
            beamColor="rgba(255,255,255,0.6)"
            darkBeamColor="rgba(255,255,255,0.3)"
            beamCount={6}
            extraBeamCount={2}
            beamThickness={2}
            beamGlow
            interactive={false}
            glowIntensity={35}
            idleSpeed={1}
          />

          <InteractiveGridBackground
            gridSize={40}
            gridColor="#000"
            darkGridColor="#1f2937"
            effectColor="rgba(255,255,255,0.4)"
            darkEffectColor="rgba(255,255,255,0.25)"
            trailLength={4}
            glow
            glowRadius={24}
            showFade
            fadeIntensity={18}
          />
        </div>

        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
