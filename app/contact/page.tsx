export default function ContactPage() {
  return (
    <main className="py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 max-w-2xl text-white/75 leading-relaxed">
        The fastest way to start is a short message with your goal, timeline, and any constraints.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-white/60">Email</div>
          <a
            className="mt-2 inline-block text-white hover:underline"
            href="mailto:chris@khalilsystems.co.uk"
          >
            chris@khalilsystems.co.uk
          </a>
          <div className="mt-4 text-sm text-white/70 leading-relaxed">
            Placeholder: add a contact form later if it becomes useful. Email is fine for now.
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-white/60">What to include</div>
          <ul className="mt-3 list-disc pl-5 text-white/75 space-y-2">
            <li>What you are trying to build or improve</li>
            <li>Deadline or target date (if any)</li>
            <li>Current stack and any constraints</li>
            <li>What “good” looks like to you</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
