import { useEffect, useState } from "react";
import { getLenis } from "@/hooks/use-lenis";

const links = [
  { label: "Work", id: "work" },
  { label: "Services", id: "services" },
  { label: "Process", id: "process" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(el, { offset: -40 });
    else el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-sig ${
        scrolled
          ? "backdrop-blur-md bg-background/70 border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1440px] px-6 md:px-12 h-16 flex items-center justify-between">
        <button
          onClick={() => go("hero")}
          className="font-mono-ui text-[14px] tracking-tight text-foreground hover:text-accent transition-colors duration-300 ease-sig"
        >
          zubair.ahmed<span className="text-accent">()</span>
        </button>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="font-mono-ui text-[11px] uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 ease-sig relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 ease-sig group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => go("contact")}
          className="hidden md:inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-[11px] uppercase tracking-[0.15em] font-mono-ui text-foreground hover:border-accent/60 transition-all duration-300 ease-sig"
        >
          Get in touch
        </button>
      </nav>
    </header>
  );
}
