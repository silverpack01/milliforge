import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { CtaBanner } from "../components/cta-banner";
import { Work } from "../components/work";
import { AppIcon, ChartIcon, CodeIcon, SeoIcon, ShopifyIcon, UiuxIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "Work — MilliForge",
  description:
    "Selected projects and case studies from MilliForge — websites, apps, Shopify stores and SEO campaigns we've forged.",
};

const PROJECTS = [
  {
    icon: ShopifyIcon,
    category: "Shopify",
    title: "Fashion E-commerce Store",
    text: "Custom theme, speed optimization and CRO for a growing clothing brand.",
    result: "2.8x conversion lift",
    tint: "from-emerald-500/40 to-emerald-500/5 text-emerald-300",
  },
  {
    icon: CodeIcon,
    category: "Web App",
    title: "SaaS Analytics Dashboard",
    text: "Real-time dashboard with role-based access and custom reporting.",
    result: "40k monthly users",
    tint: "from-brand-500/40 to-brand-500/5 text-brand-300",
  },
  {
    icon: AppIcon,
    category: "Mobile App",
    title: "Fitness Tracking App",
    text: "Cross-platform app with offline mode, streaks and push notifications.",
    result: "50k+ downloads",
    tint: "from-accent-500/40 to-accent-500/5 text-accent-300",
  },
  {
    icon: SeoIcon,
    category: "SEO",
    title: "Local Services SEO Campaign",
    text: "Technical fixes plus content strategy for a services marketplace.",
    result: "3x organic traffic",
    tint: "from-violet-500/40 to-violet-500/5 text-violet-300",
  },
  {
    icon: UiuxIcon,
    category: "UI/UX",
    title: "Fintech Design System",
    text: "End-to-end research, flows and a token-based design system.",
    result: "60% faster handoff",
    tint: "from-pink-500/40 to-pink-500/5 text-pink-300",
  },
  {
    icon: ChartIcon,
    category: "Web + SEO",
    title: "B2B Marketing Website",
    text: "Next.js rebuild with structured data and Core Web Vitals pass.",
    result: "95+ PageSpeed",
    tint: "from-amber-500/40 to-amber-500/5 text-amber-300",
  },
];

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
        description="A snapshot of the products we've forged — websites, apps, stores and campaigns that moved real business numbers."
      />

      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => {
              const Icon = project.icon;
              return (
                <article
                  key={project.title}
                  className="glass group relative flex flex-col overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${project.tint}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-white">{project.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                    {project.text}
                  </p>
                  <p className="text-gradient mt-4 text-sm font-bold">{project.result}</p>
                </article>
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
