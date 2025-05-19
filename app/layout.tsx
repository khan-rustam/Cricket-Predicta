import type React from "react";
import "@/app/globals.css";
import { Roboto } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { ThemeProviderClient } from "@/components/theme-provider-client";
import favicon from "@/public/favicon.ico";
import favicon16 from "@/public/favicon-16x16.png";
import favicon32 from "@/public/favicon-32x32.png";
import appleTouchIcon from "@/public/apple-touch-icon.png";
import androidChrome192 from "@/public/android-chrome-192x192.png";
import androidChrome512 from "@/public/android-chrome-512x512.png";
import logo from "@/public/images/logo.png";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    template: '%s | Cricket Predicta',
    default: 'Cricket Predicta - Cricket Analytics, Predictions & TV Show',
  },
  description: "Asia's #1 Cricket Analytics TV Show. Real-time predictions, expert analysis, and live updates. Broadcast in 10 states, 7 languages. Trusted by cricket enthusiasts worldwide.",
  keywords: [
    'cricket predicta',
    'cricket analytics',
    'cricket predictions',
    'sports tv show',
    'cricket stats',
    'match predictions',
    'cricket news',
    'cricket experts',
    'live cricket',
    'cricket insights',
    'cricket data',
    'cricket machine learning',
    'cricket India',
    'Asia cricket',
    'cricket TV',
    'cricket show',
    'cricket broadcasting',
    'cricket partners',
    'cricket guests',
    'cricket commentators',
    'cricket coaches',
    'cricket legendary players',
  ],
  authors: [{ name: 'Cricket Predicta Team', url: 'https://cricketpredicta.com/about' }],
  creator: 'Cricket Predicta',
  publisher: 'Cricket Predicta',
  generator: 'Next.js',
  applicationName: 'Cricket Predicta',
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL('https://cricketpredicta.com'),
  alternates: {
    canonical: 'https://cricketpredicta.com/',
    languages: {
      'en-US': '/en-US',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cricketpredicta.com',
    title: 'Cricket Predicta - Cricket Analytics, Predictions & TV Show',
    description: "Asia's #1 Cricket Analytics TV Show. Real-time predictions, expert analysis, and live updates. Broadcast in 10 states, 7 languages. Trusted by cricket enthusiasts worldwide.",
    siteName: 'Cricket Predicta',
    images: [
      {
        url: 'https://cricketpredicta.com/images/logo.png',
        width: 1200,
        height: 1200,
        alt: 'Cricket Predicta - Cricket Analytics, Predictions & TV Show',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cricket Predicta - Cricket Analytics, Predictions & TV Show',
    description: "Asia's #1 Cricket Analytics TV Show. Real-time predictions, expert analysis, and live updates. Broadcast in 10 states, 7 languages. Trusted by cricket enthusiasts worldwide.",
    creator: '@cricketpredicta',
    site: '@cricketpredicta',
    images: [{
      url: 'https://cricketpredicta.com/images/logo.png',
      alt: 'Cricket Predicta - Cricket Analytics, Predictions & TV Show',
    }],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ]
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'Add your Google Search Console verification code here',
    yandex: 'Add your Yandex Webmaster verification code here'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={favicon.src} sizes="any" />
        <link rel="icon" href={favicon16.src} type="image/png" sizes="16x16" />
        <link rel="icon" href={favicon32.src} type="image/png" sizes="32x32" />
        <link
          rel="apple-touch-icon"
          href={appleTouchIcon.src}
          sizes="180x180"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content={appleTouchIcon.src} />

        {/* Advanced SEO Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Cricket Predicta" />
        <meta property="og:site_name" content="Cricket Predicta" />
        <meta name="twitter:site" content="@cricketpredicta" />
        <meta name="twitter:creator" content="@cricketpredicta" />
        <meta property="og:image:width" content="2830" />
        <meta property="og:image:height" content="2830" />
        <meta
          property="og:image:alt"
          content="Cricket Predicta - Cricket Predictions and Analysis"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href="https://cricketpredicta.com" />
        <meta name="geo.placename" content="Global" />
        <meta name="geo.position" content="Global" />
        <meta name="geo.region" content="Global" />
        <meta name="ICBM" content="Global" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsOrganization",
              name: "Cricket Predicta",
              url: "https://cricketpredicta.com",
              logo: `https://cricketpredicta.com${logo.src}`,
              description:
                "Your ultimate destination for cricket predictions and analysis",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://cricketpredicta.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              sameAs: [
                "https://twitter.com/cricketpredicta",
                "https://facebook.com/cricketpredicta",
                "https://instagram.com/cricketpredicta",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "Global",
              },
            }),
          }}
        />
        <style>{`
          :root {
            --primary-color: #3b82f6;
            --primary-color-light: #60a5fa;
            --primary-color-dark: #2563eb;
            --primary-color-hover: #1d4ed8;
          }
          .dark {
            --primary-color-light: #3b82f6;
            --primary-color: #2563eb;
            --primary-color-dark: #1d4ed8;
            --primary-color-hover: #1e40af;
          }
        `}</style>
      </head>
      <body className={`${roboto.className} overflow-x-hidden`}>
        <ThemeProviderClient
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <header id="header" role="banner">
              {/* Header content will go here */}
            </header>
            <main id="main" role="main" className="flex-1">
              {children}
            </main>
            <footer id="footer" role="contentinfo" className="border-t">
              {/* Footer content will go here */}
            </footer>
          </div>
        </ThemeProviderClient>
      </body>
    </html>
  );
}
