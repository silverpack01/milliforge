import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { ContactForm } from "../components/contact-form";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  WHATSAPP_URL,
} from "../lib/site";
import { AppIcon, MailIcon, PhoneIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "Start a Project — MilliForge",
  description:
    "Start your project with MilliForge. Tell us about your idea and get a free consultation and quote within 24 hours. Call 0311 3717007 or send a WhatsApp brief.",
};

const INFO = [
  {
    icon: PhoneIcon,
    label: "Call us directly",
    value: CONTACT_PHONE_DISPLAY,
    href: `tel:${CONTACT_PHONE_TEL}`,
    external: false,
  },
  {
    icon: AppIcon,
    label: "WhatsApp",
    value: "Instant chat",
    href: WHATSAPP_URL,
    external: true,
  },
  {
    icon: MailIcon,
    label: "Working hours",
    value: "Mon – Sat, 10am – 8pm",
    href: null,
    external: false,
  },
];

const STEPS = [
  "Send your brief — takes 2 minutes",
  "We reply within 24 hours with questions or a call",
  "You get a clear quote and timeline",
  "We start forging",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Start a Project"
        title={
          <>
            Let&apos;s build <span className="text-gradient">something great</span>
          </>
        }
        description="Tell us about your idea — a website, an app, a Shopify store or a full brand experience. Fill the form and it lands directly in our WhatsApp."
      />

      <section className="pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <ContactForm />

          <div className="flex flex-col gap-4">
            {INFO.map((item) => {
              const content = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/30 to-violet-500/30 text-brand-300">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-zinc-400">{item.label}</span>
                    <span className="block text-sm font-semibold text-white">
                      {item.value}
                    </span>
                  </span>
                </>
              );
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="glass flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={item.label}
                  className="glass flex items-center gap-4 rounded-2xl p-5"
                >
                  {content}
                </div>
              );
            })}

            <div className="glass rounded-2xl p-6">
              <h2 className="text-sm font-semibold text-white">What happens next?</h2>
              <ol className="mt-4 space-y-3">
                {STEPS.map((step, index) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-zinc-400">
                    <span className="text-gradient font-bold">{index + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
