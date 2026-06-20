import { motion } from "framer-motion";
import { getLenis } from "@/hooks/use-lenis";

export function CallToAction() {
  const goContact = () => {
    const el = document.getElementById("contact");
    if (!el) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(el, { offset: -40 });
    else el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative w-full py-32 md:py-40">
      <div className="mx-auto max-w-[1100px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden glass rounded-[24px] px-8 py-20 md:px-16 md:py-28 text-center"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(124,92,255,0.35) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-px rounded-[23px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(124,92,255,0.25), transparent 40%, transparent 60%, rgba(167,139,250,0.25))",
              maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              padding: "1px",
            }}
          />
          <p className="label-eyebrow text-accent mb-6 relative">Available — Q3 / Q4 2026</p>
          <h2
            className="headline text-foreground mx-auto max-w-3xl relative"
            style={{ fontSize: "clamp(32px, 5.2vw, 60px)" }}
          >
            Have a project that deserves <br className="hidden md:block" />
            to look <span className="accent-word">incredible?</span>
          </h2>
          <p className="mt-6 mx-auto max-w-xl text-muted-foreground text-base md:text-lg relative">
            Taking on a small number of new builds this quarter. If you have a real offer and want a
            site that actually reflects it — let's talk.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 relative">
            <button
              onClick={goContact}
              className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-[13px] font-mono-ui uppercase tracking-[0.12em] text-foreground transition-all duration-300 ease-sig hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #7C5CFF, #A78BFA)",
                boxShadow: "0 0 50px rgba(124,92,255,0.45)",
              }}
            >
              Start a project →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
