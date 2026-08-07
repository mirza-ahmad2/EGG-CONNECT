import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

export function StakeholderCategoryCard({
  icon: Icon,
  label,
  index,
}: {
  icon: LucideIcon;
  label: string;
  index?: number;
}) {
  return (
    <Reveal delay={(index ?? 0) * 0.04}>
      <article className="group relative flex flex-col items-start gap-4 h-full rounded-xl border border-[color:var(--border)] bg-charcoal/60 p-6 transition-all duration-300 hover:border-egg-blue/40 hover:bg-charcoal hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(59,158,219,0.1)]">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[color:var(--border)] text-egg-blue transition-colors duration-300 group-hover:border-egg-blue/40 group-hover:bg-egg-blue/10">
          <Icon size={18} aria-hidden />
        </div>
        <h3 className="font-display text-base font-medium text-off-white">{label}</h3>
        <div className="mt-auto h-px w-8 bg-egg-blue/40 transition-all duration-300 group-hover:w-16" aria-hidden />
      </article>
    </Reveal>
  );
}
