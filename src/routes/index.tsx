import { createFileRoute } from "@tanstack/react-router";
import { useLenis } from "@/hooks/use-lenis";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Process } from "@/components/portfolio/Process";
import { Work } from "@/components/portfolio/Work";
import { Results } from "@/components/portfolio/Results";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { CallToAction } from "@/components/portfolio/CallToAction";
import { Contact } from "@/components/portfolio/Contact";
import { LiquidBackdrop } from "@/components/portfolio/LiquidBackdrop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zubair Ahmed — Website & Sales Funnel Designer" },
      {
        name: "description",
        content:
          "Zubair Ahmed designs and hand-codes websites and sales funnels people stop scrolling for.",
      },
      { property: "og:title", content: "Zubair Ahmed — Website & Sales Funnel Designer" },
      {
        property: "og:description",
        content:
          "Zubair Ahmed designs and hand-codes websites and sales funnels people stop scrolling for.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useLenis();
  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <LiquidBackdrop />
      <div className="noise-overlay" aria-hidden />
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Work />
      <Results />
      <About />
      <Testimonials />
      <CallToAction />
      <Contact />
    </main>
  );
}
