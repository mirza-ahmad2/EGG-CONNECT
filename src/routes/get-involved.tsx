import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/Hero";
import { Reveal } from "../components/Reveal";
import { GetInvolvedForm } from "../components/GetInvolvedForm";
import heroImg from "../assets/hero-involved.jpg";
import { Clock, Users, Compass } from "lucide-react";
import { pageMeta } from "../lib/site";

export const Route = createFileRoute("/get-involved")({
  head: () =>
    pageMeta({
      title: "Get Involved — European Gambling Gathering",
      description:
        "Join the platform. Preparations are underway — early stakeholders help shape EGG's direction across regulated European markets.",
      path: "/get-involved",
    }),
  component: GetInvolvedPage,
});

function GetInvolvedPage() {
  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="Stakeholders joining the European Gambling Gathering platform"
        eyebrow="Get Involved"
        title={<>Join the Platform.</>}
        subtitle="Preparations are underway — early stakeholders help shape the platform's direction."
        fullScreen
        overlay="from-black/75 via-black/60 to-black/85"
      />

      <section className="py-24 md:py-32">
        <div className="egg-container grid gap-16 lg:grid-cols-[1fr_1.2fr] items-start">
          <div className="space-y-10">
            <Reveal>
              <p className="text-xs uppercase tracking-widest text-egg-blue mb-3">What happens next</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-off-white leading-tight">
                A direct, considered conversation — not a mailing list.
              </h2>
            </Reveal>

            <div className="space-y-6">
              {[
                {
                  icon: Clock,
                  title: "We review your enquiry",
                  body: "Every submission is read by the EGG team to understand your role and how you might contribute.",
                },
                {
                  icon: Users,
                  title: "We match you to a workstream",
                  body: "Early stakeholders are matched to the focus areas most relevant to their expertise.",
                },
                {
                  icon: Compass,
                  title: "You help shape direction",
                  body: "Before EGG scales publicly, its priorities and standards are shaped by the people first involved.",
                },
              ].map((s, i) => (
                <Reveal key={s.title} delay={0.05 + i * 0.06}>
                  <div className="flex gap-4 group">
                    <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-md border border-[color:var(--border)] text-egg-blue transition-colors duration-300 group-hover:border-egg-blue/40 group-hover:bg-egg-blue/10">
                      <s.icon size={18} aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-off-white">{s.title}</h3>
                      <p className="text-sm text-cool-gray leading-relaxed mt-1">{s.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <GetInvolvedForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
