export default function HomePage() {
  return (
    <main className="py-16">
      <section className="space-y-6">

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          <span className="text-blue-500">High reliability</span>{" "}
          <span className="text-white">software</span>{" "}
          <span className="text-amber-400">built for the real world.</span>
        </h1>
        
		<p className="text-sm text-amber-400/70">
          London based software engineering and systems delivery
        </p>

        <p className="max-w-2xl text-white/75 leading-relaxed">
          Systems engineering, automation, and tooling that reduces operational risk.
          Clear interfaces, predictable behaviour, and outcomes you can measure.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="/contact"
            className="rounded-lg bg-amber-500 text-black px-4 py-2 font-medium hover:bg-amber-400 transition shadow-glowAmber"
          >
            Contact
          </a>
          <a
            href="/services"
            className="rounded-lg border border-blue-400/25 bg-white/5 px-4 py-2 text-white hover:border-blue-400/45 hover:bg-white/10 transition shadow-glowBlue"
          >
            Services
          </a>
          <a
            href="/work"
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition"
          >
            Selected work
          </a>
        </div>
      </section>

      <section className="mt-14 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Systems engineering",
            desc: "Integration, reliability, and operational fit across real world constraints.",
            tone: "border-blue-400/25 hover:border-blue-400/45",
          },
          {
            title: "APIs and services",
            desc: "C# and .NET delivery with careful boundaries, performance, and maintainability.",
            tone: "border-white/15 hover:border-white/25",
          },
          {
            title: "Automation and tooling",
            desc: "Small tools that remove manual steps and reduce production risk.",
            tone: "border-amber-300/25 hover:border-amber-300/45",
          },
        ].map((c) => (
          <div
            key={c.title}
            className={`rounded-2xl border bg-white/5 p-5 transition ${c.tone}`}
          >
            <div className="font-medium">{c.title}</div>
            <div className="mt-2 text-sm text-white/70 leading-relaxed">{c.desc}</div>
          </div>
        ))}
      </section>

      <section className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="text-sm text-white/70">Availability</div>
        <div className="mt-2 text-white">
          Open to contract work and short advisory engagements.
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            className="rounded-lg bg-blue-500/15 px-4 py-2 text-blue-200 hover:bg-blue-500/20 transition"
            href="/contact"
          >
            Start a conversation
          </a>
          <a
            className="rounded-lg bg-amber-500/15 px-4 py-2 text-amber-200 hover:bg-amber-500/20 transition"
            href="/services"
          >
            View services
          </a>
        </div>
      </section>
    </main>
  );
}