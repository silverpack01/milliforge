import type { ComponentType, SVGProps } from "react";
import {
  AppIcon,
  GlobeIcon,
  LayersIcon,
  SparklesIcon,
} from "../components/icons";

export type Project = {
  slug: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  category: string;
  title: string;
  tagline: string;
  short: string;
  result: string;
  description: string;
  deliverables: string[];
  process: { title: string; text: string }[];
  stack: string[];
  tint: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "scrap-metal",
    icon: LayersIcon,
    category: "Web Platform",
    title: "Scrap Metal Marketplace",
    tagline: "A digital marketplace that turns scrap into opportunity.",
    short:
      "Buy, sell and trade scrap metal with real-time pricing and verified buyers.",
    result: "Launched platform",
    description:
      "We built a full-featured scrap metal platform that connects sellers with verified buyers across regions. Listings, real-time pricing, image uploads, location filters and a simple dashboard for both buyers and sellers — all wrapped in a fast, mobile-first interface.",
    deliverables: [
      "Marketplace UI/UX design",
      "Listings with image uploads",
      "Real-time price feed",
      "Buyer & seller dashboards",
      "Search with location filters",
      "Admin moderation panel",
    ],
    process: [
      { title: "Research", text: "Studied the scrap supply chain and user pain points." },
      { title: "Design", text: "Mobile-first flows for listing and bidding on scrap." },
      { title: "Develop", text: "Built the platform with a scalable Next.js architecture." },
      { title: "Launch", text: "Deployed, monitored and tuned for real-world traffic." },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Cloudinary"],
    tint: "from-amber-500/40 to-amber-500/5 text-amber-300",
  },
  {
    slug: "al-asar-school",
    icon: GlobeIcon,
    category: "Education Website",
    title: "Al Asar School",
    tagline: "A modern school website that brings admissions online.",
    short:
      "Clean, informative and parent-friendly website for Al Asar School.",
    result: "Online admissions",
    description:
      "We crafted a complete web presence for Al Asar School — a fast, accessible website that introduces the school, showcases programs, highlights faculty and lets parents submit admission inquiries online. Built to be easily updated by the school staff.",
    deliverables: [
      "School information architecture",
      "Program & faculty pages",
      "Online admission inquiry form",
      "News & events section",
      "Photo gallery",
      "Contact map and details",
    ],
    process: [
      { title: "Discovery", text: "Aligned with school admins on key content and goals." },
      { title: "Design", text: "Friendly, trust-building UI for parents and students." },
      { title: "Develop", text: "Built with Next.js for speed, SEO and easy editing." },
      { title: "Launch", text: "Deployed with analytics and SEO foundations in place." },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Resend", "Vercel"],
    tint: "from-brand-500/40 to-brand-500/5 text-brand-300",
  },
  {
    slug: "webcodexi-app",
    icon: AppIcon,
    category: "Android App",
    title: "WebCodexi App",
    tagline: "A custom Android app built for the WebCodexi software house.",
    short:
      "Native Android application designed and developed for WebCodexi's clients.",
    result: "Shipped to Play Store",
    description:
      "We partnered with WebCodexi — a software house — to design and build a custom Android application for their ecosystem. From product scoping to Play Store publishing, the app is engineered to be fast, reliable and easy for their team to extend.",
    deliverables: [
      "Product scoping with WebCodexi",
      "Material Design UI/UX",
      "Native Android development in Kotlin",
      "API integration & offline support",
      "Push notifications",
      "Play Store publishing",
    ],
    process: [
      { title: "Discovery", text: "Aligned on goals with the WebCodexi product team." },
      { title: "Design", text: "Modern Material 3 UI with clickable prototypes." },
      { title: "Develop", text: "Native Kotlin build with weekly demos and QA." },
      { title: "Publish", text: "Play Store rollout and post-launch support." },
    ],
    stack: ["Kotlin", "Jetpack Compose", "Material 3", "Firebase", "Retrofit", "Play Console"],
    tint: "from-emerald-500/40 to-emerald-500/5 text-emerald-300",
  },
  {
    slug: "automations-channel-management",
    icon: SparklesIcon,
    category: "Automation",
    title: "Automations — Channel Management",
    tagline: "One control panel to manage every channel, automatically.",
    short:
      "Automate posting, replies and channel workflows across every platform.",
    result: "Hours saved weekly",
    description:
      "A custom automation dashboard that helps teams manage multiple channels from a single place — scheduled posts, auto-replies, queue management and analytics rolled into one clean interface. Built to cut manual work and keep every channel active without burning out the team.",
    deliverables: [
      "Unified channel dashboard",
      "Scheduled post composer",
      "Auto-reply rule engine",
      "Inbox & queue management",
      "Per-channel analytics",
      "Team roles & permissions",
    ],
    process: [
      { title: "Audit", text: "Mapped every manual step across the team's channels." },
      { title: "Design", text: "Designed a calm, focus-first dashboard layout." },
      { title: "Develop", text: "Built automations and integrations with reliable APIs." },
      { title: "Iterate", text: "Refined based on real team usage and feedback." },
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "Cron Jobs", "Webhooks"],
    tint: "from-violet-500/40 to-violet-500/5 text-violet-300",
  },
];

// ────────────────────────────────────────────────────────────────────────────
// ADD MORE PROJECTS ABOVE
// To add a new project:
//   1. Copy one of the objects above as a template
//   2. Pick a unique `slug` (used in the URL: /work/your-slug)
//   3. Pick an icon from app/components/icons.tsx (e.g. CodeIcon, AppIcon, …)
//   4. Fill in title, tagline, short, description, deliverables, process, stack
//   5. Add a `tint` color class (e.g. "from-pink-500/40 to-pink-500/5 text-pink-300")
//   6. Save the file — your project is live at /work/your-slug
// ────────────────────────────────────────────────────────────────────────────

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
