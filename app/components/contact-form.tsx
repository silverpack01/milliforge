"use client";

import { useState } from "react";
import { SERVICES } from "../lib/services";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, buildWhatsAppUrl } from "../lib/site";
import { AppIcon, CheckIcon, PhoneIcon } from "./icons";

const BUDGETS = ["Under $500", "$500 – $1,500", "$1,500 – $5,000", "$5,000+"];

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  service: SERVICES[0].title,
  budget: BUDGETS[1],
  message: "",
};

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none backdrop-blur-sm transition-colors focus:border-brand-400/60 focus:bg-white/[0.08]";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const lines = [
      `Hi MilliForge! I'd like to start a project.`,
      ``,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      `Service: ${form.service}`,
      `Budget: ${form.budget}`,
      ``,
      `Details: ${form.message}`,
    ].filter((line) => line !== null);
    window.open(buildWhatsAppUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="glass-strong flex flex-col items-center rounded-3xl p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400/40 to-accent-500/30 text-emerald-300">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h2 className="mt-5 text-2xl font-bold text-white">WhatsApp opened!</h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
          Your project brief is ready in WhatsApp — just hit send and we&apos;ll get
          back to you within 24 hours. Didn&apos;t open? Call us instead:
        </p>
        <a
          href={`tel:${CONTACT_PHONE_TEL}`}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-brand-400 to-violet-500 px-6 py-3 text-sm font-semibold text-white"
        >
          <PhoneIcon className="h-4 w-4" />
          {CONTACT_PHONE_DISPLAY}
        </a>
        <button
          type="button"
          onClick={() => {
            setForm(INITIAL);
            setSent(false);
          }}
          className="mt-4 text-sm font-medium text-brand-300 transition-colors hover:text-accent-300"
        >
          Send another brief
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-zinc-300">
            Your name *
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Ali Khan"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-zinc-300">
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="ali@example.com"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-zinc-300">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="03xx xxxxxxx"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-xs font-medium text-zinc-300">
            Service needed *
          </label>
          <select
            id="service"
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
            className={`${inputClasses} appearance-none [&>option]:bg-zinc-900`}
          >
            {SERVICES.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="budget" className="mb-1.5 block text-xs font-medium text-zinc-300">
            Estimated budget
          </label>
          <select
            id="budget"
            value={form.budget}
            onChange={(e) => update("budget", e.target.value)}
            className={`${inputClasses} appearance-none [&>option]:bg-zinc-900`}
          >
            {BUDGETS.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-zinc-300">
            Project details *
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Tell us about your project — goals, timeline, anything important…"
            className={`${inputClasses} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-brand-400 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_40px_-10px_rgba(91,124,255,0.7)] transition-transform hover:scale-[1.02]"
      >
        <AppIcon className="h-4 w-4" />
        Send via WhatsApp
      </button>
      <p className="mt-3 text-center text-xs text-zinc-500">
        Your brief opens in WhatsApp — no account or signup needed.
      </p>
    </form>
  );
}