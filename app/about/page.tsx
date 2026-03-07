import Link from "next/link";
import PageHeader from "@/components/page-header";

const principles = [
  "Prefer clear architecture and maintainability over clever little ego traps.",
  "Break delivery into small increments so risks surface early.",
  "Choose solutions that are understandable by future humans, including tired ones.",
];

const whereItHelps = [
  "Live and operational environments where mistakes are visible immediately.",
  "Legacy platforms that need careful modernisation instead of bonfire transformation.",
  "Workflow pain points that can be eased with targeted tooling and automation.",
];

export default function AboutPage() {
  return (
    <main className="page-shell">
      <PageHeader
        eyebrow="A practical engineering shop"
        title="About Khalil Systems Engineering"
        intro="This is positioned as a focused software engineering and systems delivery practice. The emphasis is on reliability, incremental progress, and software that behaves sensibly when the environment gets messy."
      />

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="panel panel-blue p-6 md:p-7">
          <h2 className="text-xl font-medium text-white">How the work is done</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-white/[0.72]">
            {principles.map((item) => (
              <li key={item} className="feature-row feature-row-blue">{item}</li>
            ))}
          </ul>
        </div>

        <div className="panel panel-amber p-6 md:p-7">
          <h2 className="text-xl font-medium text-white">Where that helps</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-white/[0.72]">
            {whereItHelps.map((item) => (
              <li key={item} className="feature-row feature-row-amber">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16 panel p-7">
        <p className="eyebrow text-amber-200/80">Working style</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">Professional, direct, and operationally aware.</h2>
        <p className="mt-4 max-w-3xl leading-8 text-white/70">
          The goal is not performative consultancy theatre. It is to understand the constraints, make sensible technical decisions, and deliver software that improves the day to day reality for the people using it.
        </p>
        <div className="mt-6">
          <Link href="/contact" className="btn-primary">Contact</Link>
        </div>
      </section>
    </main>
  );
}
