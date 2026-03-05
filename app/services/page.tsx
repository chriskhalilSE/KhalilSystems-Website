export default function ServicesPage() {
  return (
    <main style={{ background: "#0B0F14", color: "#E6EDF3", minHeight: "100vh", padding: "80px" }}>
		<section id="services" className="mx-auto max-w-5xl px-6 py-14">
		  <h2 className="text-xl font-semibold">Services</h2>
		  <p className="mt-2 max-w-2xl text-white/70">
			Short, specific offerings. No fluff, no buzzword soup.
		  </p>

		  <div className="mt-8 grid gap-4 md:grid-cols-3">
			{[
			  { title: "Systems Engineering", desc: "Design and delivery of robust backend and integration systems." },
			  { title: ".NET + APIs", desc: "C#, ASP.NET, REST services, background processing, reliability." },
			  { title: "Automation + Tooling", desc: "Internal tools that remove manual steps and operational pain." },
			].map((c) => (
			  <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
				<div className="font-medium">{c.title}</div>
				<div className="mt-2 text-sm text-white/70 leading-relaxed">{c.desc}</div>
			  </div>
			))}
		  </div>
		</section>
    </main>
  );
}