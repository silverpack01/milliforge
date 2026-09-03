"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "pt-3" : "pt-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={`glass flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
            scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : ""
          }`}
          aria-label="Primary"
        >
          <Link href="/" className="group flex items-center gap-2">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-white/10 text-white"
                      : "text-zinc-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden rounded-full bg-gradient-to-r from-cyan-400 via-brand-400 to-violet-500 px-5 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(91,124,255,0.6)] transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              Start Project
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((s) => !s)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="relative h-4 w-5">
                <span
                  className={`absolute left-0 block h-0.5 w-5 bg-white transition-transform duration-300 ${
                    mobileOpen ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-white transition-opacity duration-300 ${
                    mobileOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-5 bg-white transition-transform duration-300 ${
                    mobileOpen ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>

        {mobileOpen ? (
          <div className="glass-strong mt-2 rounded-2xl p-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-white/10 text-white"
                        : "text-zinc-200 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl bg-gradient-to-r from-cyan-400 via-brand-400 to-violet-500 px-4 py-3 text-center text-base font-semibold text-white"
                >
                  Start Project
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
}