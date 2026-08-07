import { Reveal } from "./Reveal";

export function FoundingTeamCard({
  name,
  role,
  bio,
  initials,
  index,
}: {
  name: string;
  role: string;
  bio: string;
  initials: string;
  index?: number;
}) {
  return (
    <Reveal delay={(index ?? 0) * 0.08}>
      <article className="rounded-xl border border-[color:var(--border)] bg-charcoal p-8 transition-all duration-300 hover:border-egg-blue/35 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(59,158,219,0.1)]">
        <div className="flex items-start gap-5">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-egg-blue to-egg-blue-dim font-display text-lg font-semibold text-off-white"
            aria-hidden
          >
            {initials}
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-xl font-semibold text-off-white">{name}</h3>
            <p className="text-sm text-egg-blue mt-1">{role}</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-cool-gray leading-relaxed">{bio}</p>
      </article>
    </Reveal>
  );
}
