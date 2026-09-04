import { GlobeIcon, SparklesIcon, BoltIcon, CheckIcon } from "./icons";

const PILLARS = [
  {
    icon: SparklesIcon,
    title: "Design-first mindset",
    text: "Every project starts with research and wireframes — we design the experience before writing a single line of production code.",
    points: ["User research", "Wireframes & prototypes", "Design systems"],
  },
  {
    icon: BoltIcon,
    title: "Performance obsessed",
    text: "We ship lean, optimized builds. Fast sites rank better, convert better, and keep your customers happy.",
    points: ["Core Web Vitals", "Image & code optimization", "Edge-ready deploys"],
  },
  {
    icon: GlobeIcon,
    title: "Full-stack capability",
    text: "From pixel-perfect frontends to robust backends and third-party integrations — one team, end to end.",
    points: ["Frontend & backend", "CMS & e-commerce", "API integrations"],
  },
];

export function About() {
  return (
    <section id="about" className="relative py-14 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="glass inline-block rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-brand-200">
              Why MilliForge
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl">
              A small team with a{" "}
              <span className="text-gradient">big-engineering mindset</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:mt-5 sm:text-base">
              MilliForge is a software house built on one belief: great software is
              forged, not assembled. We combine strategy, design and engineering to
              build digital products that ambitious businesses can rely on — today
              and at scale.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-3">
              {[
                { value: "120+", label: "Projects" },
                { value: "80+", label: "Clients" },
                { value: "5★", label: "Rated" },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-2xl p-3 text-center sm:p-4">
                  <p className="text-xl font-bold text-white sm:text-3xl">{stat.value}</p>
                  <p className="mt-0.5 text-[11px] text-zinc-400 sm:mt-1 sm:text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:gap-4">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="glass group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] sm:rounded-3xl sm:p-6"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/30 to-violet-500/30 text-brand-300 sm:h-11 sm:w-11">
                    <pillar.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white sm:text-lg">{pillar.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400 sm:mt-2">
                      {pillar.text}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-1.5 sm:mt-3 sm:gap-2">
                      {pillar.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-300 sm:px-3 sm:text-xs"
                        >
                          <CheckIcon className="h-3 w-3 text-accent-400" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}