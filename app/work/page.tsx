export default function WorkPage() {
  return (
    <main className="py-16">
      <div className="space-y-4">
        <p className="text-sm text-white/70">Selected work and representative outcomes.</p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Work that <span className="text-blue-300">holds up</span> under pressure
        </h1>
        <p className="max-w-2xl text-white/75 leading-relaxed">
          This page is intentionally lightweight for now. It is a place for case studies as they become public.
          The goal is to show outcomes and constraints, not a list of tools.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-blue-400/25 bg-white/5 p-6 hover:border-blue-400/45 transition">
          <div className="font-medium">Broadcast graphics tooling</div>
          <div className="mt-2 text-sm text-white/70 leading-relaxed">
            Live operations, tight timelines, and reliability requirements.
            Focus on reducing failure modes and improving operator confidence.
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-white/15 bg-black/20 px-2 py-1 text-white/70">Operational reliability</span>
            <span className="rounded-full border border-blue-400/20 bg-black/20 px-2 py-1 text-blue-200">Real time</span>
            <span className="rounded-full border border-white/15 bg-black/20 px-2 py-1 text-white/70">Tooling</span>
          </div>
        </div>

        <div className="rounded-2xl border border-amber-300/25 bg-white/5 p-6 hover:border-amber-300/45 transition">
          <div className="font-medium">Local AI assistant (CAI)</div>
          <div className="mt-2 text-sm text-white/70 leading-relaxed">
            Local LLM integration, embeddings and retrieval, and CLI workflows.
            Built for privacy, speed, and practical day to day use.
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-white/15 bg-black/20 px-2 py-1 text-white/70">RAG</span>
            <span className="rounded-full border border-amber-300/20 bg-black/20 px-2 py-1 text-amber-200">Local inference</span>
            <span className="rounded-full border border-white/15 bg-black/20 px-2 py-1 text-white/70">Developer tooling</span>
          </div>
        </div>
      </div>

      <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="text-sm text-white/70">Placeholder</div>
        <div className="mt-2 text-white">Add one case study at a time. Keep them short and outcome led.</div>
      </div>
    </main>
  );
}
