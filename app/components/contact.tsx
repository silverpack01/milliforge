import Link from "next/link";
import {
  AppIcon,
  ArrowRightIcon,
  MailIcon,
  PhoneIcon,
} from "./icons";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  WHATSAPP_URL,
} from "../lib/site";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-14 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute bottom-0 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="glass-strong relative overflow-hidden rounded-[1.5rem] p-6 text-center sm:rounded-[2rem] sm:p-14">
          {/* top gradient line */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/25 blur-[100px]"
          />

          <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-accent-300 sm:px-4 sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-accent-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
            </span>
            Let&apos;s build something great
          </span>

          <h2 className="mt-5 text-2xl font-bold tracking-tight sm:mt-6 sm:text-5xl">
            Ready to <span className="text-gradient animate-shine">forge your future?</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-400 sm:mt-4 sm:text-base">
            Tell us about your idea — a website, an app, a Shopify store or a full
            brand experience. We reply within 24 hours.
          </p>

          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-9 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-brand-400 to-violet-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_40px_-10px_rgba(91,124,255,0.7)] transition-transform hover:scale-[1.04] sm:w-auto"
            >
              Start a Project
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex w-full items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold text-zinc-200 transition-colors hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <AppIcon className="h-4 w-4 text-emerald-400" />
              WhatsApp Us
            </a>
          </div>

          <div className="mx-auto mt-8 grid max-w-2xl gap-2.5 sm:mt-10 sm:grid-cols-3 sm:gap-3">
            {[
              { icon: PhoneIcon, label: "Call us", value: CONTACT_PHONE_DISPLAY, href: `tel:${CONTACT_PHONE_TEL}` },
              { icon: AppIcon, label: "WhatsApp", value: "Instant chat", href: WHATSAPP_URL },
              { icon: MailIcon, label: "Brief us", value: "Free consultation", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass flex items-center gap-3 rounded-2xl p-3.5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08] sm:p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/30 to-violet-500/30 text-brand-300 sm:h-10 sm:w-10">
                  <item.icon className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block text-[11px] text-zinc-400 sm:text-xs">{item.label}</span>
                  <span className="block text-sm font-semibold text-white">{item.value}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
