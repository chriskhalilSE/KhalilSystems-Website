export default function ServicesPage() {
  return (
    <main className="py-16">
      <div className="space-y-4">
        <p className="text-sm text-white/70">Clear offerings, outcome led.</p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Services with <span className="text-blue-300">reliability</span> built in
        </h1>
        <p className="max-w-2xl text-white/75 leading-relaxed">
          The goal is simple: make systems that behave predictably under pressure.
          Below are the main service areas, plus the kinds of results they usually produce.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Broadcast graphics systems",
            desc: "Tooling and workflows for live production environments where timing matters.",
            accent: "border-blue-400/25 hover:border-blue-400/45",
          },
          {
            title: "Automation and workflow engineering",
            desc: "Remove manual steps, reduce errors, and make operations calmer.",
            accent: "border-amber-300/25 hover:border-amber-300/45",
          },
          {
            title: "Legacy modernisation",
            desc: "Incremental upgrades without breaking the business or the people using it.",
            accent: "border-white/15 hover:border-white/25",
          },
          {
            title: "Real time data integration",
            desc: "Ingest, transform, and deliver fast data safely and observably.",
            accent: "border-blue-400/25 hover:border-blue-400/45",
          },
          {
            title: "APIs and backend services",
            desc: "C# and .NET services with boundaries, performance, and maintainability.",
            accent: "border-white/15 hover:border-white/25",
          },
          {
            title: "Operational hardening",
            desc: "Monitoring, logging, runbooks, and guardrails so systems fail gracefully.",
            accent: "border-amber-300/25 hover:border-amber-300/45",
          },
        ].map((c) => (
          <div
            key={c.title}
            className={`rounded-2xl border bg-white/5 p-5 transition ${c.accent}`}
          >
            <div className="font-medium">{c.title}</div>
            <div className="mt-2 text-sm text-white/70 leading-relaxed">{c.desc}</div>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="text-sm text-white/70">Engagement shape</div>
        <div className="mt-2 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-blue-400/20 bg-black/20 p-4">
            <div className="font-medium">Discovery</div>
            <div className="mt-1 text-sm text-white/70">Clarify goals, constraints, risks, and success metrics.</div>
          </div>
          <div className="rounded-xl border border-white/15 bg-black/20 p-4">
            <div className="font-medium">Delivery</div>
            <div className="mt-1 text-sm text-white/70">Build in small increments, validate early, ship safely.</div>
          </div>
          <div className="rounded-xl border border-amber-300/20 bg-black/20 p-4">
            <div className="font-medium">Hardening</div>
            <div className="mt-1 text-sm text-white/70">Observability and operational polish so it holds up.</div>
          </div>
        </div>
      </div>
    </main>
  );
}