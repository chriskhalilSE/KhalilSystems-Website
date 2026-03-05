export default function AboutPage() {
  return (
    <main className="py-16">
      <h1 className="text-4xl font-semibold tracking-tight">About</h1>
      <p className="mt-4 max-w-3xl text-white/75 leading-relaxed">
        Khalil Systems Engineering is a small, senior-led consultancy focused on building reliable software
        systems that work in real operational environments.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="font-medium">How I work</div>
          <ul className="mt-3 list-disc pl-5 text-white/75 space-y-2">
            <li>Make assumptions explicit and validate early</li>
            <li>Prioritise reliability and operational visibility</li>
            <li>Deliver small, testable increments that reduce risk</li>
            <li>Leave behind clear docs and handover notes</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="font-medium">What this site is</div>
          <p className="mt-3 text-white/70 leading-relaxed">
            A simple, no-drama presence. It exists to make it easy to understand what I do and how to contact me.
            More case studies and longer-form write-ups can be added later if they provide real value.
          </p>
        </div>
      </div>
    </main>
  );
}
