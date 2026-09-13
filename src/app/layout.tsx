import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const displayFont = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const SITE_URL = "https://cursor86.github.io/pregnancycheck";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Am I Pregnant? Free Due Date, Ovulation & Symptom Calculator",
    template: "%s | Am I Pregnant",
  },
  description:
    "Free, private pregnancy tools: due date calculator, ovulation & conception dates, symptom checker, weekly growth visualizer, kick counter, and contraction timer — all in one dashboard.",
  keywords: [
    "am i pregnant",
    "due date calculator",
    "pregnancy calculator",
    "ovulation calculator",
    "pregnancy symptom checker",
    "kick counter",
    "contraction timer",
    "pregnancy week by week",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Am I Pregnant",
    title: "Am I Pregnant? Free Due Date, Ovulation & Symptom Calculator",
    description:
      "Track your entire pregnancy journey with free, private, clinically-informed calculators — due date, ovulation, symptoms, kicks, contractions, and weekly growth.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Am I Pregnant? Free Due Date, Ovulation & Symptom Calculator",
    description:
      "Free, private pregnancy tools: due date, ovulation, symptom checker, growth visualizer, kick counter, and contraction timer.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Am I Pregnant",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
