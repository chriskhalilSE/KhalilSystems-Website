import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight text-white">
          Khalil Systems Engineering
        </Link>

        <nav className="flex items-center gap-5 text-sm text-white/80">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>

          <a
            href="#contact"
            className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-white hover:bg-white/10 transition"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}