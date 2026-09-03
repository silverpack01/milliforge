import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { CtaBanner } from "../components/cta-banner";

export const metadata: Metadata = {
  title: "Privacy Policy — MilliForge",
  description: "How MilliForge collects, uses and protects your information.",
};

const SECTIONS = [
  {
    title: "1. What we collect",
    text: "When you contact us through our form, WhatsApp, email or phone, we collect the details you share: your name, email, phone number, and project information. We do not collect or store anything you don't voluntarily send us.",
  },
  {
    title: "2. How we use it",
    text: "Your information is used only to respond to your inquiry, prepare quotes, and deliver services you request. We never sell, rent or trade your personal information to third parties.",
  },
  {
    title: "3. Communication",
    text: "When you message us on WhatsApp or call us, the conversation is handled by our team for project discussion purposes. You can ask us to delete your data at any time by contacting us.",
  },
  {
    title: "4. Cookies & analytics",
    text: "Our website uses minimal, privacy-friendly analytics to understand traffic. Any cookies used are functional and never track you across other websites.",
  },
  {
    title: "5. Data security",
    text: "We apply industry-standard practices to protect the information you share with us. Project files and communication are only accessible to team members working on your project.",
  },
  {
    title: "6. Your rights",
    text: "You can request a copy, correction or deletion of your personal data at any time. Contact us and we will respond within 7 working days.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: January 2026. This policy explains what data MilliForge collects and how we handle it — in plain language."
      />
      <section className="pb-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {SECTIONS.map((section) => (
              <div key={section.title} className="glass rounded-2xl p-6">
                <h2 className="text-base font-semibold text-white">{section.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
