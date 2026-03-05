import "./globals.css";
import Navbar from "@/components/navbar";
import Link from "next/link";

export const metadata = {
  title: "Khalil Systems Engineering Ltd",
  description: "High-reliability software and broadcast graphics systems."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-[#06080f] to-black" />
          <div className="absolute -top-40 -left-44 h-[640px] w-[640px] rounded-full bg-blue-600/25 blur-[140px]" />
          <div className="absolute top-1/3 -right-44 h-[560px] w-[560px] rounded-full bg-amber-500/25 blur-[130px]" />
          <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_50%_20%,rgba(255,255,255,0.06),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.92))]" />
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(96,165,250,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(251,191,36,0.18)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <Navbar />

        <div className="mx-auto max-w-5xl px-6">
          {children}

          <footer className="mt-20 border-t border-white/10 py-10 text-sm text-white/60">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>© {new Date().getFullYear()} Khalil Systems Engineering Ltd</div>
              <div className="flex flex-wrap gap-4">
                <a className="hover:text-amber-300 transition" href="mailto:chris@khalilsystems.co.uk">
                  chris@khalilsystems.co.uk
                </a>
                <Link href="/contact" className="hover:text-amber-300 transition">
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