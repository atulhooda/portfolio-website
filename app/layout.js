import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://atulhooda.tech";
const SITE_NAME = "Atul Hooda";
const SITE_TITLE = "Atul Hooda — Computer Engineering Student & Developer";
const SITE_DESCRIPTION =
  "Atul Hooda is a third-year Computer Engineering student at Army Institute of Technology, Pune building AI/ML and full-stack products. Founder of Engageo Agency.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Atul Hooda",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Atul Hooda",
    "atulhooda",
    "Atul Hooda portfolio",
    "Atul Hooda AIT Pune",
    "Atul Hooda developer",
    "Atul Hooda Engageo",
    "Engageo Agency",
    "Computer Engineering AIT Pune",
    "AI ML developer India",
    "full-stack developer India",
    "Next.js developer India",
    "AIT Pune student portfolio",
  ],
  authors: [{ name: "Atul Hooda", url: SITE_URL }],
  creator: "Atul Hooda",
  publisher: "Atul Hooda",
  category: "Portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Atul Hooda — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@atulhoodareal",
    site: "@atulhoodareal",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Atul Hooda",
  alternateName: ["atulhooda", "atul hooda"],
  url: SITE_URL,
  image: `${SITE_URL}/pfpp.png`,
  jobTitle: "Computer Engineering Student",
  description: SITE_DESCRIPTION,
  email: "mailto:atulxhooda@gmail.com",
  worksFor: {
    "@type": "Organization",
    name: "Engageo Agency",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Army Institute of Technology, Pune",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Full-Stack Development",
    "Next.js",
    "React",
    "Web Design",
  ],
  sameAs: [
    "https://github.com/atulhooda",
    "https://www.linkedin.com/in/atulhooda",
    "https://x.com/atulhoodareal",
    "https://instagram.com/justatoool",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en",
  author: {
    "@type": "Person",
    name: "Atul Hooda",
    url: SITE_URL,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
