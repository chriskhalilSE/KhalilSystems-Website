import PageHeader from "@/components/page-header";

const items = [
  {
    title: "Real-time data pipeline",
    desc: "Designed and delivered ingestion pipelines for live sports data used in broadcast environments. Handled inconsistent upstream data, implementing validation and transformation layers to maintain internal stability and correctness under continuous updates.",
    tags: ["Live data", "Validation", "Transformation"],
    tone: "panel-blue",
  },
  {
    title: "Live odds integration",
    desc: "Built real-time integration with external odds providers, delivering validated data into broadcast graphics systems. Ensured graceful degradation under feed disruption and maintained consistent output during live production.",
    tags: ["External feeds", "Graceful degradation", "Broadcast graphics"],
    tone: "panel-amber",
  },
  {
    title: "Event processing engine",
    desc: "Engineered real-time processing of match events into structured timelines for broadcast output. Handled complex state transitions including corrections and rollbacks while maintaining strict data integrity.",
    tags: ["State transitions", "Corrections", "Data integrity"],
    tone: "",
  },
  {
    title: "Local AI / RAG system",
    desc: "Designed a local retrieval-augmented system using .NET and local LLM inference. Implemented document ingestion, indexing, and retrieval pipelines with a focus on performance, privacy, and deterministic behaviour.",
    tags: [".NET", "RAG", "Local inference"],
    tone: "panel-blue",
  },
];

export default function WorkPage() {
  return (
    <main className="page-shell">
      <PageHeader
        eyebrow="Selected systems and representative delivery"
        title="Systems I&apos;ve delivered"
        intro="A selective view of the kind of systems work I specialise in: real-time, integration-heavy, production-critical delivery where reliability and correctness matter under pressure."
      />

      <section className="grid gap-4 md:grid-cols-2">
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
