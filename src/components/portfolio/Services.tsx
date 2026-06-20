import { motion } from "framer-motion";

const services = [
  {
    icon: "◐",
    name: "Website Design & Build",
    desc: "Hand-coded marketing sites and portfolios — no templates, no page-builders, no bloat.",
    tag: "From scratch",
  },
  {
    icon: "↗",
    name: "Sales Funnels",
    desc: "Landing pages and multi-step funnels engineered to take a visitor from cold to converted.",
    tag: "Conversion-led",
  },
  {
    icon: "✎",
    name: "Conversion Copy",
    desc: "Headlines, hero copy, and offer pages that earn attention and read like a real person wrote them.",
    tag: "Done with you",
  },
  {
    icon: "✦",
    name: "Motion & Interaction",
    desc: "Considered micro-animation, 3D, and scroll work that makes the brand feel alive — not gimmicky.",
    tag: "Premium polish",
  },
];

export function Services() {
  return (
    <section id="services" className="relative w-full py-32 md:py-48">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="label-eyebrow text-accent mb-6"
          >
            Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="headline text-foreground"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
          >
            Everything from first sketch <br className="hidden md:block" />
            to live & <span className="accent-word">converting.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-[16px] glass p-8 md:p-10 transition-all duration-400 ease-sig hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_20px_60px_-20px_rgba(124,92,255,0.35)]"
            >
              <div
                className="pointer-events-none absolute -top-px left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-sig"
                style={{ background: "linear-gradient(90deg, transparent, #A78BFA, transparent)" }}
              />
              <div
                className="w-12 h-12 mb-6 rounded-[12px] flex items-center justify-center text-xl text-foreground"
                style={{
                  background: "linear-gradient(135deg, #7C5CFF, #A78BFA)",
                  boxShadow: "0 8px 24px rgba(124,92,255,0.3)",
                }}
              >
                {s.icon}
              </div>
              <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-3">
                {s.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-6">
                {s.desc}
              </p>
              <span className="label-eyebrow text-accent">{s.tag}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
