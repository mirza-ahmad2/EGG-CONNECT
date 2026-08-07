import logo from "../assets/egg-logo.png";

type LogoProps = {
  className?: string;
  /** Compact mark for navbar */
  compact?: boolean;
  alt?: string;
};

export function Logo({
  className = "",
  compact = false,
  alt = "European Gambling Gathering logo",
}: LogoProps) {
  return (
    <img
      src={logo}
      alt={alt}
      width={compact ? 40 : 160}
      height={compact ? 40 : 160}
      className={`object-contain ${compact ? "h-9 w-9" : "h-auto w-full max-w-[180px]"} ${className}`}
      loading="eager"
      decoding="async"
    />
  );
}
