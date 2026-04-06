import Link from "next/link";

const focusAreas = [
  {
    title: "Real-time data pipelines",
    desc: "Designing ingestion and transformation systems for high-frequency live data where timing, correctness, and downstream stability all matter.",
    tone: "panel-blue",
  },
  {
    title: "Low-latency systems",
    desc: "Building responsive, multi-threaded systems that remain fast, predictable, and understandable under sustained load.",
    tone: "",
  },
  {
    title: "Production-critical environments",
    desc: "Delivering systems where uptime, correctness, and recovery behaviour are not nice-to-haves but operational requirements.",
    tone: "panel-amber",
  },
];

const proofPoints = [
  "Real-time systems engineering for live broadcast environments",
  "Event-driven architectures and integration-heavy delivery",
  "Low-latency thinking for time-sensitive production workflows",
  "Operational reliability, debugging, and failure-path hardening",
  "Incremental modernisation of legacy software without disruption",
  "Data transformation pipelines that stay maintainable under pressure",
];

const clientStrip = ["Sky Sports", "TNT Sports", "FIFA", "UEFA", "ICC", "World Rugby"];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="space-y-6">
          <p className="eyebrow">Real-time systems engineer · London, UK</p>
          <div className="space-y-4">
            <h1 className="section-title max-w-4xl text-4xl md:text-6xl">
              Production-critical software for <span className="text-blue-400">real-time systems</span>
            </h1>
            <p className="lead max-w-3xl">
              I design and deliver low-latency, data-driven systems in environments where failure is
              immediately visible and not recoverable.
            </p>
            <p className="lead max-w-3xl">
              Specialising in event-driven architectures, live data pipelines, and high-reliability
              systems under continuous load.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/Christopher_Khalil_CV.docx" className="btn-primary">Download CV</Link>
            <Link href="/contact" className="btn-secondary">Get in touch</Link>
            <Link href="/systems" className="btn-tertiary">Selected systems</Link>
          </div>
        </div>

        <div className="panel panel-blue p-6 lg:p-7">
          <div className="flex items-center justify-between gap-3 text-sm text-white/[0.65]">
            <span>Delivery profile</span>
            <span className="chip border-amber-300/20 text-amber-200">Zero-failure environments</span>
          </div>
          <div className="mt-5 space-y-4">
            <div className="feature-row feature-row-blue">
              Worked on systems supporting global live broadcasts where failures have immediate on-air impact.
            </div>
            <div className="feature-row">
              Strong background across backend development, data pipelines, runtime behaviour, and operational reliability.
            </div>
            <div className="feature-row feature-row-amber">
              Particularly relevant for live operations, integration-heavy delivery, and systems that need to stay stable under pressure.
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 panel p-6 md:p-7">
        <p className="eyebrow text-amber-200/80">Selected broadcast and sports delivery context</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {clientStrip.map((client, index) => (
            <span key={client} className={`chip ${index % 2 === 0 ? "border-blue-400/20 text-blue-100" : "border-amber-300/20 text-amber-100"}`}>
              {client}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-4 md:grid-cols-3">
        {focusAreas.map((card) => (
          <div key={card.title} className={`panel p-6 transition hover:-translate-y-0.5 ${card.tone}`}>
            <div className="text-lg font-medium text-white">{card.title}</div>
            <p className="mt-3 text-sm leading-7 text-white/70">{card.desc}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="panel p-7">
          <p className="eyebrow text-amber-200/80">How the work is approached</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Calm delivery for messy real-world systems.
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/70">
            The approach is intentionally steady: define the goal, reduce ambiguity, ship in sensible
            increments, and make failure states visible before they turn into expensive surprises.
          </p>
        </div>

        <div className="panel panel-amber p-7">
          <div className="text-sm text-white/[0.65]">Availability</div>
          <div className="mt-2 text-xl font-medium text-white">Open to contract work and focused advisory engagements.</div>
          <p className="mt-3 text-sm leading-7 text-white/70">
            Best aligned to production-critical software, real-time data processing, backend systems,
            and technical modernisation where reliability matters as much as delivery speed.
          </p>
        </div>
      </section>

      <section className="mt-16 panel p-6 md:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-blue-200/80">Core strengths</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Systems thinking shaped by live operational pressure.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/[0.65]">
            Broad enough to work across messy environments, but specialised where it counts: real-time,
            production-critical software and the behaviour of systems under load.
          </p>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {proofPoints.map((item, index) => (
            <div
              key={item}
              className={`feature-row ${index % 3 === 0 ? "feature-row-blue" : index % 3 === 2 ? "feature-row-amber" : ""}`}
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
