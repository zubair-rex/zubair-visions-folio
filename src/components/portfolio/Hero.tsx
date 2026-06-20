import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useIsMobileOrLowPower } from "@/hooks/use-is-mobile";
import { getLenis } from "@/hooks/use-lenis";

const HeroBlob = lazy(() => import("./HeroBlob").then((m) => ({ default: m.HeroBlob })));

const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay: 0.15 + i * 0.12 },
  }),
};

export function Hero() {
  const low = useIsMobileOrLowPower();
  const heroRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (low) return;
    const el = heroRef.current;
    const glow = glowRef.current;
    if (!el || !glow) return;
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
    };
    const onEnter = () => (glow.style.opacity = "1");
    const onLeave = () => (glow.style.opacity = "0");
    const tick = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      glow.style.transform = `translate3d(${cx - 300}px, ${cy - 300}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [low]);

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (!el) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(el, { offset: -40 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >
      {/* 3D scene */}
      <div className="absolute inset-0 -z-10">
        {low ? (
          <div
            className="absolute inset-0 opacity-90"
            style={{
              background:
                "radial-gradient(55% 45% at 50% 45%, rgba(124,92,255,0.42) 0%, rgba(124,92,255,0.08) 50%, transparent 75%)",
            }}
          />
        ) : (
          mounted && (
            <Suspense fallback={null}>
              <HeroBlob />
            </Suspense>
          )
        )}
        {/* radial vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 50%, rgba(124,92,255,0.18) 0%, rgba(11,12,16,0) 60%), radial-gradient(100% 80% at 50% 50%, transparent 55%, #0B0C10 92%)",
          }}
        />
      </div>

      {/* cursor glow */}
      {!low && (
        <div
          ref={glowRef}
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 w-[600px] h-[600px] rounded-full -z-[5] opacity-0 transition-opacity duration-500 ease-sig"
          style={{
            background:
              "radial-gradient(circle, rgba(124,92,255,0.22) 0%, rgba(124,92,255,0) 60%)",
            filter: "blur(20px)",
          }}
        />
      )}

      <div className="relative mx-auto max-w-[1440px] w-full px-6 md:px-12 py-32 text-center">
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
          <span className="label-eyebrow text-accent">Built in code, not templates</span>
        </motion.div>
        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="headline text-foreground mx-auto max-w-5xl"
          style={{ fontSize: "clamp(48px, 9vw, 104px)" }}
        >
          Zubair <span className="accent-word">Ahmed</span>
        </motion.h1>
        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-8 mx-auto max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed"
        >
          Most websites get scrolled past. I design and build the ones people screenshot.
        </motion.p>
        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={scrollToWork}
            className="group relative inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[13px] font-medium font-mono-ui uppercase tracking-[0.12em] text-foreground overflow-hidden transition-all duration-300 ease-sig hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #7C5CFF, #A78BFA)",
              boxShadow: "0 0 40px rgba(124,92,255,0.35)",
            }}
          >
            <span className="relative z-10">View my work</span>
            <span className="relative z-10 transition-transform duration-300 ease-sig group-hover:translate-x-1">→</span>
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contact");
              if (!el) return;
              const lenis = getLenis();
              if (lenis) lenis.scrollTo(el, { offset: -40 });
              else el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-3 rounded-full glass px-7 py-3.5 text-[13px] font-medium font-mono-ui uppercase tracking-[0.12em] text-foreground hover:border-accent/60 transition-all duration-300 ease-sig"
          >
            Start a project
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-cue">
        <span className="label-eyebrow text-muted-foreground">Scroll</span>
        <span className="block w-px h-8 bg-gradient-to-b from-muted-foreground/60 to-transparent" />
      </div>
    </section>
  );
}
