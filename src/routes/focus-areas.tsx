import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/Hero";
import { Reveal } from "../components/Reveal";
import { FocusCarousel } from "../components/FocusCarousel";
import { FocusAreaCard } from "../components/FocusAreaCard";
import { focusAreas } from "../lib/egg-data";
import { pageMeta } from "../lib/site";
import heroImg from "../assets/hero-focus.jpg";
import slideA from "../assets/hero-home.jpg";
import slideB from "../assets/hero-mission.jpg";
import slideC from "../assets/hero-stakeholders.jpg";
import slideD from "../assets/hero-involved.jpg";
import slideE from "../assets/hero-contact.jpg";

const slideImages = [slideA, slideB, slideC, slideD, slideE];

export const Route = createFileRoute("/focus-areas")({
  head: () =>
    pageMeta({
      title: "Focus Areas — European Gambling Gathering",
      description:
        "Fighting illegal gambling, trusted standards, market intelligence, cross-market expertise, and recognising integrity — EGG's five working priorities.",
      path: "/focus-areas",
    }),
  component: FocusAreasPage,
});

function FocusAreasPage() {
  const carouselItems = focusAreas.map((f, i) => ({
    ...f,
    image: slideImages[i % slideImages.length],
    imageAlt: `${f.title} — European Gambling Gathering focus area`,
  }));

  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="Collaborative workspace representing EGG focus areas"
        eyebrow="Focus Areas"
        title={<>Five working priorities. One coordinated platform.</>}
        subtitle="Each focus area is a defined workstream — with stakeholders, outputs, and shared responsibility for progress."
        fullScreen
      />

      <section className="py-24 md:py-32">
        <div className="egg-container">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-egg-blue mb-3">Overview</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-off-white leading-tight max-w-3xl">
              Where cooperation is most needed.
            </h2>
          </Reveal>

          <div className="mt-14">
            <FocusCarousel items={carouselItems} />
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-charcoal/40 py-24 md:py-32">
        <div className="egg-container">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-egg-blue mb-3">Breakdown</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-off-white leading-tight max-w-3xl">
              Each priority, in detail.
            </h2>
          </Reveal>

          <div className="mt-16 space-y-24">
            {focusAreas.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} delay={0.05}>
                  <div className="grid gap-12 md:grid-cols-[auto_1fr] items-start">
                    <div className="flex md:flex-col items-center md:items-start gap-4">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg border border-egg-blue/30 bg-egg-blue/10 text-egg-blue">
                        <Icon size={22} aria-hidden />
                      </div>
                      <span className="font-mono text-xs text-cool-gray">
                        {String(i + 1).padStart(2, "0")} / {String(focusAreas.length).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="max-w-3xl">
                      <h3 className="font-display text-3xl md:text-4xl font-semibold text-off-white leading-tight">
                        {f.title}
                      </h3>
                      <p className="mt-5 text-base md:text-lg text-cool-gray leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                  {i < focusAreas.length - 1 && <div className="hairline mt-24" />}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="egg-container">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-egg-blue mb-3">At a glance</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-off-white leading-tight max-w-3xl">
              Compact reference.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((f, i) => (
              <FocusAreaCard key={f.title} icon={f.icon} title={f.title} description={f.description} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
