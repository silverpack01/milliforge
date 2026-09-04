import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/page-hero";
import { CtaBanner } from "../components/cta-banner";
import { Work } from "../components/work";
import { PROJECTS } from "../lib/projects";

export const metadata: Metadata = {
  title: "Work — MilliForge",
  description:
    "Selected projects and case studies from MilliForge — websites, apps, platforms and automations we've forged.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={
          <>
            Work we&apos;re <span className="text-gradient">proud of</span>
          </>
        }
        description="A snapshot of the products we've forged — websites, platforms, stores and automations that moved real business numbers."
      />

      <section className="pb-6 sm:pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {PROJECTS.map((project) => {
              const Icon = project.icon;
              return (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="glass group relative flex flex-col overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] sm:rounded-3xl sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br sm:h-11 sm:w-11 ${project.tint}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-300 sm:px-3 sm:text-xs">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="mt-3 text-base font-semibold text-white sm:mt-4 sm:text-lg">
                    {project.title}
                  </h2>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-zinc-400 sm:mt-2 sm:text-sm">
                    {project.short}
                  </p>
                  <p className="text-gradient mt-3 text-xs font-bold sm:mt-4 sm:text-sm">
                    {project.result}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Work />

      <CtaBanner
        title="Want results like these?"
        text="Tell us your goals — we'll show you exactly how we'd hit them."
      />
    </>
  );
}
