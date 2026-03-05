export default function ContactPage() {
  return (
    <main className="py-16">
      <div className="space-y-4">
        <p className="text-sm text-white/70">Lets talk.</p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Get in <span className="text-amber-200">touch</span>
        </h1>
        <p className="max-w-2xl text-white/75 leading-relaxed">
          A short description of what you are building and what good looks like is enough to start.
          I will reply with next steps, timelines, and any initial risks I see.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-white/70">Email</div>
          <a
            className="mt-2 inline-block text-white hover:text-amber-300 transition"
            href="mailto:chris@khalilsystems.co.uk"
          >
            chris@khalilsystems.co.uk
          </a>
          <div className="mt-4 text-sm text-white/70">
            Typical response time: within 1 business day.
          </div>
        </div>

        <div className="rounded-2xl border border-blue-400/25 bg-white/5 p-6 hover:border-blue-400/45 transition">
          <div className="text-sm text-white/70">What to include</div>
          <ul className="mt-3 space-y-2 text-sm text-white/70 leading-relaxed">
            <li>Goal and constraints (deadlines, budget, environment).</li>
            <li>Current state (what exists, what is broken).</li>
            <li>Preferred engagement (contract, part time advisory, short sprint).</li>
          </ul>
        </div>
      </div>

      <div className="mt-14 rounded-2xl border border-amber-300/20 bg-amber-500/10 p-6">
        <div className="font-medium text-amber-100">Placeholder</div>
        <div className="mt-2 text-sm text-white/70 leading-relaxed">
          A simple contact form can be added here later (with spam protection), but email is the fastest path.
        </div>
      </div>
    </main>
  );
}