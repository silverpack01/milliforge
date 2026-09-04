import Link from "next/link";
import {
  ArrowRightIcon,
  BoltIcon,
  CheckIcon,
  ChartIcon,
  LayersIcon,
  SparklesIcon,
  StarIcon,
} from "./icons";

const FEATURES = [
  { icon: SparklesIcon, title: "Modern Design", text: "Interfaces that feel premium and convert visitors." },
  { icon: BoltIcon, title: "High Performance", text: "Fast, optimized builds that score 95+ on Lighthouse." },
  { icon: LayersIcon, title: "Scalable Solutions", text: "Architecture that grows with your business." },
];

const HERO_POINTS = ["Next.js & React", "Mobile-first", "SEO ready", "24/7 support"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-12 sm:pt-44 sm:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[140px]" />
        <div className="animate-blob-slow absolute top-40 -left-24 h-96 w-96 rounded-full bg-violet-500/20 blur-[120px]" />
        <div className="animate-blob-slow absolute top-24 -right-24 h-96 w-96 rounded-full bg-accent-500/15 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:gap-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        <div className="animate-fade-up text-center lg:text-left">
          <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-brand-200 sm:px-4 sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-accent-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
            </span>
            Available for new projects
          </span>

          <h1 className="mt-5 text-[2.1rem] font-bold leading-[1.08] tracking-tight sm:mt-6 sm:text-5xl xl:text-6xl">
            We build <span className="text-gradient animate-shine">powerful digital</span> experiences
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:mt-6 sm:text-base sm:text-lg lg:mx-0">
            MilliForge crafts innovative websites, apps and Shopify stores that drive
            growth and success — from first pixel to final deploy.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 lg:justify-start">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-brand-400 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_-10px_rgba(91,124,255,0.7)] transition-transform hover:scale-[1.04]"
            >
              Get Started
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/services"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:bg-white/10 hover:text-white"
            >
              Explore Services
            </Link>
          </div>

          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-zinc-400 sm:mt-8 sm:gap-x-5 sm:text-sm lg:justify-start">
            {HERO_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-accent-400 sm:h-4 sm:w-4" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Glass dashboard mockup — compact on mobile, full on lg */}
        <div className="animate-fade-up [animation-delay:150ms]">
          <div className="glass-strong relative mx-auto max-w-md rounded-3xl p-4 sm:p-5 lg:max-w-none">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 sm:pb-4">
              <div>
                <p className="text-sm font-semibold text-white">Project Overview</p>
                <p className="text-[11px] text-zinc-500 sm:text-xs">Live delivery dashboard</p>
              </div>
              <div className="hidden items-center gap-1 text-amber-400 sm:flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5" />
                ))}
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
              <div className="glass rounded-2xl p-3 sm:p-4">
                <p className="text-[11px] text-zinc-400 sm:text-xs">Projects Delivered</p>
                <p className="mt-0.5 text-xl font-bold text-white sm:mt-1 sm:text-2xl">120+</p>
                <ChartIcon className="mt-1.5 h-4 w-4 text-accent-400 sm:mt-2 sm:h-5 sm:w-5" />
              </div>
              <div className="glass rounded-2xl p-3 sm:p-4">
                <p className="text-[11px] text-zinc-400 sm:text-xs">Happy Clients</p>
                <p className="mt-0.5 text-xl font-bold text-white sm:mt-1 sm:text-2xl">80+</p>
                <SparklesIcon className="mt-1.5 h-4 w-4 text-violet-400 sm:mt-2 sm:h-5 sm:w-5" />
              </div>
            </div>

            <div className="glass mt-2 rounded-2xl p-3 sm:mt-3 sm:p-4">
              <p className="text-[11px] text-zinc-400 sm:text-xs">Client growth</p>
              <svg viewBox="0 0 300 80" className="mt-1.5 h-16 w-full sm:mt-2 sm:h-20" aria-hidden>
                <defs>
                  <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5b7cff" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#5b7cff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 62 C30 58 40 40 65 44 S105 60 130 48 S170 18 200 26 S250 44 300 12 L300 80 L0 80 Z"
                  fill="url(#heroChartFill)"
                />
                <path
                  d="M0 62 C30 58 40 40 65 44 S105 60 130 48 S170 18 200 26 S250 44 300 12"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="mt-2 grid grid-cols-3 gap-2 text-center sm:mt-3 sm:gap-3">
              {[
                { label: "Design", tint: "text-violet-400" },
                { label: "Dev", tint: "text-brand-300" },
                { label: "SEO", tint: "text-accent-400" },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl py-2.5 sm:py-3">
                  <p className={`text-xs font-semibold sm:text-sm ${item.tint}`}>{item.label}</p>
                  <p className="text-[10px] text-zinc-500 sm:text-[11px]">In-house</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-float glass absolute -top-5 right-4 hidden rounded-full px-4 py-2 text-xs font-medium text-accent-300 sm:block lg:-right-6">
            ⚡ 95+ PageSpeed
          </div>
          <div className="animate-float glass absolute -bottom-6 left-4 hidden rounded-full px-4 py-2 text-xs font-medium text-violet-300 [animation-delay:1.5s] sm:block lg:-left-6">
            🛒 Shopify Partners
          </div>
        </div>
      </div>

      {/* feature chips row — 3 cols on mobile, same on desktop */}
      <div className="mx-auto mt-10 max-w-7xl px-4 sm:mt-20 sm:px-6 lg:px-8">
        <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="glass group flex items-start gap-3 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] sm:gap-4 sm:p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/30 to-violet-500/30 text-brand-300 transition-colors group-hover:text-accent-300 sm:h-11 sm:w-11">
                <feature.icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">{feature.title}</span>
                <span className="mt-0.5 block text-xs text-zinc-400 sm:mt-1 sm:text-sm">{feature.text}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
