import PageHeader from "@/components/page-header";

const context = [
  ["Goal", "What needs to change and why it matters."],
  ["Constraints", "Deadlines, systems, budgets, and environmental realities."],
  ["Engagement", "Contract, advisory, or short focused delivery sprint."],
];

export default function ContactPage() {
  return (
    <main className="page-shell">
      <PageHeader
        eyebrow="Get in touch"
        title="Start with the problem. The rest follows."
        intro="A short note covering what you are trying to build, what is currently painful, and what a good outcome looks like is enough to start a sensible conversation."
      />

      <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="panel panel-amber p-6 md:p-7">
          <div className="text-sm uppercase tracking-[0.18em] text-white/[0.55]">Email</div>
          <a href="mailto:chris@khalilsystems.co.uk" className="mt-3 inline-block text-xl font-medium text-white transition hover:text-amber-200">
            chris@khalilsystems.co.uk
          </a>
          <p className="mt-4 text-sm leading-7 text-white/70">Typical response time is within one business day.</p>
        </div>

        <div className="panel p-6 md:p-7">
          <div className="text-sm uppercase tracking-[0.18em] text-white/[0.55]">Helpful context</div>
          <div className="mt-5 grid gap-3">
            {context.map(([title, desc], index) => (
              <div key={title} className={`feature-row ${index === 0 ? "feature-row-blue" : index === 2 ? "feature-row-amber" : ""}`}>
                <span className="mr-2 font-medium text-white">{title}</span>
                <span className="text-white/[0.72]">{desc}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-white/[0.65]">
            A lightweight form can be added later with spam protection. For now, direct email keeps the path simple and fast.
          </p>
        </div>
      </section>
    </main>
  );
}
