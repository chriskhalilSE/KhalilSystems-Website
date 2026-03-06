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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_85%_28%,rgba(251,191,36,0.16),transparent_30%),linear-gradient(to_bottom,#060814,#05070f_45%,#030508)]" />
          <div className="absolute left-[-12rem] top-[-8rem] h-[34rem] w-[34rem] rounded-full bg-blue-500/20 blur-[150px]" />
          <div className="absolute bottom-[-10rem] right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-amber-400/16 blur-[140px]" />
          <div className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(to_right,rgba(96,165,250,0.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(251,191,36,0.18)_1px,transparent_1px)] bg-[size:72px_72px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(3,5,8,0.2)_45%,rgba(3,5,8,0.82)_100%)]" />
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
