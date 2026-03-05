export default function HomePage() {
  return (
<main className="mx-auto max-w-5xl px-6 py-16">
  <section className="space-y-6">
    <p className="text-sm text-amber-400">
      London-based software engineering and systems delivery
    </p>

    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
      Build software that survives reality.
    </h1>

    <p className="max-w-2xl text-white/75 leading-relaxed">
      I design and deliver reliable systems: APIs, automation, data pipelines, and
      practical tooling that improves operational outcomes.
    </p>

    <div className="flex gap-3 pt-2">
      <a
        href="#contact"
        className="rounded-lg bg-white text-black px-4 py-2 font-medium hover:opacity-90 transition"
      >
        Contact
      </a>
      <a
        href="#services"
        className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10 transition"
      >
        Services
      </a>
    </div>
  </section>
</main>
  );
}