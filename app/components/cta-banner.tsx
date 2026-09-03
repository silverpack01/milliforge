import Link from "next/link";
import { ArrowRightIcon, AppIcon, PhoneIcon } from "./icons";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  WHATSAPP_URL,
} from "../lib/site";

export function CtaBanner({
  title = "Ready to forge your future?",
  text = "Tell us about your idea — we reply within 24 hours.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="glass-strong relative overflow-hidden rounded-[2rem] p-8 text-center sm:p-12">
          <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent" />
          <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-violet-500/25 blur-[100px]" />

          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
            <span className="text-gradient animate-shine">{title}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-400 sm:text-base">{text}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-brand-400 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_-10px_rgba(91,124,255,0.7)] transition-transform hover:scale-[1.04] sm:w-auto"
            >
              Start a Project
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={`tel:${CONTACT_PHONE_TEL}`}
              className="glass inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <PhoneIcon className="h-4 w-4 text-accent-400" />
              {CONTACT_PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <AppIcon className="h-4 w-4 text-emerald-400" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
