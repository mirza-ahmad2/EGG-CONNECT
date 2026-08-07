import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "../components/Hero";
import { Reveal } from "../components/Reveal";
import { StakeholderCategoryCard } from "../components/StakeholderCategoryCard";
import { FoundingTeamCard } from "../components/FoundingTeamCard";
import { stakeholderCategories } from "../lib/egg-data";
import { ArrowRight } from "lucide-react";
import heroImg from "../assets/hero-stakeholders.jpg";
import { pageMeta } from "../lib/site";

export const Route = createFileRoute("/stakeholders")({
  head: () =>
    pageMeta({
      title: "Stakeholders & Members — European Gambling Gathering",
      description:
        "Operators, suppliers, regulators, researchers, compliance experts, payment providers, advertising platforms, and technology partners across Europe.",
      path: "/stakeholders",
    }),
  component: StakeholdersPage,
});

function StakeholdersPage() {
  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="Professionals collaborating across the regulated gambling ecosystem"
        eyebrow="Stakeholders & Members"
        title={<>The people already doing this work.</>}
        subtitle="EGG connects the professionals and institutions that shape regulated markets — across borders, sectors, and disciplines."
        fullScreen
      />

      <section className="py-24 md:py-32">
        <div className="egg-container">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-egg-blue mb-3">Categories</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-off-white leading-tight max-w-3xl">
              Eight stakeholder groups. One platform.
            </h2>
            <p className="mt-6 text-base text-cool-gray max-w-2xl leading-relaxed">
              Cooperation across the regulated ecosystem — from the licensing authorities that set the rules to the technology providers that enable compliance in practice.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stakeholderCategories.map((s, i) => (
              <StakeholderCategoryCard key={s.label} icon={s.icon} label={s.label} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-charcoal/40 py-24 md:py-32">
        <div className="egg-container">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-egg-blue mb-3">Founding team</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-off-white leading-tight max-w-3xl">
              Built on credibility, not scale.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <FoundingTeamCard
              index={0}
              name="Christian Heins"
              role="Founder"
              initials="CH"
              bio="Commercial iGaming strategy, digital marketing, and growth. Christian founded EGG to translate years of operator-side experience into a coordinated European platform for integrity and cooperation."
            />
            <FoundingTeamCard
              index={1}
              name="Robert Kocher"
              role="Founding Member — Managing Director, GAMOMAT Distribution GmbH"
              initials="RK"
              bio="25+ years building, scaling, and commercialising digital businesses in iGaming and regulated markets. Robert joins EGG in a part-time capacity to help shape practical standards from a supplier and operator perspective."
            />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="egg-container">
          <div className="relative rounded-2xl border border-egg-blue/20 bg-gradient-to-br from-egg-blue/10 via-charcoal to-charcoal p-10 md:p-16 overflow-hidden transition-shadow duration-500 hover:shadow-[0_24px_60px_rgba(59,158,219,0.12)]">
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-egg-blue/15 blur-3xl pointer-events-none" aria-hidden />
            <div className="relative max-w-3xl">
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-off-white leading-tight">
                Represent your organisation on the platform.
              </h2>
              <p className="mt-5 text-base text-cool-gray max-w-xl leading-relaxed">
                Early stakeholders help shape workstreams, priorities, and the standards EGG will publish as it scales across Europe.
              </p>
              <div className="mt-10">
                <Link to="/get-involved" className="egg-btn-primary">
                  Submit an enquiry <ArrowRight size={16} aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
