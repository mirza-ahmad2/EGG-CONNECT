import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type HeroProps = {
  image: string;
  imageAlt?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  cta?: { label: string; to: string };
  /** Full viewport by default */
  fullScreen?: boolean;
  overlay?: string;
  children?: ReactNode;
};

export function Hero({
  image,
  imageAlt = "",
  eyebrow,
  title,
  subtitle,
  cta,
  fullScreen = true,
  overlay = "from-black/70 via-black/55 to-black/70",
  children,
}: HeroProps) {
  return (
    <section
      className={`relative w-full flex items-center justify-center overflow-hidden ${
        fullScreen ? "min-h-[100svh] min-h-[100dvh]" : "min-h-[70vh]"
      }`}
      aria-label={typeof title === "string" ? title : eyebrow || "Page hero"}
    >
      <img
        src={image}
        alt={imageAlt || ""}
        aria-hidden={!imageAlt}
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-[egg-kenburns_18s_ease-in-out_infinite_alternate]"
        width={1920}
        height={1080}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${overlay}`} />
      <div className="absolute inset-0 bg-[color:var(--base)]/40" />

      <div className="relative z-10 egg-container text-center pt-24 pb-24 md:pt-28 md:pb-28">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-egg-blue/30 bg-egg-blue/10 text-xs text-egg-blue tracking-wide uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-egg-blue" aria-hidden />
            {eyebrow}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-off-white leading-[1.05] max-w-5xl mx-auto text-balance"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-base md:text-lg text-cool-gray max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="mt-10"
          >
            <Link
              to={cta.to}
              className="egg-btn-primary inline-flex items-center gap-2"
            >
              {cta.label}
              <ArrowRight size={16} aria-hidden />
            </Link>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
