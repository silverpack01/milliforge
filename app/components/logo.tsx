export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span className="relative inline-flex h-8 w-8 items-center justify-center">
        <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400 via-brand-500 to-violet-500 opacity-90" />
        <span className="absolute inset-[2px] rounded-md bg-background" />
        <span className="relative font-mono text-sm font-bold text-gradient">M</span>
      </span>
      <span className="text-lg font-semibold tracking-tight">
        <span className="text-white">Milli</span>
        <span className="text-gradient">Forge</span>
      </span>
    </span>
  );
}