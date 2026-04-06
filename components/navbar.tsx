"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/systems", label: "Systems" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/[0.35] backdrop-blur-xl supports-[backdrop-filter]:bg-black/[0.25]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 shadow-glowBlue transition group-hover:border-blue-400/[0.30]">
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-blue-400 to-amber-300" />
          </span>
          <span className="font-semibold tracking-tight text-white">
            <span className="text-blue-400">Khalil Systems</span>{' '}
            <span className="text-amber-400">Engineering</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-sm md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-2 transition ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/75 hover:bg-white/5 hover:text-amber-200"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link href="/Christopher_Khalil_CV.docx" className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10 lg:inline-flex">
            Download CV
          </Link>
          <Link href="/contact" className="rounded-full border border-amber-300/20 bg-amber-400 px-4 py-2 text-sm font-medium text-black transition hover:bg-amber-300 shadow-glowAmber">
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}
