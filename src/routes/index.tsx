import { createFileRoute } from "@tanstack/react-router";
import { useLenis } from "@/hooks/use-lenis";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Work } from "@/components/portfolio/Work";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zubair Ahmed — Website & Sales Funnel Designer" },
      {
        name: "description",
        content:
          "Zubair Ahmed designs and builds websites and sales funnels people stop scrolling for.",
      },
      { property: "og:title", content: "Zubair Ahmed — Website & Sales Funnel Designer" },
      {
        property: "og:description",
        content:
          "Zubair Ahmed designs and builds websites and sales funnels people stop scrolling for.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useLenis();
  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Work />
      <Contact />
    </main>
  );
}
