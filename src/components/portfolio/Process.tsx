import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Discover", desc: "Audit your offer, audience, and the work it has to do." },
  { n: "02", title: "Design", desc: "A direction with point of view — not another template clone." },
  { n: "03", title: "Build", desc: "Hand-coded, fast, accessible, and ready to scale." },
  { n: "04", title: "Ship & iterate", desc: "Launch, measure, refine — until it earns its keep." },
];

export function Process() {
  return (
    <section id="process" className="relative w-full py-32 md:py-48 border-t border-border">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="max-w-2xl mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="label-eyebrow text-accent mb-6"
          >
            Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="headline text-foreground"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
          >
            Four steps. Zero <span className="accent-word">surprises.</span>
          </motion.h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          <div
            className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(124,92,255,0.3), rgba(167,139,250,0.6), rgba(124,92,255,0.3), transparent)",
            }}
          />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="relative group text-center px-2"
            >
              <div
                className="relative z-10 w-14 h-14 mx-auto rounded-full glass flex items-center justify-center font-mono-ui text-[13px] font-medium text-accent transition-all duration-300 ease-sig group-hover:border-accent/60 group-hover:shadow-[0_0_30px_rgba(124,92,255,0.4)]"
              >
                {s.n}
              </div>
              <h3 className="mt-6 font-display text-lg font-medium text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
