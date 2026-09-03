import type { ComponentType, SVGProps } from "react";
import {
  AppIcon,
  CodeIcon,
  SeoIcon,
  ShopifyIcon,
  UiuxIcon,
} from "../components/icons";

export type Service = {
  slug: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  deliverables: string[];
  process: { title: string; text: string }[];
  stack: string[];
  tint: string;
};

export const SERVICES: Service[] = [
  {
    slug: "web-development",
    icon: CodeIcon,
    title: "Web Development",
    tagline: "Blazing-fast websites built with Next.js & React — engineered to convert.",
    description:
      "Your website is your hardest-working employee. We design and build custom websites that load instantly, rank on search engines and turn visitors into customers — from marketing sites to complex web applications and dashboards.",
    points: ["Custom business websites", "E-commerce & dashboards", "APIs & integrations"],
    deliverables: [
      "Custom design & development",
      "Responsive on every device",
      "CMS so you can edit content yourself",
      "On-page SEO & analytics setup",
      "Fast hosting & SSL configuration",
      "30 days of free post-launch support",
    ],
    process: [
      { title: "Discovery", text: "We map your goals, content and user journeys." },
      { title: "UI Design", text: "High-fidelity designs approved by you before code." },
      { title: "Development", text: "Clean Next.js code with weekly staging previews." },
      { title: "Launch & Support", text: "Deployment, monitoring and ongoing care." },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    tint: "from-brand-500/40 to-brand-500/5 text-brand-300",
  },
  {
    slug: "app-development",
    icon: AppIcon,
    title: "App Development",
    tagline: "Cross-platform mobile apps your users will love.",
    description:
      "From MVP to full product — we build iOS and Android apps with a single, efficient codebase. Native-feel performance, offline support, push notifications and app-store publishing, all handled in-house.",
    points: ["iOS & Android", "React Native", "App Store publishing"],
    deliverables: [
      "Product strategy & MVP scoping",
      "UI/UX design for all screens",
      "Cross-platform development",
      "Push notifications & analytics",
      "App Store & Play Store publishing",
      "Maintenance plans available",
    ],
    process: [
      { title: "Product Scoping", text: "We define features, users and a lean roadmap." },
      { title: "Prototyping", text: "Clickable prototype to validate before building." },
      { title: "Build & Test", text: "Agile sprints with QA on real devices." },
      { title: "Publish", text: "Store listing, launch and iteration." },
    ],
    stack: ["React Native", "Expo", "TypeScript", "Firebase", "Supabase"],
    tint: "from-accent-500/40 to-accent-500/5 text-accent-300",
  },
  {
    slug: "seo",
    icon: SeoIcon,
    title: "SEO",
    tagline: "Rank higher. Get found. Grow organic traffic that lasts.",
    description:
      "Paid ads stop the moment you stop paying. SEO keeps compounding. We run technical audits, fix what's holding your site back and build a content strategy that grows qualified traffic month after month.",
    points: ["Technical SEO audits", "Keyword strategy", "Content planning"],
    deliverables: [
      "Full technical SEO audit",
      "Keyword research & mapping",
      "On-page optimization",
      "Core Web Vitals improvements",
      "Content strategy & briefs",
      "Monthly transparent reporting",
    ],
    process: [
      { title: "Audit", text: "Deep technical and content analysis of your site." },
      { title: "Fix", text: "We resolve technical issues and on-page gaps." },
      { title: "Grow", text: "Content and authority building that compounds." },
      { title: "Report", text: "Clear monthly reports — rankings, traffic, leads." },
    ],
    stack: ["Google Search Console", "Ahrefs", "Schema Markup", "Analytics", "Next.js SSR"],
    tint: "from-violet-500/40 to-violet-500/5 text-violet-300",
  },
  {
    slug: "shopify",
    icon: ShopifyIcon,
    title: "Shopify",
    tagline: "Stores that sell — from setup to custom themes and CRO.",
    description:
      "We build Shopify stores that don't just look good — they sell. Setup, custom theme development, payment and shipping configuration, conversion optimization and migrations from any platform.",
    points: ["Store setup & migration", "Custom theme design", "Payment & shipping config"],
    deliverables: [
      "Complete store setup",
      "Custom theme design & build",
      "Product upload & collections",
      "Payment gateway & shipping setup",
      "Apps & integrations",
      "CRO and speed optimization",
    ],
    process: [
      { title: "Plan", text: "Catalog, branding and sales flow planning." },
      { title: "Build", text: "Custom theme tailored to your brand." },
      { title: "Configure", text: "Payments, shipping, taxes and apps." },
      { title: "Optimize", text: "Speed, CRO and launch support." },
    ],
    stack: ["Shopify", "Liquid", "Hydrogen", "Klaviyo", "Meta & Google Pixels"],
    tint: "from-emerald-500/40 to-emerald-500/5 text-emerald-300",
  },
  {
    slug: "ui-ux-design",
    icon: UiuxIcon,
    title: "UI/UX Design",
    tagline: "Research-driven design systems and delightful interfaces.",
    description:
      "Great products are designed before they're built. We research your users, sketch the flows and craft pixel-perfect interfaces backed by a reusable design system your team can build on for years.",
    points: ["Wireframes to hi-fi", "Design systems", "User research"],
    deliverables: [
      "User research & personas",
      "User flows & wireframes",
      "High-fidelity UI designs",
      "Interactive prototypes",
      "Complete design system",
      "Developer handoff files",
    ],
    process: [
      { title: "Research", text: "Users, competitors and business goals." },
      { title: "Wireframe", text: "Flows and low-fi layouts for fast feedback." },
      { title: "Design", text: "Polished UI with a scalable design system." },
      { title: "Handoff", text: "Prototypes and specs developers love." },
    ],
    stack: ["Figma", "Design Tokens", "Prototyping", "Usability Testing", "Accessibility"],
    tint: "from-pink-500/40 to-pink-500/5 text-pink-300",
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}