const workItems = [
  {
    title: "Broadcast graphics tooling",
    summary:
      "Representative work in live production environments where timing matters, operator confidence matters, and failure is public.",
    tags: ["Operational reliability", "Real time", "Tooling"],
    tone: "panel-blue",
  },
  {
    title: "Local AI assistant (CAI)",
    summary:
      "Local LLM integration, retrieval, and developer tooling built for privacy, speed, and practical day to day usefulness.",
    tags: ["RAG", "Local inference", "Developer tooling"],
    tone: "panel-amber",
  },
];

export default function WorkPage() {
  return (
    <main className="page-shell">
      <section className="space-y-5">
        <p className="eyebrow">Selected work and representative outcomes</p>
        <h1 className="section-title">
          Work that <span className="text-blue-400">holds up</span> under pressure
        </h1>
        <p className="lead">
          This page stays intentionally selective. A short set of outcome-focused examples is far
          more useful than a bloated wall of technologies trying to peacock at strangers.
        </p>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-2">
        {workItems.map((item) => (
          <article key={item.title} className={`panel p-7 ${item.tone}`}>
            <div className="text-lg font-medium text-white">{item.title}</div>
            <p className="mt-3 text-sm leading-7 text-white/70">{item.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="mt-12 panel p-7">
        <div className="text-sm text-white/65">Case study guidance</div>
        <p className="mt-3 max-w-3xl leading-8 text-white/72">
          Add case studies one at a time. Each should explain the constraint, the intervention, and
          the outcome. That tells a stronger story than a technology checklist ever will.
        </p>
      </section>
    </main>
  );
}
