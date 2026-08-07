import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/Hero";
import { Reveal } from "../components/Reveal";
import { Linkedin, Mail, MapPin } from "lucide-react";
import heroImg from "../assets/hero-contact.jpg";
import { CONTACT_EMAIL_DISPLAY, LINKEDIN_URL, pageMeta } from "../lib/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageMeta({
      title: "Contact — European Gambling Gathering",
      description:
        "Get in touch with the European Gambling Gathering team. LinkedIn and general enquiry channels for the platform.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="Contact the European Gambling Gathering team"
        eyebrow="Contact"
        title={<>Get in Touch.</>}
        subtitle="For stakeholder enquiries, media, or partnerships — reach out directly. We reply personally to every message."
        fullScreen
      />

      <section className="py-24 md:py-32">
        <div className="egg-container grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Mail,
              label: "Email",
              value: CONTACT_EMAIL_DISPLAY,
              href: null as string | null,
              helper: "General enquiries and partnerships",
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              value: "European Gambling Gathering",
              href: LINKEDIN_URL,
              helper: "Follow updates and announcements",
            },
            {
              icon: MapPin,
              label: "Based in",
              value: "Europe",
              href: null as string | null,
              helper: "Operating across regulated European markets",
            },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-[color:var(--border)] bg-charcoal p-8 transition-all duration-300 hover:border-egg-blue/40 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(59,158,219,0.1)]">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md border border-egg-blue/30 bg-egg-blue/10 text-egg-blue">
                  <c.icon size={20} aria-hidden />
                </div>
                <p className="text-xs uppercase tracking-widest text-cool-gray">{c.label}</p>
                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block font-display text-lg text-off-white hover:text-egg-blue transition-colors break-words"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="mt-2 font-display text-lg text-off-white">{c.value}</p>
                )}
                <p className="mt-3 text-sm text-cool-gray">{c.helper}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-[color:var(--border)] bg-charcoal/40 py-20">
        <div className="egg-container text-center">
          <p className="text-sm text-cool-gray max-w-2xl mx-auto">
            European Gambling Gathering is a B2B industry cooperation platform. It does not provide gambling products or services to consumers.
          </p>
        </div>
      </section>
    </>
  );
}
