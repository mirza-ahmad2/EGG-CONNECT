import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/mission", label: "Our Mission" },
  { to: "/focus-areas", label: "Focus Areas" },
  { to: "/stakeholders", label: "Stakeholders" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-[color:var(--base)]/90 backdrop-blur-md border-b border-[color:var(--border)] shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="egg-container flex items-center justify-between h-16 md:h-[4.25rem]">
        <Link
          to="/"
          className="flex items-center gap-2.5 group min-w-0"
          aria-label="European Gambling Gathering — Home"
          onClick={() => setOpen(false)}
        >
          <Logo compact className="transition-transform duration-300 group-hover:scale-105" />
          <span className="hidden sm:flex flex-col leading-tight min-w-0">
            <span className="font-display font-semibold text-off-white tracking-tight text-sm">
              EGG
            </span>
            <span className="text-[10px] text-cool-gray truncate">European Gambling Gathering</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-3 py-2 text-sm text-cool-gray hover:text-off-white transition-colors duration-200 after:absolute after:left-3 after:right-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-egg-blue after:transition-transform after:duration-300 hover:after:scale-x-100"
              activeProps={{
                className:
                  "relative px-3 py-2 text-sm text-off-white after:absolute after:left-3 after:right-3 after:bottom-1 after:h-px after:scale-x-100 after:bg-egg-blue",
              }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link to="/get-involved" className="egg-btn-primary hidden lg:inline-flex text-sm px-4 py-2">
          Get Involved
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-off-white p-2.5 rounded-md border border-transparent hover:border-[color:var(--border)] hover:bg-charcoal/60 transition-colors min-h-11 min-w-11 inline-flex items-center justify-center"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-[80vh] border-t border-[color:var(--border)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="egg-container py-4 flex flex-col gap-1 bg-[color:var(--base)]">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-sm text-cool-gray hover:text-off-white hover:bg-charcoal/50 rounded-md px-3 py-3 transition-colors min-h-11"
              activeProps={{ className: "text-off-white bg-charcoal/50 rounded-md px-3 py-3 min-h-11" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/get-involved"
            onClick={() => setOpen(false)}
            className="egg-btn-primary mt-2 justify-center"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </header>
  );
}
