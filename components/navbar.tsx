import Link from "next/link";

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="text-sm text-amber-400/80 hover:text-blue transition"
  >
    {label}
  </Link>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight text-white">
          <span className="text-blue-500/75">Khalil Systems Engineering</span>
        </Link>

        <nav className="flex items-center gap-5">
          <NavLink href="/services" label="Services" />
          <NavLink href="/work" label="Work" />
          <NavLink href="/about" label="About" />
          <NavLink href="/contact" label="Contact" />

          <Link
            href="/contact"
            className="rounded-lg border border-amber-400/45 bg-amber-400/45 px-3 py-1.5 text-sm text-amber-400 hover:bg-amber-400/75 transition"
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
