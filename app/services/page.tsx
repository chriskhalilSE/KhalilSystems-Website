export default function ServicesPage() {
  return (
    <main className="py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
      <p className="mt-4 max-w-2xl text-white/75 leading-relaxed">
        A small set of outcome-led offerings. These are deliberately broad enough to fit real projects,
        but specific enough to avoid vague consultancy soup.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Systems Engineering",
            desc: "Architecture and delivery of integrated systems with clear interfaces, reliability, and operational fit.",
          },
          {
            title: ".NET and APIs",
            desc: "C#, ASP.NET, REST services, background processing, performance, resilience, and pragmatic testing.",
          },
          {
            title: "Automation and Tooling",
            desc: "Internal tools that remove manual steps, reduce risk, and give teams faster feedback loops.",
          },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="font-medium">{c.title}</div>
            <div className="mt-2 text-sm text-white/70 leading-relaxed">{c.desc}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="text-sm text-white/60">Typical deliverables</div>
        <ul className="mt-3 list-disc pl-5 text-white/75 space-y-2">
          <li>Technical discovery and delivery plan with risks and options</li>
          <li>Production-ready API or integration component</li>
          <li>Automation scripts and operational tooling</li>
          <li>Runbooks and handover notes so the work survives after launch</li>
        </ul>
      </div>
    </main>
  );
}
