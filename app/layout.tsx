import "./globals.css";
import Navbar from "@/components/navbar";
import Link from "next/link";

export const metadata = {
  title: "Khalil Systems Engineering",
  description: "High-reliability software and systems delivery.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
	
      <body className="min-h-screen bg-black text-white">
		
		<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
		  {/* Blue system glow */}
		  <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-blue-600/25 blur-[140px]" />
		  {/* Amber intelligence glow */}
		  <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-amber-500/25 blur-[120px]" />
		  {/* subtle deep gradient */}
		  <div className="absolute inset-0 bg-gradient-to-b from-[#05070f] via-[#06080f] to-black" />
		  {/* grid overlay */}
		  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />
		</div>

        <Navbar />

        <div className="mx-auto max-w-5xl px-6">
          {children}

          <footer className="mt-20 border-t border-blue-600/25 py-10 text-sm text-amber-400">
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
