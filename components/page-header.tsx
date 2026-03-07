type Props = {
  eyebrow: string;
  title: string;
  intro: string;
};

export default function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <section className="space-y-4 pb-10 md:pb-12">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="section-title max-w-4xl">{title}</h1>
      <p className="lead max-w-3xl">{intro}</p>
    </section>
  );
}
