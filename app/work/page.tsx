export default function WorkPage() {
  return (
    <main className="py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Selected work</h1>
      <p className="mt-4 max-w-2xl text-white/75 leading-relaxed">
        A few representative areas. These are intentionally written in outcomes language, not a technology
        shopping list.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {[
          {
            title: "Broadcast graphics tooling",
            desc: "Latency-sensitive live delivery workflows, operational reliability, and automation for on-air systems.",
            tags: ["Real-time", "Operational resilience", "Tooling"],
          },
          {
            title: "Local AI assistant (CAI)",
            desc: "Local LLM integration, embeddings and retrieval (RAG), indexing workflows, and CLI-first developer ergonomics.",
            tags: ["LLMs", "Embeddings", "RAG"],
          },
          {
            title: "Modernisation and integration",
            desc: "Reducing risk while migrating legacy components, introducing clean APIs, and improving maintainability.",
            tags: ["Refactor", "Migration", "Interfaces"],
          },
          {
            title: "Data and automation pipelines",
            desc: "Automations that keep data flowing, reduce manual intervention, and create measurable operational wins.",
            tags: ["Automation", "Pipelines", "Observability"],
          },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="font-medium">{c.title}</div>
            <div className="mt-2 text-sm text-white/70 leading-relaxed">{c.desc}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
