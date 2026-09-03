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
    <section id="contact" className="relative py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute bottom-0 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="glass-strong relative overflow-hidden rounded-[2rem] p-8 text-center sm:p-14">
          {/* top gradient line */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/25 blur-[100px]"
          />

          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-accent-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-accent-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
            </span>
            Let&apos;s build something great
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-5xl">
            Ready to <span className="text-gradient animate-shine">forge your future?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-400">
            Tell us about your idea — a website, an app, a Shopify store or a full
            brand experience. We reply within 24 hours.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

          <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
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
                className="glass flex items-center gap-3 rounded-2xl p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/30 to-violet-500/30 text-brand-300">
                  <item.icon className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block text-xs text-zinc-400">{item.label}</span>
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
