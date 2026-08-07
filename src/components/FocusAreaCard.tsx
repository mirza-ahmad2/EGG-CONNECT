import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

export function FocusAreaCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <Reveal delay={(index ?? 0) * 0.05}>
      <article className="group relative h-full rounded-xl border border-[color:var(--border)] bg-charcoal p-8 transition-all duration-300 hover:border-egg-blue/40 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(59,158,219,0.12)]">
        <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-md border border-egg-blue/30 bg-egg-blue/10 text-egg-blue transition-colors duration-300 group-hover:bg-egg-blue/20">
          <Icon size={20} aria-hidden />
        </div>
        {typeof index === "number" && (
          <div className="absolute top-6 right-6 text-xs font-mono text-cool-gray/60">
            {String(index + 1).padStart(2, "0")}
          </div>
        )}
        <h3 className="font-display text-xl font-semibold text-off-white leading-snug mb-3">{title}</h3>
        <p className="text-sm text-cool-gray leading-relaxed">{description}</p>
      </article>
    </Reveal>
  );
}
