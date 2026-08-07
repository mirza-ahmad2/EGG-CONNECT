import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

export type FocusItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export function FocusCarousel({ items }: { items: FocusItem[] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(items.length - 1, i));
    const card = el.children[clamped] as HTMLElement | undefined;
    if (card) {
      el.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" });
      setActive(clamped);
    }
  };

  return (
    <div>
      <div
        ref={scrollerRef}
        className="flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 scroll-smooth"
        style={{ scrollbarWidth: "none" }}
        onScroll={(e) => {
          const el = e.currentTarget;
          const card = el.children[0] as HTMLElement | undefined;
          if (!card) return;
          const step = card.offsetWidth + 24;
          const idx = Math.round(el.scrollLeft / step);
          setActive(Math.max(0, Math.min(items.length - 1, idx)));
        }}
        role="region"
        aria-label="Focus areas carousel"
      >
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="snap-start shrink-0 w-[calc(100%-1rem)] sm:w-[calc(50%-12px)] rounded-xl border border-[color:var(--border)] bg-charcoal overflow-hidden group transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(59,158,219,0.12)] hover:border-egg-blue/35"
            >
              {it.image && (
                <div className="relative h-40 sm:h-44 overflow-hidden">
                  <img
                    src={it.image}
                    alt={it.imageAlt || it.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                </div>
              )}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4 text-xs text-cool-gray">
                  <span className="font-mono">
                    {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-[color:var(--border)]" aria-hidden />
                </div>
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md border border-egg-blue/30 bg-egg-blue/10 text-egg-blue transition-colors duration-300 group-hover:bg-egg-blue/20">
                  <Icon size={20} aria-hidden />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-off-white leading-snug mb-3">
                  {it.title}
                </h3>
                <p className="text-sm text-cool-gray leading-relaxed">{it.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="flex items-center justify-between mt-6 gap-4">
        <div className="flex gap-2" role="tablist" aria-label="Carousel slides">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={active === i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === i ? "w-8 bg-egg-blue" : "w-3 bg-cool-gray/30 hover:bg-cool-gray/50"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollTo(active - 1)}
            aria-label="Previous slide"
            disabled={active === 0}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[color:var(--border)] text-off-white hover:border-egg-blue/40 hover:text-egg-blue transition-colors disabled:opacity-40 disabled:pointer-events-none"
          >
            <ChevronLeft size={16} aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => scrollTo(active + 1)}
            aria-label="Next slide"
            disabled={active >= items.length - 1}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[color:var(--border)] text-off-white hover:border-egg-blue/40 hover:text-egg-blue transition-colors disabled:opacity-40 disabled:pointer-events-none"
          >
            <ChevronRight size={16} aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
