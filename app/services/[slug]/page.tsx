import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "../../components/page-hero";
import { CtaBanner } from "../../components/cta-banner";
import { CheckIcon } from "../../components/icons";
import { SERVICES, getService } from "../../lib/services";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found — MilliForge" };
  return {
    title: `${service.title} — MilliForge Services`,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const others = SERVICES.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow={service.title}
        title={service.tagline}
        description={service.description}
      />

      <section className="pb-6 sm:pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-strong relative overflow-hidden rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-10">
            <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent" />
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br sm:h-14 sm:w-14 ${service.tint}`}
              >
                <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </span>
              <h2 className="text-xl font-bold text-white sm:text-3xl">
                What you get
              </h2>
            </div>

            <div className="mt-6 grid gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
              {service.deliverables.map((item) => (
                <div key={item} className="glass rounded-xl p-3.5 sm:rounded-2xl sm:p-4">
                  <CheckIcon className="mb-1.5 h-3.5 w-3.5 text-accent-400 sm:mb-2 sm:h-4 sm:w-4" />
                  <p className="text-xs font-medium text-zinc-200 sm:text-sm">{item}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-8 text-base font-semibold text-white sm:mt-10 sm:text-lg">How we deliver</h3>
            <div className="mt-3 grid gap-2.5 sm:mt-4 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <div key={step.title} className="glass rounded-xl p-4 sm:rounded-2xl sm:p-5">
                  <span className="text-gradient text-xl font-bold sm:text-2xl">
                    0{index + 1}
                  </span>
                  <p className="mt-1.5 text-xs font-semibold text-white sm:mt-2 sm:text-sm">{step.title}</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-zinc-400 sm:text-xs">{step.text}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-8 text-base font-semibold text-white sm:mt-10 sm:text-lg">
              Tools &amp; technologies
            </h3>
            <ul className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
              {service.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-zinc-300 sm:px-4 sm:py-1.5 sm:text-xs"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-brand-400 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_-10px_rgba(91,124,255,0.7)] transition-transform hover:scale-[1.04]"
              >
                Start a {service.title} project
              </Link>
              <Link
                href="/services"
                className="text-center text-sm font-medium text-zinc-400 transition-colors hover:text-white sm:text-left"
              >
                ← All services
              </Link>
            </div>
          </div>

          <div className="mt-5 grid gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
            {others.map((item) => {
              const OtherIcon = item.icon;
              return (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="glass group flex items-center gap-3 rounded-2xl p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08] sm:p-4"
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br sm:h-10 sm:w-10 ${item.tint}`}
                  >
                    <OtherIcon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                  </span>
                  <span className="text-sm font-semibold text-zinc-200 transition-colors group-hover:text-white">
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Let's build your ${service.title.toLowerCase()} project`}
        text={`Get a free consultation and a clear quote for your ${service.title.toLowerCase()} needs.`}
      />
    </>
  );
}
