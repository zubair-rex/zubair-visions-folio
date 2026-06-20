import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = ["Web Design", "Sales Funnels", "Conversion Copy", "Frontend Development"];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      const items = root.querySelectorAll<HTMLElement>("[data-reveal]");
      items.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 24, opacity: 0, filter: "blur(8px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.9,
            delay: i * 0.06,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          },
        );
      });
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: { trigger: lineRef.current, start: "top 85%" },
          },
        );
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="relative w-full py-32 md:py-48">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-3" data-reveal>
          <p className="label-eyebrow text-accent">About</p>
        </div>
        <div className="col-span-12 md:col-span-8 md:col-start-5 flex gap-8 md:gap-12">
          <span
            ref={lineRef}
            className="hidden md:block w-px bg-gradient-to-b from-accent via-accent/40 to-transparent origin-top"
            style={{ minHeight: "320px" }}
          />
          <div className="flex-1">
            <h2
              data-reveal
              className="headline text-foreground mb-12"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            >
              I build sites that don't just look <br className="hidden md:block" />
              good — they <span className="accent-word">convert.</span>
            </h2>
            <p data-reveal className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mb-8">
              I'm a designer and developer focused on the intersection of taste and outcomes.
              For the last few years I've shipped websites and sales funnels for founders,
              creators, and product teams — combining considered design with the engineering to
              make it feel effortless. No templates. No noise. Just work that earns attention.
            </p>
            <p data-reveal className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mb-12">
              Available for select projects.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <span
                  key={s}
                  data-reveal
                  className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium tracking-wide text-foreground/90 hover:border-accent/50 hover:text-accent transition-colors duration-300 ease-sig"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
