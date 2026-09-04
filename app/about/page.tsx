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
  { year: "2023", title: "MilliForge is founded", text: "Started as a focused software house building websites and digital products for ambitious teams." },
  { year: "2024", title: "Android & mobile expansion", text: "Added native Android development alongside web — one team, every screen." },
  { year: "2025", title: "Shopify & strategic partnerships", text: "Partnered with software houses like WebCodexi, delivering end-to-end products for their clients." },
  { year: "2026", title: "120+ projects shipped", text: "Scaled to a full in-house design and engineering team serving clients worldwide." },
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

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
              What we <span className="text-gradient">stand for</span>
            </h2>
          </div>
          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
            {VALUES.map((value) => (
              <div key={value.title} className="glass rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] sm:rounded-3xl sm:p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/30 to-violet-500/30 text-brand-300 sm:h-11 sm:w-11">
                  <value.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-base font-semibold text-white sm:mt-4 sm:text-lg">{value.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400 sm:mt-2">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8 sm:pb-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
              Our <span className="text-gradient">journey</span>
            </h2>
          </div>
          <ol className="mt-8 space-y-2.5 sm:mt-10 sm:space-y-3">
            {TIMELINE.map((item) => (
              <li key={item.year} className="glass flex items-start gap-3 rounded-2xl p-4 sm:gap-5 sm:p-5">
                <span className="text-gradient w-14 shrink-0 pt-0.5 text-sm font-bold sm:w-16">
                  {item.year}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{item.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-zinc-400">{item.text}</span>
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
