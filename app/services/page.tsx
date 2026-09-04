import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/page-hero";
import { CtaBanner } from "../components/cta-banner";
import { CheckIcon, ArrowRightIcon } from "../components/icons";
import { SERVICES } from "../lib/services";

export const metadata: Metadata = {
  title: "Services — MilliForge",
  description:
    "Web development, app development, Android, SEO, Shopify stores and UI/UX design — everything MilliForge offers to forge your digital product.",
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
        description="Six core services, one obsessive team. Explore what we offer — then let's build it together."
      />

      <section className="pb-6 sm:pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              const featured = index === 0;
              return (
                <article
                  key={service.slug}
                  className={`glass group relative flex flex-col overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] sm:rounded-3xl sm:p-7 ${
                    featured ? "sm:col-span-2 xl:col-span-2" : ""
                  }`}
                >
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br sm:h-12 sm:w-12 sm:rounded-2xl ${service.tint}`}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <h2 className="mt-3 text-base font-semibold text-white sm:mt-4 sm:text-xl">
                    {service.title}
                  </h2>
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-400 sm:mt-2 sm:text-sm">
                    {service.description}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-300 sm:px-3 sm:text-xs"
                      >
                        <CheckIcon className="h-3 w-3 text-accent-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-1 flex-col items-stretch gap-2 sm:mt-6 sm:flex-row sm:items-center sm:gap-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-brand-300 transition-colors group-hover:text-accent-300 sm:text-sm"
                    >
                      View details
                      <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-200 transition-colors hover:bg-white/10 hover:text-white"
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
