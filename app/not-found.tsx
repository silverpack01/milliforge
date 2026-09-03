import Link from "next/link";
import { ArrowRightIcon } from "./components/icons";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-4 pt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[140px]" />
      </div>
      <div className="glass-strong animate-fade-up max-w-lg rounded-[2rem] p-10 text-center">
        <p className="text-gradient text-7xl font-bold">404</p>
        <h1 className="mt-4 text-2xl font-bold text-white">Page not found</h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          This page doesn&apos;t exist — but your next project does. Let&apos;s get
          you back on track.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-brand-400 to-violet-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.04]"
          >
            Back to Home
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/contact"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:bg-white/10 hover:text-white"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
}
