import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative w-full py-32 md:py-48 border-t border-border">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="label-eyebrow text-accent mb-8"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="headline text-foreground max-w-4xl"
          style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
        >
          Let's build something <br className="hidden md:block" />
          people <span className="accent-word">remember.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <a
            href="mailto:hello@zubairahmed.com"
            className="font-display text-xl md:text-2xl text-foreground hover:text-accent transition-colors duration-300 ease-sig"
          >
            hello@zubairahmed.com
          </a>
          <ul className="flex items-center gap-4">
            <li>
              <a
                href="https://github.com/zubairahmed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-10 h-10 rounded-[8px] border border-border text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors duration-300 ease-sig"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 .5C5.65.5.5 5.65.5 12.02c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.07c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12v3.14c0 .3.21.66.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
                </svg>
              </a>
            </li>
          </ul>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-border flex items-center justify-between">
          <span className="label-eyebrow text-muted-foreground">© 2026 Zubair Ahmed</span>
          <span className="label-eyebrow text-muted-foreground">Designed & built in-house</span>
        </div>
      </div>
    </section>
  );
}
