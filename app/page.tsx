export default function HomePage() {
  return (
    <main className="py-16">
      <section className="space-y-6">
        <p className="text-sm text-white/70">
          London-based software engineering and systems delivery
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Build software that survives reality.
        </h1>

        <p className="max-w-2xl text-white/75 leading-relaxed">
          I design and deliver reliable systems: APIs, automation, data pipelines, and practical tooling
          that improves operational outcomes.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="mailto:chris@khalilsystems.co.uk"
            className="rounded-lg bg-white text-black px-4 py-2 font-medium hover:opacity-90 transition"
          >
            Email me
          </a>
          <a
            href="/services"
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10 transition"
          >
            View services
          </a>
          <a
            href="/work"
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10 transition"
          >
            See selected work
          </a>
        </div>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-3">
        {[
          { k: "Reliability", v: "Designed for uptime, observability, and graceful failure." },
          { k: "Clarity", v: "Simple interfaces, explicit assumptions, zero mystery meat." },
          { k: "Outcomes", v: "Measured impact, not a long list of technologies." },
        ].map((x) => (
          <div key={x.k} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="font-medium">{x.k}</div>
            <div className="mt-2 text-sm text-white/70 leading-relaxed">{x.v}</div>
          </div>
        ))}
      </section>

      <section className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="text-sm text-white/60">Availability</div>
        <div className="mt-1 text-white/85">
          Currently open to contract and advisory work. Short engagements welcome.
        </div>
      </section>
    </main>
  );
}
