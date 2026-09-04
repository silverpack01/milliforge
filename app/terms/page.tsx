import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { CtaBanner } from "../components/cta-banner";

export const metadata: Metadata = {
  title: "Terms of Service — MilliForge",
  description: "The terms under which MilliForge provides its services.",
};

const SECTIONS = [
  {
    title: "1. Services",
    text: "MilliForge provides software design and development services including web development, app development, SEO, Shopify stores and UI/UX design. The exact scope, timeline and price of every project is defined in a written proposal agreed by both sides before work starts.",
  },
  {
    title: "2. Quotes & payment",
    text: "All quotes are valid for 14 days. Projects typically begin with an advance payment (commonly 50%), with the remainder due on agreed milestones or delivery. Any work outside the agreed scope is quoted separately.",
  },
  {
    title: "3. Revisions",
    text: "Each project includes the number of revision rounds stated in its proposal. Additional revisions or new feature requests after approval are billed as change requests.",
  },
  {
    title: "4. Timelines",
    text: "We commit to the timeline in the proposal, provided feedback and content are supplied on time. Delays in feedback from the client shift delivery dates accordingly.",
  },
  {
    title: "5. Ownership",
    text: "On full payment, you own the final delivered designs and code developed specifically for your project. Third-party licenses (fonts, plugins, stock assets) remain governed by their own terms.",
  },
  {
    title: "6. Support & maintenance",
    text: "Every project includes a free support window after launch (stated in the proposal). Ongoing maintenance, updates and new features are available under a separate care plan.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Last updated: January 2026. These terms apply to all projects delivered by MilliForge unless replaced by a signed agreement."
      />
      <section className="pb-8 sm:pb-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-2.5 sm:space-y-3">
            {SECTIONS.map((section) => (
              <div key={section.title} className="glass rounded-2xl p-4 sm:p-6">
                <h2 className="text-sm font-semibold text-white sm:text-base">{section.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400 sm:mt-2">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
