import Link from "next/link";
import PageHeader from "@/components/page-header";

const principles = [
  "Operate with a systems-level view across backend development, data pipelines, infrastructure, and runtime behaviour.",
  "Prefer clear architecture and maintainability over cleverness that becomes tomorrow's support problem.",
  "Break delivery into sensible increments so risk surfaces early and software remains steerable.",
];

const whereItHelps = [
  "Live and operational environments where mistakes are visible immediately.",
  "Integration-heavy systems where upstream inputs are unreliable but downstream behaviour still needs to be stable.",
  "Legacy platforms that need careful modernisation instead of bonfire transformation.",
];

export default function AboutPage() {
  return (
    <main className="page-shell">
      <PageHeader
        eyebrow="About"
        title="Real-time systems engineering with practical delivery at the centre"
        intro="I&apos;m a real-time systems engineer with over 10 years&apos; experience working in live production environments where system behaviour directly impacts end users. My work has focused on data-heavy, integration-driven systems where reliability, timing, and correctness are critical."
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
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">Reliable, direct, and operationally aware.</h2>
        <p className="mt-4 max-w-3xl leading-8 text-white/70">
          I operate across backend development, data pipelines, and system behaviour, with a strong focus on building software that remains stable under pressure.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">Get in touch</Link>
          <Link href="/Christopher_Khalil_CV.docx" className="btn-secondary">Download CV</Link>
        </div>
      </section>
    </main>
  );
}
