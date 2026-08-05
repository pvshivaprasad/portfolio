import type { Metadata } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import BackgroundEffect from "@/components/background-effect";
import LenisProvider from "@/components/lenis-provider";
import { getSiteUrl } from "@/lib/site-config";
import { portfolioProfile } from "@/lib/portfolio-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const siteUrl = getSiteUrl();
const seoTitle = `${portfolioProfile.shortName} | Python, AI & Backend Engineer`;
const seoDescription = portfolioProfile.summary;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoTitle,
    template: `%s | ${portfolioProfile.shortName}`,
  },
  description: seoDescription,
  applicationName: `${portfolioProfile.shortName} Portfolio`,
  creator: portfolioProfile.name,
  publisher: portfolioProfile.name,
  authors: [{ name: portfolioProfile.name, url: siteUrl }],
  keywords: [
    "Shiva Prasad",
    "Venkata Shiva Prasad Punna",
    "pvshivaprasad",
    "Python developer",
    "AI engineer",
    "backend developer",
    "machine learning",
    "portfolio",
    "Hyderabad developer",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: siteUrl,
    siteName: `${portfolioProfile.shortName} Portfolio`,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: portfolioProfile.avatarUrl,
        width: 400,
        height: 400,
        alt: `${portfolioProfile.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: [portfolioProfile.avatarUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${portfolioProfile.shortName} Portfolio`,
    url: siteUrl,
    inLanguage: "en-US",
    description: seoDescription,
    publisher: {
      "@type": "Person",
      name: portfolioProfile.name,
      url: siteUrl,
    },
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioProfile.name,
    alternateName: ["Shiva Prasad", "pvshivaprasad"],
    description: seoDescription,
    url: siteUrl,
    image: portfolioProfile.avatarUrl,
    jobTitle: "Python, AI & Backend Engineer",
    email: `mailto:${portfolioProfile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    knowsAbout: portfolioProfile.coreAreas,
    sameAs: [portfolioProfile.socialLinks.github],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LenisProvider>
            <BackgroundEffect />
            {children}
            <Toaster />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
