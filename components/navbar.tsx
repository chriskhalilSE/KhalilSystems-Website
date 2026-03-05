import Link from "next/link";

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="text-sm text-white/80 hover:text-white transition"
  >
    {label}
  </Link>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight text-white">
          <span className="text-amber-400">Khalil Systems</span> Engineering
        </Link>

        <nav className="flex items-center gap-5">
          <NavLink href="/services" label="Services" />
          <NavLink href="/work" label="Work" />
          <NavLink href="/about" label="About" />
          <NavLink href="/contact" label="Contact" />

          <Link
            href="/contact"
            className="rounded-lg border border-amber-400/15 bg-white/5 px-3 py-1.5 text-sm text-amber-400 hover:bg-white/10 transition"
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
