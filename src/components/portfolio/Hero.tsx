import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useIsMobileOrLowPower } from "@/hooks/use-is-mobile";
import { getLenis } from "@/hooks/use-lenis";

const HeroBlob = lazy(() => import("./HeroBlob").then((m) => ({ default: m.HeroBlob })));

const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay: 0.15 + i * 0.1 },
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
    const tick = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      glow.style.transform = `translate3d(${cx - 300}px, ${cy - 300}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    el.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      el.removeEventListener("mousemove", onMove);
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
      {/* Background scene */}
      <div className="absolute inset-0 -z-10">
        {low ? (
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 opacity-80"
              style={{
                background:
                  "radial-gradient(60% 50% at 70% 40%, rgba(124,92,255,0.35) 0%, rgba(124,92,255,0.05) 50%, transparent 75%), radial-gradient(40% 40% at 30% 70%, rgba(124,92,255,0.18) 0%, transparent 70%)",
              }}
            />
          </div>
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
          className="pointer-events-none absolute top-0 left-0 w-[600px] h-[600px] rounded-full -z-[5]"
          style={{
            background:
              "radial-gradient(circle, rgba(124,92,255,0.18) 0%, rgba(124,92,255,0) 60%)",
            filter: "blur(20px)",
          }}
        />
      )}

      <div className="relative mx-auto max-w-[1440px] w-full px-6 md:px-12 py-32">
        <motion.p
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="label-eyebrow text-muted-foreground mb-8"
        >
          Portfolio — 2026
        </motion.p>
        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="headline text-foreground"
          style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
        >
          Zubair <span className="accent-word">Ahmed</span>
        </motion.h1>
        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-6 max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed"
        >
          I design and build websites people stop scrolling for.
        </motion.p>
        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-12"
        >
          <button
            onClick={scrollToWork}
            className="group relative inline-flex items-center gap-3 rounded-[10px] border border-border bg-surface/60 backdrop-blur-sm px-6 py-3.5 text-sm font-medium text-foreground hover:border-accent/50 hover:bg-surface transition-all duration-300 ease-sig"
          >
            <span>View my work</span>
            <span className="text-accent transition-transform duration-300 ease-sig group-hover:translate-x-1">
              →
            </span>
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-cue">
        <span className="label-eyebrow text-muted-foreground">Scroll</span>
        <span className="block w-px h-8 bg-gradient-to-b from-muted-foreground/60 to-transparent" />
      </div>
    </section>
  );
}
