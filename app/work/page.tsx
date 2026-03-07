import PageHeader from "@/components/page-header";

const items = [
  {
    title: "Broadcast graphics tooling",
    desc: "Representative work in live production environments where timing matters, operator confidence matters, and failure is public.",
    tags: ["Operational reliability", "Real time", "Tooling"],
    tone: "panel-blue",
  },
  {
    title: "Local AI assistant (CAI)",
    desc: "Local LLM integration, retrieval, and developer tooling built for privacy, speed, and practical day to day usefulness.",
    tags: ["RAG", "Local inference", "Developer tooling"],
    tone: "panel-amber",
  },
  {
    title: "Case study guidance",
    desc: "Add case studies one at a time. Each should explain the constraint, the intervention, and the outcome. That tells a stronger story than a technology checklist ever will.",
    tags: ["Constraint", "Intervention", "Outcome"],
    tone: "",
  },
];

export default function WorkPage() {
  return (
    <main className="page-shell">
      <PageHeader
        eyebrow="Selected work and representative outcomes"
        title="Work that holds up under pressure"
        intro="This page stays intentionally selective. A short set of outcome-focused examples is far more useful than a bloated wall of technologies trying to peacock at strangers."
      />

      <section className="grid gap-4 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className={`panel p-6 ${item.tone}`}>
            <h2 className="text-lg font-medium text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">{item.desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
