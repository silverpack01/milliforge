import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { CtaBanner } from "../components/cta-banner";
import { About } from "../components/about";
import { CheckIcon, SparklesIcon, BoltIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "About — MilliForge",
  description:
    "MilliForge is a software house crafting websites, apps, Shopify stores and SEO-driven products. Learn about our team, values and way of working.",
};

const VALUES = [
  {
    icon: SparklesIcon,
    title: "Craft over shortcuts",
    text: "No cookie-cutter templates. Every product is designed and engineered for your exact business.",
  },
  {
    icon: BoltIcon,
    title: "Speed with quality",
    text: "We move fast — weekly demos, tight feedback loops — without ever shipping sloppy code.",
  },
  {
    icon: CheckIcon,
    title: "Radical transparency",
    text: "Clear quotes, honest timelines and direct access to the people building your product.",
  },
  {
    icon: BoltIcon,
    title: "Long-term partnership",
    text: "Launch day is the starting line. We stay for maintenance, optimization and growth.",
  },
];

const TIMELINE = [
  { year: "2021", title: "MilliForge is founded", text: "Started as a two-person studio building websites for local businesses." },
  { year: "2022", title: "Full-service expansion", text: "Added SEO and UI/UX to serve clients end-to-end." },
  { year: "2023", title: "Shopify & e-commerce", text: "Became a go-to partner for online stores across the region." },
  { year: "2024", title: "120+ projects shipped", text: "Scaled to a full in-house design and engineering team." },
  { year: "Today", title: "Build your digital future", text: "Helping ambitious businesses worldwide forge products that grow." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About MilliForge"
        title={
          <>
            A small team with a <span className="text-gradient">big-engineering mindset</span>
          </>
        }
        description="MilliForge is a software house built on one belief: great software is forged, not assembled. Strategy, design and engineering — one obsessive team."
      />

      <About />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What we <span className="text-gradient">stand for</span>
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {VALUES.map((value) => (
              <div key={value.title} className="glass rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/30 to-violet-500/30 text-brand-300">
                  <value.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our <span className="text-gradient">journey</span>
            </h2>
          </div>
          <ol className="mt-10 space-y-3">
            {TIMELINE.map((item) => (
              <li key={item.year} className="glass flex items-start gap-5 rounded-2xl p-5">
                <span className="text-gradient w-16 shrink-0 pt-0.5 text-sm font-bold">
                  {item.year}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{item.title}</span>
                  <span className="mt-1 block text-sm text-zinc-400">{item.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
