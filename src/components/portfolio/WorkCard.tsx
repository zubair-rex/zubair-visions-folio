import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  name: string;
  url: string;
  index: number;
}

export function LiveWorkCard({ name, url, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      className="group relative aspect-[16/10] overflow-hidden rounded-[12px] border border-border bg-surface transition-all duration-300 ease-sig hover:scale-[1.03] hover:border-accent/40 hover:shadow-[0_0_0_1px_rgba(124,92,255,0.35),0_30px_60px_-20px_rgba(124,92,255,0.25)]"
    >
      {/* skeleton */}
      {!loaded && <div className="absolute inset-0 skeleton-shimmer" />}

      {/* miniature iframe at 1440 desktop width */}
      {inView && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <iframe
            src={url}
            title={name}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            style={{
              width: "1440px",
              height: "900px",
              border: 0,
              transformOrigin: "top left",
              transform: "scale(var(--scale))",
              // scale is fluid via CSS var, but iframe size fixed
            }}
            className="block [--scale:calc(100%/1440*var(--cardw,800))]"
          />
        </div>
      )}
      {/* responsive scale wrapper using ResizeObserver-free trick */}
      <ScaleEnforcer />

      {/* hover label */}
      <div className="pointer-events-none absolute inset-0 flex items-end justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-sig bg-gradient-to-t from-background/85 via-background/30 to-transparent">
        <span className="text-foreground font-display text-lg">{name}</span>
        <span className="label-eyebrow text-accent">View live ↗</span>
      </div>

      {/* full-card link */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${name} in a new tab`}
        className="absolute inset-0"
      />
    </motion.div>
  );
}

// Updates --cardw with current width so iframe scales properly
function ScaleEnforcer() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current?.parentElement;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const w = el.clientWidth;
      el.style.setProperty("--cardw", String(w));
      el.style.setProperty("--scale", String(w / 1440));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return <div ref={ref} className="hidden" />;
}

export function ComingSoonCard({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      className="relative aspect-[16/10] overflow-hidden rounded-[12px] border border-border flex items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, #14151A 0%, #101116 50%, #0e0f14 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-40" style={{
        background: "radial-gradient(60% 60% at 50% 50%, rgba(124,92,255,0.08) 0%, transparent 70%)"
      }} />
      <span className="label-eyebrow text-muted-foreground/70 relative">Coming soon</span>
    </motion.div>
  );
}
