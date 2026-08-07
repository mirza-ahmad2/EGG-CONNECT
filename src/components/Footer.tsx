import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { Logo } from "./Logo";
import { LINKEDIN_URL, SOCIAL_PLACEHOLDER } from "../lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/mission", label: "Our Mission" },
  { to: "/focus-areas", label: "Focus Areas" },
  { to: "/stakeholders", label: "Stakeholders" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 md:mt-32 border-t border-[color:var(--border)] bg-[color:var(--charcoal)]">
      <div className="egg-container py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-4 group" aria-label="European Gambling Gathering — Home">
              <Logo compact className="transition-transform duration-300 group-hover:scale-105" />
              <span className="font-display font-semibold text-off-white">European Gambling Gathering</span>
            </Link>
            <p className="text-sm text-cool-gray max-w-md leading-relaxed">
              A European platform strengthening integrity, transparency, and cooperation across the regulated gambling ecosystem.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-off-white mb-4">Navigate</h2>
            <ul className="space-y-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="inline-flex text-sm text-cool-gray hover:text-off-white transition-colors duration-200 py-1.5 hover:translate-x-0.5 transform"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-off-white mb-4">Connect</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-cool-gray hover:text-egg-blue transition-colors duration-200"
                  aria-label="European Gambling Gathering on LinkedIn"
                >
                  <Linkedin size={16} aria-hidden /> LinkedIn
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-sm text-cool-gray">
                  {SOCIAL_PLACEHOLDER}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 md:mt-16 pt-8 border-t border-[color:var(--border)] flex flex-col gap-4 text-xs text-cool-gray">
          <p className="max-w-3xl leading-relaxed">
            European Gambling Gathering is a B2B industry cooperation platform for the regulated gambling ecosystem. It does not offer gambling products or services to consumers.
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <p>© {new Date().getFullYear()} European Gambling Gathering. All rights reserved.</p>
            <p>
              This website is powered by{" "}
              <a
                href="https://theinnovations.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-egg-blue hover:text-off-white transition-colors"
              >
                The Innovations
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
