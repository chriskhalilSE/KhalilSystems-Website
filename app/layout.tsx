import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Khalil Systems Engineering Ltd",
  description: "High-reliability software, automation, and broadcast graphics systems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
		<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
		  {/* Base background */}
		  <div className="absolute inset-0 bg-gradient-to-b from-[#05070f] via-[#070b14] to-[#030406]" />

		  {/* Blue glow */}
		  <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[140px]" />

		  {/* Amber glow */}
		  <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-amber-500/20 blur-[120px]" />

		  {/* Static grid */}
		  <div className="absolute inset-0 opacity-[0.10] bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:64px_64px]" />

		  {/* Slow drifting vertical data lines */}
		  <div className="absolute inset-0 bg-drift-x opacity-[0.1] bg-[linear-gradient(to_right,transparent_0%,rgba(96,165,250,0.28)_48%,transparent_52%)] bg-[size:220px_220px]" />

		  {/* Slow drifting horizontal signal lines */}
		  <div className="absolute inset-0 bg-drift-y opacity-[0.08] bg-[linear-gradient(to_bottom,transparent_0%,rgba(245,158,11,0.30)_48%,transparent_52%)] bg-[size:260px_260px]" />

		  {/* Soft pulse wash */}
		  <div className="absolute inset-0 bg-pulse-soft bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_45%),radial-gradient(circle_at_70%_35%,rgba(245,158,11,0.07),transparent_35%)]" />

		  {/* vignette */}
		  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.45)_100%)]" />
		</div>

        <Navbar />

        <div className="mx-auto min-h-screen max-w-6xl px-6">
          {children}

          <footer className="mt-20 border-t border-white/10 py-10 text-sm text-white/60">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-medium text-white/85">Khalil Systems Engineering Ltd</div>
                <div className="mt-1">Software engineering, automation, and systems delivery.</div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a className="transition hover:text-amber-300" href="mailto:chris@khalilsystems.co.uk">
                  chris@khalilsystems.co.uk
                </a>
                <Link href="/services" className="transition hover:text-amber-300">
                  Services
                </Link>
                <Link href="/work" className="transition hover:text-amber-300">
                  Work
                </Link>
                <Link href="/contact" className="transition hover:text-amber-300">
                  Contact
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
