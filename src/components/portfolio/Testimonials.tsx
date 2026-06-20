import { motion } from "framer-motion";

const items = [
  {
    quote:
      "Zubair rebuilt our landing in two weeks and our trial sign-ups jumped overnight. The site finally looks like the product we always wanted to ship.",
    name: "Maya Lindqvist",
    role: "Founder, Northcraft",
    initials: "ML",
  },
  {
    quote:
      "Worked with a lot of designers. Zubair is the rare one who can ship as well as he can sketch. Every detail is intentional.",
    name: "Daniel Okafor",
    role: "Head of Growth, Pinecone Labs",
    initials: "DO",
  },
  {
    quote:
      "Our funnel went from a leaky bucket to our best-performing channel. He cares about the result, not just the pixels.",
    name: "Priya Raman",
    role: "CMO, Halo Studio",
    initials: "PR",
  },
];

export function Testimonials() {
  return (
    <section className="relative w-full py-32 md:py-48 border-t border-border">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="label-eyebrow text-accent mb-6"
          >
            Words
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="headline text-foreground"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
          >
            People who already <span className="accent-word">shipped.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="relative overflow-hidden rounded-[16px] glass p-8 hover:-translate-y-1 hover:border-accent/40 transition-all duration-400 ease-sig"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -top-4 right-4 font-display text-[120px] leading-none text-accent/10 select-none"
              >
                "
              </span>
              <blockquote className="text-foreground/85 text-[15px] leading-relaxed italic mb-7">
                {t.quote}
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center font-display text-sm font-semibold text-foreground"
                  style={{ background: "linear-gradient(135deg, #7C5CFF, #A78BFA)" }}
                >
                  {t.initials}
                </span>
                <span>
                  <span className="block font-display text-sm font-medium text-foreground">{t.name}</span>
                  <span className="block text-xs text-muted-foreground mt-0.5">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
