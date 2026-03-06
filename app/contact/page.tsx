export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="space-y-5">
        <p className="eyebrow">Get in touch</p>
        <h1 className="section-title">
          Start with the problem. <span className="text-amber-300">The rest follows.</span>
        </h1>
        <p className="lead">
          A short note covering what you are trying to build, what is currently painful, and what a
          good outcome looks like is enough to start a sensible conversation.
        </p>
      </section>

      <section className="mt-12 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="panel p-7">
          <div className="text-sm text-white/65">Email</div>
          <a
            className="mt-3 inline-block text-lg font-medium text-white transition hover:text-amber-300"
            href="mailto:chris@khalilsystems.co.uk"
          >
            chris@khalilsystems.co.uk
          </a>
          <p className="mt-4 text-sm leading-7 text-white/70">
            Typical response time is within one business day.
          </p>
        </div>

        <div className="panel panel-blue p-7">
          <div className="text-sm text-white/65">Helpful context</div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
              <div className="font-medium text-white">Goal</div>
              <p className="mt-2 text-sm leading-6 text-white/70">What needs to change and why it matters.</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
              <div className="font-medium text-white">Constraints</div>
              <p className="mt-2 text-sm leading-6 text-white/70">Deadlines, systems, budgets, and environmental realities.</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
              <div className="font-medium text-white">Engagement</div>
              <p className="mt-2 text-sm leading-6 text-white/70">Contract, advisory, or short focused delivery sprint.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 panel panel-amber p-7">
        <div className="text-sm text-white/65">Next step</div>
        <p className="mt-3 max-w-3xl leading-8 text-white/72">
          A lightweight form can be added later with spam protection. For now, direct email keeps the path simple and fast.
        </p>
      </section>
    </main>
  );
}
