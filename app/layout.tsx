import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Khalil Systems Engineering",
  description: "High-reliability software and systems delivery.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(255,255,255,0.10),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_80%_30%,rgba(255,255,255,0.08),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.92))]" />
          <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <Navbar />

        <div className="mx-auto max-w-5xl px-6">
          {children}

          <footer className="mt-20 border-t border-white/10 py-10 text-sm text-white/60">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>© {new Date().getFullYear()} Khalil Systems Engineering</div>
              <div className="flex gap-4">
                <a className="hover:text-white transition" href="mailto:chris@khalilsystems.co.uk">
                  chris@khalilsystems.co.uk
                </a>
                <Link href="/contact" className="hover:text-white transition">
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
