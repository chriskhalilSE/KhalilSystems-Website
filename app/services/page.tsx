const services = [
  {
    title: "Broadcast graphics systems",
    desc: "Tooling and workflow support for live production environments where timing, clarity, and recovery paths matter.",
    accent: "panel-blue",
  },
  {
    title: "Automation and workflow engineering",
    desc: "Reduce repetitive manual work, cut operator error, and remove avoidable friction from operational processes.",
    accent: "panel-amber",
  },
  {
    title: "Legacy modernisation",
    desc: "Upgrade incrementally and safely so the business keeps moving while the software gets saner.",
    accent: "",
  },
  {
    title: "Real-time data integration",
    desc: "Ingest, transform, validate, and deliver fast-moving data without introducing chaos downstream.",
    accent: "panel-blue",
  },
  {
    title: "APIs and backend services",
    desc: "C# and .NET service work focused on resilience, maintainability, and boundaries that make sense.",
    accent: "",
  },
  {
    title: "Operational hardening",
    desc: "Logging, observability, runbooks, and guardrails so systems fail more gracefully when reality does what reality does.",
    accent: "panel-amber",
  },
];

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <section className="space-y-5">
        <p className="eyebrow">Clear offerings, outcome led</p>
        <h1 className="section-title">
          Services with <span className="text-blue-400">reliability</span> built in
        </h1>
        <p className="lead">
          The service mix is designed around practical delivery: build what matters, reduce risk,
          and make software easier to operate when deadlines and edge cases start doing their usual
          little dance.
        </p>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className={`panel p-6 transition hover:-translate-y-0.5 ${service.accent}`}>
            <div className="text-lg font-medium text-white">{service.title}</div>
            <p className="mt-3 text-sm leading-7 text-white/70">{service.desc}</p>
          </div>
        ))}
      </section>

      <section className="mt-14 grid gap-4 lg:grid-cols-3">
        <div className="panel panel-blue p-6">
          <div className="text-lg font-medium text-white">Discovery</div>
          <p className="mt-3 text-sm leading-7 text-white/70">
            Clarify the real goal, constraints, failure modes, and success criteria before writing a pile of optimistic code.
          </p>
        </div>
        <div className="panel p-6">
          <div className="text-lg font-medium text-white">Delivery</div>
          <p className="mt-3 text-sm leading-7 text-white/70">
            Build in increments, validate early, and keep changes understandable so the project stays steerable.
          </p>
        </div>
        <div className="panel panel-amber p-6">
          <div className="text-lg font-medium text-white">Hardening</div>
          <p className="mt-3 text-sm leading-7 text-white/70">
            Add observability, operational polish, and sensible fallbacks so the result holds up beyond the demo.
          </p>
        </div>
      </section>
    </main>
  );
}
