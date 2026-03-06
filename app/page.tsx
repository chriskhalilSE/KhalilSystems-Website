import Link from "next/link";

const pillars = [
  {
    title: "Systems engineering",
    desc: "Architecture and delivery that survives real operational constraints instead of looking pretty only in diagrams.",
    tone: "panel-blue",
  },
  {
    title: "APIs and services",
    desc: "Backend services with clear boundaries, predictable behaviour, and maintainable growth paths.",
    tone: "",
  },
  {
    title: "Automation and tooling",
    desc: "Focused internal tools that remove manual effort, lower failure rates, and calm the operational chaos goblin.",
    tone: "panel-amber",
  },
];

const outcomes = [
  "Operational reliability in live and time-sensitive environments",
  "Incremental modernisation without blowing up what already works",
  "Calmer workflows with fewer manual steps and better visibility",
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="space-y-6">
          <p className="eyebrow">London based software engineering and systems delivery</p>

          <div className="space-y-4">
            <h1 className="section-title max-w-4xl text-4xl md:text-6xl">
              <span className="text-white">Professional software and systems work</span>{" "}
              <span className="text-blue-400">built to stay reliable</span>{" "}
              <span className="text-amber-300">under real-world pressure.</span>
            </h1>
            <p className="lead">
              Khalil Systems Engineering delivers practical backend engineering, automation, and
              integration work with an emphasis on reliability, clarity, and operational fit.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact"
              className="rounded-full bg-amber-400 px-5 py-3 font-medium text-black transition hover:bg-amber-300 shadow-glowAmber"
            >
              Start a conversation
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-blue-400/25 bg-white/5 px-5 py-3 text-white transition hover:border-blue-300/45 hover:bg-white/10 shadow-glowBlue"
            >
              View services
            </Link>
            <Link
              href="/work"
              className="rounded-full border border-white/12 bg-black/20 px-5 py-3 text-white/90 transition hover:bg-white/10 hover:text-white"
            >
              Selected work
            </Link>
          </div>
        </div>

        <div className="panel panel-blue p-6 lg:p-7">
          <div className="flex items-center justify-between text-sm text-white/65">
            <span>What clients usually need</span>
            <span className="chip border-amber-300/20 text-amber-200">Outcome led</span>
          </div>
          <div className="mt-5 space-y-4">
            {outcomes.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-white/8 bg-black/20 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/8 text-sm font-medium text-white/85">
                  0{index + 1}
                </div>
                <p className="leading-7 text-white/78">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-4 md:grid-cols-3">
        {pillars.map((card) => (
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
          <p className="mt-4 max-w-2xl leading-8 text-white/72">
            The approach is intentionally boring in the best possible way: define the goal,
            reduce ambiguity, ship in sensible increments, and make failure states visible before
            they become expensive surprises.
          </p>
        </div>

        <div className="panel panel-amber p-7">
          <div className="text-sm text-white/65">Availability</div>
          <div className="mt-2 text-xl font-medium text-white">Open to contract work and focused advisory engagements.</div>
          <p className="mt-3 text-sm leading-7 text-white/70">
            Especially relevant for live operations, backend systems, integration-heavy delivery,
            and technical clean-up where a steady hand matters more than buzzword confetti.
          </p>
        </div>
      </section>
    </main>
  );
}
