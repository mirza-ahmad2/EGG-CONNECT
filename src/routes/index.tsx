import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroHome from "../assets/hero-home.jpg";
import { NetworkCanvas } from "../components/NetworkCanvas";
import { Reveal } from "../components/Reveal";
import { FocusAreaCard } from "../components/FocusAreaCard";
import { focusAreas } from "../lib/egg-data";
import { pageMeta } from "../lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: "European Gambling Gathering — Integrity, Transparency, Cooperation",
      description:
        "EGG is a European platform where operators, suppliers, regulators, researchers, and compliance experts cooperate on integrity, transparency, and market intelligence.",
      path: "/",
    }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroHome />
      <StatStrip />
      <FocusPreview />
      <WhyEGG />
      <ClosingCTA />
    </>
  );
}

function HeroHome() {
  return (
    <section
      className="relative w-full min-h-[100svh] min-h-[100dvh] flex flex-col overflow-hidden"
      aria-label="European Gambling Gathering home hero"
    >
      <img
        src={heroHome}
        alt="Abstract European city skyline representing regulated gambling markets"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        width={1920}
        height={1080}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--base)]/70 via-[color:var(--base)]/40 to-[color:var(--base)]" />
      <NetworkCanvas className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Content stays above the scroll cue; buttons never collide with it */}
      <div className="relative z-20 flex flex-1 flex-col items-center justify-center egg-container text-center px-0 pt-20 pb-28 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-3 py-1.5 rounded-full border border-egg-blue/30 bg-egg-blue/10 text-xs text-egg-blue tracking-wide uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-egg-blue animate-pulse" aria-hidden />
          European industry cooperation platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-semibold text-off-white leading-[1.05] tracking-tight max-w-6xl mx-auto text-balance"
        >
          The Challenges Are European.
          <br />
          <span className="text-egg-blue">The Response Should Be Too.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mt-6 sm:mt-8 text-base md:text-lg text-cool-gray max-w-2xl mx-auto leading-relaxed"
        >
          A platform strengthening integrity, transparency, and cooperation across the regulated European gambling ecosystem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="relative z-30 mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link to="/get-involved" className="egg-btn-primary">
            Get Involved <ArrowRight size={16} aria-hidden />
          </Link>
          <Link to="/mission" className="egg-btn-ghost">
            Read our mission
          </Link>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute bottom-5 sm:bottom-8 left-1/2 z-10 -translate-x-1/2 hidden min-[480px]:flex text-[10px] sm:text-xs text-cool-gray tracking-wide flex-col items-center gap-2"
        aria-hidden
      >
        <span className="uppercase">Scroll</span>
        <span className="h-8 w-px bg-cool-gray/40 origin-top animate-[egg-scroll-pulse_1.8s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}

function StatStrip() {
  return (
    <section className="border-y border-[color:var(--border)] bg-charcoal/50 py-16 md:py-20">
      <div className="egg-container">
        <div className="grid gap-10 md:grid-cols-3 items-start">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-egg-blue">A shift in scale</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-off-white leading-tight">
              From National Initiative to European Platform.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-2">
            <p className="text-base text-cool-gray leading-relaxed max-w-2xl">
              EGG began as a national cooperation initiative. It is evolving into a broader European platform — bringing operators, suppliers, regulators, researchers, and compliance experts into a shared working space where practical standards, evidence, and coordinated action can take shape.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FocusPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="egg-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-egg-blue mb-3">Focus Areas</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-off-white leading-tight max-w-2xl">
              Practical priorities for a fragmented market.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/focus-areas"
              className="inline-flex items-center gap-2 text-sm text-egg-blue hover:text-off-white transition-colors"
            >
              View all focus areas <ArrowUpRight size={16} aria-hidden />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((f, i) => (
            <FocusAreaCard key={f.title} icon={f.icon} title={f.title} description={f.description} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyEGG() {
  return (
    <section className="py-24 md:py-32 border-t border-[color:var(--border)] bg-charcoal/40">
      <div className="egg-container grid gap-12 md:grid-cols-[1fr_1.4fr] items-start">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-egg-blue mb-3">Why EGG</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-off-white leading-tight">
            Not another association.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="space-y-6">
          <p className="text-lg text-off-white/90 leading-relaxed">
            "This is not about creating another association. It is about building a platform where evidence leads to action, where industry stakeholders collaborate on practical standards, and where market integrity becomes a shared responsibility."
          </p>
          <p className="text-base text-cool-gray leading-relaxed">
            EGG is designed to complement — not duplicate — existing regulators, trade bodies, and research institutions. Its value is coordination: making expertise, data, and accountability travel across borders where markets and their challenges already do.
          </p>
          <Link
            to="/mission"
            className="inline-flex items-center gap-2 text-sm text-egg-blue hover:text-off-white transition-colors"
          >
            Explore the mission <ArrowRight size={16} aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="egg-container py-24 md:py-32">
        <div className="relative rounded-2xl overflow-hidden border border-egg-blue/20 bg-gradient-to-br from-egg-blue/15 via-charcoal to-charcoal p-10 md:p-16 transition-shadow duration-500 hover:shadow-[0_24px_60px_rgba(59,158,219,0.12)]">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-egg-blue/20 blur-3xl pointer-events-none" aria-hidden />
          <div className="relative max-w-3xl">
            <h2 className="font-display text-4xl md:text-6xl font-semibold text-off-white leading-tight">
              Help shape a European response.
            </h2>
            <p className="mt-6 text-base md:text-lg text-cool-gray max-w-xl leading-relaxed">
              Preparations are underway. Early stakeholders — operators, regulators, suppliers, researchers — help define the platform's priorities and standards.
            </p>
            <div className="mt-10">
              <Link to="/get-involved" className="egg-btn-primary">
                Get Involved <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
