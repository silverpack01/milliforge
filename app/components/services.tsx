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
    <section id="services" className="relative overflow-hidden py-14 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob-slow absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-brand-600/15 blur-[140px]" />
        <div className="animate-blob absolute bottom-0 -left-32 h-[420px] w-[420px] rounded-full bg-violet-500/15 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="glass inline-block rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-accent-300">
            Our Services
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl">
            Everything you need to <span className="text-gradient">forge your product</span>
          </h2>
          <p className="mt-3 text-sm text-zinc-400 sm:mt-4 sm:text-base">
            Five core services, one obsessive team. Pick what you need — or let us
            handle the full journey from idea to launch.
          </p>
        </div>

        {/* Bento grid — 2 cols on phones, 4 cols on lg */}
        <div className="mt-10 grid auto-rows-[minmax(180px,auto)] grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
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
                className={`glass group relative flex flex-col justify-between overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_-20px_rgba(91,124,255,0.35)] sm:rounded-3xl sm:p-6 ${layout.span}`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full from-brand-500/30 to-violet-500/30 bg-gradient-to-br opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                />

                <div>
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br sm:h-12 sm:w-12 sm:rounded-2xl ${service.tint}`}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <h3
                    className={`mt-3 font-semibold text-white sm:mt-4 ${
                      isLarge ? "text-lg sm:text-2xl" : "text-sm sm:text-lg"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`mt-1.5 leading-relaxed text-zinc-400 sm:mt-2 ${
                      isLarge ? "text-xs sm:max-w-md sm:text-base" : "text-xs sm:text-sm"
                    }`}
                  >
                    {service.tagline}
                  </p>

                  {isLarge ? (
                    <div className="mt-4 grid gap-2 sm:mt-5 sm:gap-3 lg:grid-cols-3">
                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="glass rounded-xl p-3 text-xs font-medium text-zinc-200 sm:rounded-2xl sm:p-4 sm:text-sm"
                        >
                          <CheckIcon className="mb-1.5 h-3.5 w-3.5 text-accent-400 sm:mb-2 sm:h-4 sm:w-4" />
                          {point}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="mt-3 hidden space-y-1.5 sm:block">
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
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-300 transition-colors group-hover:text-accent-300 sm:mt-6 sm:text-sm"
                >
                  View details
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
                </Link>
              </article>
            );
          })}

          {/* stats tile — hidden on small mobile to keep bento tidy */}
          <div className="glass-strong from-brand-600/30 via-violet-600/20 to-transparent relative col-span-2 hidden flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br p-5 sm:col-span-2 sm:flex sm:rounded-3xl sm:p-6 lg:col-span-1">
            <div aria-hidden className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent-500/20 blur-3xl" />
            <p className="text-sm font-medium text-zinc-300">Proven track record</p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">120+</p>
                <p className="text-[11px] text-zinc-400 sm:text-xs">Projects shipped</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">98%</p>
                <p className="text-[11px] text-zinc-400 sm:text-xs">Client retention</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">3+</p>
                <p className="text-[11px] text-zinc-400 sm:text-xs">Years of craft</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">24h</p>
                <p className="text-[11px] text-zinc-400 sm:text-xs">Response time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}