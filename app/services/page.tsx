import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/page-hero";
import { CtaBanner } from "../components/cta-banner";
import { CheckIcon, ArrowRightIcon } from "../components/icons";
import { SERVICES } from "../lib/services";

export const metadata: Metadata = {
  title: "Services — MilliForge",
  description:
    "Web development, app development, SEO, Shopify stores and UI/UX design — everything MilliForge offers to forge your digital product.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Everything you need to <span className="text-gradient">forge your product</span>
          </>
        }
        description="Five core services, one obsessive team. Explore what we offer — then let's build it together."
      />

      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.slug}
                  className={`glass group relative flex flex-col overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] ${
                    index === 0 ? "md:col-span-2 xl:col-span-2" : ""
                  }`}
                >
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.tint}`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-4 text-xl font-semibold text-white">{service.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {service.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                      >
                        <CheckIcon className="h-3 w-3 text-accent-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-1 items-end gap-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition-colors group-hover:text-accent-300"
                    >
                      View details
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="/contact"
                      className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-200 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      Start a project
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
