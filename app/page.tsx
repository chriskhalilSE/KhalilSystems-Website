import Link from "next/link";

const serviceCards = [
  {
    title: "Systems engineering",
    desc: "Architecture and delivery shaped around operational constraints, reliability, and software that behaves sensibly when the real world gets noisy.",
    tone: "panel-blue",
  },
  {
    title: "APIs and backend services",
    desc: "Practical C# and .NET service work with clear boundaries, maintainable growth paths, and interfaces that future humans can still understand.",
    tone: "",
  },
  {
    title: "Automation and tooling",
    desc: "Focused internal tools that remove repetitive work, reduce production risk, and make awkward workflows less awkward.",
    tone: "panel-amber",
  },
];

const strengths = [
  "Real-time data processing and integration-heavy systems",
  "Low-latency thinking for live and time-sensitive environments",
  "Incremental modernisation of legacy software without bonfire migrations",
  "Operational reliability, debugging, and failure-path hardening",
  "Asynchronous processing and practical multi-threaded design",
  "Data transformation and delivery pipelines that stay understandable",
];

const outcomes = [
  "Reduce operational risk in live or time-sensitive workflows",
  "Improve reliability without blowing up what already works",
  "Remove manual friction with targeted tooling and automation",
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="space-y-6">
          <p className="eyebrow">London based independent software engineer</p>
          <div className="space-y-4">
            <h1 className="section-title max-w-4xl text-4xl md:text-6xl">
              Professional software and systems work{' '}
              <span className="text-blue-400">built to stay reliable</span>{' '}
              <span className="text-amber-300">under real-world pressure.</span>
            </h1>
            <p className="lead">
              Khalil Systems Engineering delivers practical backend engineering, automation,
              and integration work with an emphasis on reliability, clarity, and operational fit.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contact" className="btn-primary">Start a conversation</Link>
            <Link href="/services" className="btn-secondary">View services</Link>
            <Link href="/work" className="btn-tertiary">Selected work</Link>
          </div>
        </div>

        <div className="panel panel-blue p-6 lg:p-7">
          <div className="flex items-center justify-between text-sm text-white/[0.65]">
            <span>What clients usually need</span>
            <span className="chip border-amber-300/20 text-amber-200">Outcome led</span>
          </div>
          <div className="mt-5 space-y-4">
            {outcomes.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-white/[0.08] bg-black/20 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-sm font-medium text-white/[0.85]">
                  0{index + 1}
                </div>
                <p className="leading-7 text-white/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-4 md:grid-cols-3">
        {serviceCards.map((card) => (
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
            Calm delivery beats theatrical complexity.
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/70">
            The approach is intentionally steady: define the goal, reduce ambiguity, ship in
            sensible increments, and make failure states visible before they turn into expensive surprises.
          </p>
        </div>

        <div className="panel panel-amber p-7">
          <div className="text-sm text-white/[0.65]">Availability</div>
          <div className="mt-2 text-xl font-medium text-white">Open to contract work and focused advisory engagements.</div>
          <p className="mt-3 text-sm leading-7 text-white/70">
            Especially relevant for live operations, backend systems, integration-heavy delivery,
            and technical clean-up where a steady hand matters more than buzzword confetti.
          </p>
        </div>
      </section>

      <section className="mt-16 panel p-6 md:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-blue-200/80">Core experience and expertise</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Breadth where it helps. Specificity where it matters.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/[0.65]">
            Enough range to work across messy systems, but with a bias toward practical delivery rather than box-ticking theatre.
          </p>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {strengths.map((item, index) => (
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
