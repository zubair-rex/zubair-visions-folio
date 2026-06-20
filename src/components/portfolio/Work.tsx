import { motion } from "framer-motion";
import { LiveWorkCard, ComingSoonCard } from "./WorkCard";

export function Work() {
  return (
    <section id="work" className="relative w-full py-32 md:py-48">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="label-eyebrow text-accent mb-6"
            >
              Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              className="headline text-foreground"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            >
              Selected <span className="accent-word">work</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <LiveWorkCard
            name="Project One"
            url="https://REPLACE-WITH-YOUR-PROJECT-URL.github.io"
            index={0}
          />
          <ComingSoonCard index={1} />
          <ComingSoonCard index={2} />
          <ComingSoonCard index={3} />
        </div>
      </div>
    </section>
  );
}
