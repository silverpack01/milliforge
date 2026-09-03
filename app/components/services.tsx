import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "./icons";
import { SERVICES } from "../lib/services";

const BENTO: Record<string, { span: string; size: "lg" | "md" | "sm" }> = {
  "web-development": { span: "lg:col-span-2 lg:row-span-2", size: "lg" },
  "app-development": { span: "", size: "sm" },
  seo: { span: "", size: "sm" },
  shopify: { span: "lg:col-span-2", size: "md" },
  "ui-ux-design": { span: "", size: "sm" },
};

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob-slow absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-brand-600/15 blur-[140px]" />
        <div className="animate-blob absolute bottom-0 -left-32 h-[420px] w-[420px] rounded-full bg-violet-500/15 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="glass inline-block rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-accent-300">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to <span className="text-gradient">forge your product</span>
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            Five core services, one obsessive team. Pick what you need — or let us
            handle the full journey from idea to launch.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-14 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const layout =
              BENTO[service.slug] ?? {
                span: "",
                size: "sm" as const,
              };
            const isLarge = layout.size === "lg";
            return (
              <article
                key={service.slug}
                className={`glass group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_-20px_rgba(91,124,255,0.35)] ${layout.span}`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full from-brand-500/30 to-violet-500/30 bg-gradient-to-br opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                />

                <div>
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.tint}`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3
                    className={`mt-4 font-semibold text-white ${
                      isLarge ? "text-2xl" : "text-lg"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`mt-2 leading-relaxed text-zinc-400 ${
                      isLarge ? "max-w-md text-base" : "text-sm"
                    }`}
                  >
                    {service.tagline}
                  </p>

                  {isLarge ? (
                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="glass rounded-2xl p-4 text-sm font-medium text-zinc-200"
                        >
                          <CheckIcon className="mb-2 h-4 w-4 text-accent-400" />
                          {point}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="mt-4 space-y-1.5">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2 text-sm text-zinc-400"
                        >
                          <CheckIcon className="h-3.5 w-3.5 shrink-0 text-accent-400" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition-colors group-hover:text-accent-300"
                >
                  View details
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            );
          })}

          {/* stats tile */}
          <div className="glass-strong from-brand-600/30 via-violet-600/20 to-transparent relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br p-6">
            <div aria-hidden className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent-500/20 blur-3xl" />
            <p className="text-sm font-medium text-zinc-300">Proven track record</p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-3xl font-bold text-white">120+</p>
                <p className="text-xs text-zinc-400">Projects shipped</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">98%</p>
                <p className="text-xs text-zinc-400">Client retention</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">5+</p>
                <p className="text-xs text-zinc-400">Years of craft</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">24h</p>
                <p className="text-xs text-zinc-400">Response time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}