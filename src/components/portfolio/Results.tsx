import { motion } from "framer-motion";

const stats = [
  { num: "3.4×", label: "Avg. lift in landing-page conversion" },
  { num: "<1s", label: "First contentful paint on shipped builds" },
  { num: "100%", label: "Hand-coded — zero page builders" },
];

export function Results() {
  return (
    <section className="relative w-full py-32 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="glass rounded-[16px] p-10 text-center hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_60px_-20px_rgba(124,92,255,0.3)] transition-all duration-400 ease-sig"
            >
              <div
                className="font-display font-semibold leading-none mb-3"
                style={{
                  fontSize: "clamp(48px, 6vw, 76px)",
                  background: "linear-gradient(135deg, #C9BBFF, #F2F2F5)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                {s.num}
              </div>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
