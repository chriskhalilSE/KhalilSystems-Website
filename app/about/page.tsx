import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="space-y-5">
        <p className="eyebrow">A practical engineering shop</p>
        <h1 className="section-title">
          About <span className="text-blue-400">Khalil Systems</span>{" "}
          <span className="text-amber-300">Engineering</span>
        </h1>
        <p className="lead">
          This is positioned as a focused software engineering and systems delivery practice. The
          emphasis is on reliability, incremental progress, and software that behaves sensibly when
          the environment gets messy.
        </p>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-2">
        <div className="panel panel-blue p-7">
          <div className="text-lg font-medium text-white">How the work is done</div>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-white/70">
            <li>Prefer clear architecture and maintainability over clever little ego traps.</li>
            <li>Break delivery into small increments so risks surface early.</li>
            <li>Choose solutions that are understandable by future humans, including tired ones.</li>
          </ul>
        </div>
        <div className="panel panel-amber p-7">
          <div className="text-lg font-medium text-white">Where that helps</div>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-white/70">
            <li>Live and operational environments where mistakes are visible immediately.</li>
            <li>Legacy platforms that need careful modernisation instead of bonfire transformation.</li>
            <li>Workflow pain points that can be eased with targeted tooling and automation.</li>
          </ul>
        </div>
      </section>

      <section className="mt-12 panel p-7">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-amber-200/80">Working style</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">Professional, direct, and operationally aware.</h2>
            <p className="mt-4 max-w-3xl leading-8 text-white/70">
              The goal is not performative consultancy theatre. It is to understand the constraints,
              make sensible technical decisions, and deliver software that improves the day to day
              reality for the people using it.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-amber-400 px-5 py-3 font-medium text-black transition hover:bg-amber-300 shadow-glowAmber"
          >
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
