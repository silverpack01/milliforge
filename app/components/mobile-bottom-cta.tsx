"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppIcon, ArrowRightIcon, PhoneIcon } from "./icons";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  WHATSAPP_URL,
} from "../lib/site";

/**
 * Mobile-only sticky CTA bar at the bottom of the viewport.
 * Hidden on `sm` and up so it never duplicates the navbar.
 * Auto-hides when the user is already on the /contact page.
 */
export function MobileBottomCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reveal after a tiny scroll so it doesn't pop in on first paint
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0b0d16]/95 px-3 py-2.5 backdrop-blur-md transition-transform duration-300 sm:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-md items-center gap-2">
        <Link
          href="/contact"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-brand-400 to-violet-500 px-4 py-2.5 text-xs font-semibold text-white shadow-[0_8px_24px_-8px_rgba(91,124,255,0.7)]"
        >
          Start Project
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
        <a
          href={`tel:${CONTACT_PHONE_TEL}`}
          aria-label={`Call ${CONTACT_PHONE_DISPLAY}`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-accent-300"
        >
          <PhoneIcon className="h-4 w-4" />
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp us"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-emerald-400"
        >
          <AppIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
