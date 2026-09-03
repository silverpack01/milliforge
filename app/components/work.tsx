const STEPS = [
  {
    number: "01",
    title: "Discover",
    text: "We dig into your goals, audience and competitors to define a sharp product strategy.",
    tags: ["Kickoff workshop", "Requirements", "Roadmap"],
  },
  {
    number: "02",
    title: "Design",
    text: "Wireframes evolve into polished, on-brand UI — reviewed with you at every step.",
    tags: ["UI/UX", "Prototypes", "Brand system"],
  },
  {
    number: "03",
    title: "Develop",
    text: "Clean, scalable code with regular demos. You watch your product come alive.",
    tags: ["Agile sprints", "QA testing", "Staging previews"],
  },
  {
    number: "04",
    title: "Deploy & Grow",
    text: "We launch, monitor and keep optimizing — SEO, performance and new features.",
    tags: ["Launch", "Analytics", "Ongoing support"],
  },
];

export function Work() {
  return (
    <section id="work" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob-slow absolute top-1/4 -left-40 h-[420px] w-[420px] rounded-full bg-brand-600/15 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="glass inline-block rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-violet-300">
            How We Work
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            From idea to launch in <span className="text-gradient">4 clear steps</span>
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            A transparent process with zero surprises — you always know what is
            happening and what comes next.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="glass group relative flex flex-col overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <span
                aria-hidden
                className="text-gradient pointer-events-none absolute -top-3 right-4 text-6xl font-bold opacity-20 transition-opacity duration-300 group-hover:opacity-50"
              >
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                {step.text}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {step.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}