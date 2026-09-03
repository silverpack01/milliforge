import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "MilliForge — We build powerful digital experiences",
  description:
    "MilliForge is a software house crafting websites, apps, Shopify stores and SEO-driven products that help ambitious businesses scale.",
  metadataBase: new URL("https://milliforge.dev"),
  openGraph: {
    title: "MilliForge — Build Your Digital Future",
    description:
      "Innovative websites and applications that drive growth and success.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="relative min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="relative flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}