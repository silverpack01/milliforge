import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { MobileBottomCTA } from "./components/mobile-bottom-cta";
import { ScrollProgress } from "./components/scroll-progress";
import { SITE_URL, CONTACT_PHONE_TEL } from "./lib/site";
import "./globals.css";

const GTM_ID = "GTM-WF5SFDQR";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const TITLE = "MilliForge — We build powerful digital experiences";
const DESCRIPTION =
  "MilliForge is a software house crafting websites, Android apps, Shopify stores, SEO and UI/UX design that help ambitious businesses scale.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — MilliForge",
  },
  description: DESCRIPTION,
  applicationName: "MilliForge",
  authors: [{ name: "MilliForge", url: SITE_URL }],
  generator: "Next.js",
  keywords: [
    "software house",
    "web development",
    "android development",
    "app development",
    "shopify",
    "seo",
    "ui ux design",
    "milliforge",
  ],
  themeColor: "#05060a",
  colorScheme: "dark",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "MilliForge",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "MilliForge — software house",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "MilliForge",
      url: SITE_URL,
      logo: `${SITE_URL}/og-image.svg`,
      description: DESCRIPTION,
      foundingDate: "2023",
      email: "hello@milliforge.dev",
      telephone: CONTACT_PHONE_TEL,
      sameAs: [
        `https://wa.me/${CONTACT_PHONE_TEL.replace(/^\+/, "")}`,
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#localbusiness`,
      name: "MilliForge",
      url: SITE_URL,
      telephone: CONTACT_PHONE_TEL,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PK",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "10:00",
          closes: "20:00",
        },
      ],
      parentOrganization: { "@id": `${SITE_URL}#organization` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "MilliForge",
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="relative min-h-screen bg-background text-foreground">
        {/* Skip to content — keyboard accessibility */}
        <a href="#main" className="skip-link">Skip to content</a>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Navbar />
        <ScrollProgress />
        <main id="main" className="relative flex flex-col pb-16 sm:pb-0">{children}</main>
        <Footer />
        <MobileBottomCTA />
        {/* Structured data for SEO */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </body>
    </html>
  );
}
