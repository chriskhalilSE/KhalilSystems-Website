import PageHeader from "@/components/page-header";

const services = [
  {
    title: "Broadcast graphics systems",
    desc: "Tooling and workflow support for live production environments where timing, clarity, and recovery paths matter.",
    tone: "panel-blue",
  },
  {
    title: "Automation and workflow engineering",
    desc: "Reduce repetitive manual work, cut operator error, and remove avoidable friction from operational processes.",
    tone: "",
  },
  {
    title: "Legacy modernisation",
    desc: "Upgrade incrementally and safely so the business keeps moving while the software gets saner.",
    tone: "panel-amber",
  },
  {
    title: "Real-time data integration",
    desc: "Ingest, transform, validate, and deliver fast-moving data without introducing chaos downstream.",
    tone: "panel-blue",
  },
  {
    title: "APIs and backend services",
    desc: "C# and .NET service work focused on resilience, maintainability, and boundaries that make sense.",
    tone: "",
  },
  {
    title: "Operational hardening",
    desc: "Logging, observability, runbooks, and guardrails so systems fail more gracefully when reality inevitably does reality things.",
    tone: "panel-amber",
  },
];

const process = [
  ["Discovery", "Clarify the real goal, constraints, failure modes, and success criteria before writing a pile of optimistic code."],
  ["Delivery", "Build in increments, validate early, and keep changes understandable so the project stays steerable."],
  ["Hardening", "Add observability, operational polish, and sensible fallbacks so the result holds up beyond the demo."],
];

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <PageHeader
        eyebrow="Clear offerings, outcome led"
        title="Services with reliability built in"
        intro="The service mix is designed around practical delivery: build what matters, reduce risk, and make software easier to operate when deadlines and edge cases start doing their usual little dance."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className={`panel p-6 ${service.tone}`}>
            <h2 className="text-lg font-medium text-white">{service.title}</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">{service.desc}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 panel p-6 md:p-7">
        <p className="eyebrow text-amber-200/80">How engagements usually move</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {process.map(([title, desc], index) => (
            <div key={title} className={`rounded-2xl border p-5 ${index === 0 ? "border-blue-400/20 bg-blue-400/[0.05]" : index === 2 ? "border-amber-300/20 bg-amber-300/[0.05]" : "border-white/10 bg-white/[0.03]"}`}>
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-white/[0.60]">{title}</div>
              <p className="mt-3 text-sm leading-7 text-white/[0.72]">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
