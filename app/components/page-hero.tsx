import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden pt-28 pb-10 sm:pt-44 sm:pb-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[140px]" />
        <div className="animate-blob-slow absolute top-20 -right-24 h-80 w-80 rounded-full bg-violet-500/20 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-up mx-auto max-w-3xl text-center">
          <span className="glass inline-block rounded-full px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-accent-300 sm:px-4 sm:text-xs">
            {eyebrow}
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:mt-5 sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:mt-5 sm:text-base sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
