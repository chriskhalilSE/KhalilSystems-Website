import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight text-white">
          <span className="text-blue-300">Khalil</span> <span className="text-white">Systems</span>{" "}
          <span className="text-amber-200">Engineering</span>
        </Link>

        <nav className="flex items-center gap-5 text-sm">
          <Link href="/services" className="text-white/80 hover:text-amber-300 transition">
            Services
          </Link>
          <Link href="/work" className="text-white/80 hover:text-amber-300 transition">
            Work
          </Link>
          <Link href="/about" className="text-white/80 hover:text-amber-300 transition">
            About
          </Link>
          <Link href="/contact" className="text-white/80 hover:text-amber-300 transition">
            Contact
          </Link>

          <Link
            href="/contact"
            className="rounded-lg bg-amber-500 px-3 py-1.5 font-medium text-black hover:bg-amber-400 transition shadow-glowAmber"
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}