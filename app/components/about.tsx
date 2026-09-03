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
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="glass inline-block rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-brand-200">
              Why MilliForge
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              A small team with a{" "}
              <span className="text-gradient">big-engineering mindset</span>
            </h2>
            <p className="mt-5 leading-relaxed text-zinc-400">
              MilliForge is a software house built on one belief: great software is
              forged, not assembled. We combine strategy, design and engineering to
              build digital products that ambitious businesses can rely on — today
              and at scale.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { value: "120+", label: "Projects" },
                { value: "80+", label: "Clients" },
                { value: "5★", label: "Rated" },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="glass group rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/30 to-violet-500/30 text-brand-300">
                    <pillar.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {pillar.text}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {pillar.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
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