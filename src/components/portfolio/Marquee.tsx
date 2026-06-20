const items = [
  "Web Design",
  "Sales Funnels",
  "Hand-coded builds",
  "Conversion Copy",
  "Motion & Interaction",
  "Frontend Engineering",
  "Brand Systems",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative w-full overflow-hidden border-y border-border py-6 bg-surface/40 backdrop-blur-sm">
      <div className="flex w-max gap-12 animate-marquee">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="font-display text-2xl md:text-3xl font-light text-foreground/70">
              {t}
            </span>
            <span className="text-accent text-2xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
