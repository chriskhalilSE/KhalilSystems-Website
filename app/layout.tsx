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
          <div className="absolute inset-0 bg-gradient-to-b from-[#060910] via-[#09111c] to-[#040507]" />
          <div className="absolute -left-24 top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-blue-500/[0.18] blur-[140px]" />
          <div className="absolute right-[-8rem] top-[26%] h-[28rem] w-[28rem] rounded-full bg-amber-400/[0.16] blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute inset-0 bg-drift-x opacity-[0.04] bg-[linear-gradient(to_right,transparent_0%,rgba(96,165,250,0.32)_48%,transparent_52%)] bg-[size:260px_260px]" />
          <div className="absolute inset-0 bg-drift-y opacity-[0.03] bg-[linear-gradient(to_bottom,transparent_0%,rgba(251,191,36,0.28)_48%,transparent_52%)] bg-[size:300px_300px]" />
          <div className="absolute inset-0 bg-pulse-soft bg-[radial-gradient(circle_at_30%_25%,rgba(59,130,246,0.08),transparent_34%),radial-gradient(circle_at_72%_38%,rgba(251,191,36,0.07),transparent_28%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.48)_100%)]" />
        </div>

        <Navbar />

        <div className="mx-auto min-h-screen max-w-6xl px-6">
          {children}

          <footer className="mt-20 border-t border-white/10 py-10 text-sm text-white/[0.60]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-medium text-white/[0.85]">Khalil Systems Engineering Ltd</div>
                <div className="mt-1">Software engineering, automation, and systems delivery.</div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a className="transition hover:text-amber-300" href="mailto:chris@khalilsystems.co.uk">
                  chris@khalilsystems.co.uk
                </a>
                <Link href="/services" className="transition hover:text-amber-300">Services</Link>
                <Link href="/work" className="transition hover:text-amber-300">Work</Link>
                <Link href="/contact" className="transition hover:text-amber-300">Contact</Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
