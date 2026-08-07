import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/Hero";
import { Reveal } from "../components/Reveal";
import heroImg from "../assets/hero-mission.jpg";
import { Layers, Shuffle, Compass } from "lucide-react";
import { pageMeta } from "../lib/site";

export const Route = createFileRoute("/mission")({
  head: () =>
    pageMeta({
      title: "Our Mission — European Gambling Gathering",
      description:
        "Why EGG exists: illegal gambling networks, fragmented enforcement, and complex supply chains demand a coordinated European response.",
      path: "/mission",
    }),
  component: MissionPage,
});

function MissionPage() {
  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="Network of European connections symbolising coordinated market integrity"
        eyebrow="Our Mission"
        title={<>A coordinated response to European challenges.</>}
        subtitle="Illegal gambling networks, fragmented enforcement, and increasingly complex supply chains do not respect borders. Neither should the response."
        fullScreen
      />

      <section className="py-24 md:py-32">
        <div className="egg-container grid gap-16 md:grid-cols-[1fr_1.4fr] items-start">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-egg-blue mb-3">The challenge</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-off-white leading-tight">
              Fragmented systems. Shared problems.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-cool-gray leading-relaxed">
            <p className="text-lg text-off-white/90">
              European gambling regulation is a patchwork of national frameworks. Illegal operators, black-market payment routes, and unlicensed marketing exploit exactly those seams.
            </p>
            <p>
              Compliance officers spot the same tactics in different jurisdictions weeks apart. Regulators publish enforcement decisions that never reach the operators most affected by them. Researchers publish evidence that never reaches the desks where decisions are made.
            </p>
            <p>
              EGG exists to close those loops — not by adding another layer of governance, but by putting the people who already do this work into direct, working contact with one another.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[color:var(--border)] bg-charcoal/40 py-24 md:py-32">
        <div className="egg-container">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-egg-blue mb-3 text-center">Positioning</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-off-white leading-tight text-center max-w-3xl mx-auto">
              A platform, not another association.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Layers,
                title: "Evidence leads to action",
                body: "Structured data and shared intelligence — not opinion — set the agenda for what EGG works on.",
              },
              {
                icon: Shuffle,
                title: "Practical standards",
                body: "Frameworks that operators, suppliers, and payment providers can actually adopt and be measured against.",
              },
              {
                icon: Compass,
                title: "Shared responsibility",
                body: "Market integrity is a joint outcome of regulators, industry, researchers, and infrastructure providers.",
              },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-[color:var(--border)] bg-charcoal p-8 transition-all duration-300 hover:border-egg-blue/40 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(59,158,219,0.1)]">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md border border-egg-blue/30 bg-egg-blue/10 text-egg-blue">
                    <p.icon size={20} aria-hidden />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-off-white mb-3">{p.title}</h3>
                  <p className="text-sm text-cool-gray leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="egg-container">
          <Reveal className="max-w-4xl">
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-off-white leading-tight">
              <span className="text-egg-blue">"</span>
              This is not about creating another association. It is about building a platform where evidence leads to action, where industry stakeholders collaborate on practical standards, and where market integrity becomes a shared responsibility.
              <span className="text-egg-blue">"</span>
            </blockquote>
            <p className="mt-8 text-sm text-cool-gray">Christian Heins — Founder, European Gambling Gathering</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
