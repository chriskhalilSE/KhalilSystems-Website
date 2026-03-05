export default function AboutPage() {
  return (
    <main className="py-16">
      <div className="space-y-4">
        <p className="text-sm text-white/70">A practical engineering shop.</p>
        <h1 className="text-4xl font-semibold tracking-tight">
          About <span className="text-blue-300">Khalil Systems</span>{" "}
          <span className="text-amber-200">Engineering</span>
        </h1>
        <p className="max-w-2xl text-white/75 leading-relaxed">
          I build high reliability software and automation for live production and data driven systems.
          The focus is not hype. It is predictable behaviour, clear ownership, and smooth operations.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-blue-400/25 bg-white/5 p-6 hover:border-blue-400/45 transition">
          <div className="font-medium">How I work</div>
          <ul className="mt-3 space-y-2 text-sm text-white/70 leading-relaxed">
            <li>Design for clarity and maintainability, not cleverness.</li>
            <li>Ship in small increments and validate early.</li>
            <li>Prefer boring solutions that fail gracefully.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-amber-300/25 bg-white/5 p-6 hover:border-amber-300/45 transition">
          <div className="font-medium">Where this helps</div>
          <ul className="mt-3 space-y-2 text-sm text-white/70 leading-relaxed">
            <li>Live and operational environments with real consequences.</li>
            <li>Legacy systems that need safe incremental upgrades.</li>
            <li>Tooling and automation that removes manual pressure.</li>
          </ul>
        </div>
      </div>

      <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="text-sm text-white/70">Next steps</div>
        <div className="mt-2 text-white">If you have a problem that needs calm, reliable delivery, reach out.</div>
        <a
          href="/contact"
          className="mt-4 inline-flex rounded-lg bg-amber-500 px-4 py-2 font-medium text-black hover:bg-amber-400 transition shadow-glowAmber"
        >
          Contact
        </a>
      </div>
    </main>
  );
}
      <h1 className="text-4xl font-semibold tracking-tight">About</h1>
      <p className="mt-4 max-w-3xl text-white/75 leading-relaxed">
        Khalil Systems Engineering is a small, senior-led consultancy focused on building reliable software
        systems that work in real operational environments.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="font-medium">How I work</div>
          <ul className="mt-3 list-disc pl-5 text-white/75 space-y-2">
            <li>Make assumptions explicit and validate early</li>
            <li>Prioritise reliability and operational visibility</li>
            <li>Deliver small, testable increments that reduce risk</li>
            <li>Leave behind clear docs and handover notes</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="font-medium">What this site is</div>
          <p className="mt-3 text-white/70 leading-relaxed">
            A simple, no-drama presence. It exists to make it easy to understand what I do and how to contact me.
            More case studies and longer-form write-ups can be added later if they provide real value.
          </p>
        </div>
      </div>
    </main>
  );
}
