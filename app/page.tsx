export default function HomePage() {
  return (
<main className="mx-auto max-w-5xl px-6 py-16">
  <section className="space-y-6">
    <p className="text-sm text-white/70">
      London-based software engineering and systems delivery
    </p>

    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
      Build software that survives reality.
    </h1>

    <p className="max-w-2xl text-white/75 leading-relaxed">
      I design and deliver reliable systems: APIs, automation, data pipelines, and
      practical tooling that improves operational outcomes.
    </p>

    <div className="flex gap-3 pt-2">
      <a
        href="#contact"
        className="rounded-lg bg-white text-black px-4 py-2 font-medium hover:opacity-90 transition"
      >
        Contact
      </a>
      <a
        href="#services"
        className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10 transition"
      >
        Services
      </a>
    </div>
  </section>
  <section id="work" className="mx-auto max-w-5xl px-6 py-14">
	  <h2 className="text-xl font-semibold">Selected work</h2>
	  <p className="mt-2 max-w-2xl text-white/70">
		A couple of outcomes beats a long list of technologies.
	  </p>

	  <div className="mt-8 grid gap-4 md:grid-cols-2">
		{[
		  { title: "Broadcast graphics tooling", desc: "Latency-sensitive systems, operational reliability, live delivery workflows." },
		  { title: "Local AI assistant (CAI)", desc: "Local LLM integration, embeddings/RAG, indexing, and CLI workflows." },
		].map((c) => (
		  <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
			<div className="font-medium">{c.title}</div>
			<div className="mt-2 text-sm text-white/70 leading-relaxed">{c.desc}</div>
		  </div>
		))}
	  </div>
	</section>
</main>
  );
}