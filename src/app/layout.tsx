import '@/styles/globals.css';

import { MainNav } from '@/components/main-nav';
import { CSPostHogProvider } from '@/config/posthog-provider';
import { QueryProvider } from '@/config/query-provider';
import { cn } from '@/lib/utils';
import { lato, pacifico, poppins } from '@/styles/fonts/font';
import { ClerkProvider, GoogleOneTap } from '@clerk/nextjs';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const runtime = 'edge';
export const revalidate = 3600 // revalidate at most every hour

import { Metadata, Viewport } from "next"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
    title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
    },
    metadataBase: new URL(siteConfig.url),
    description: siteConfig.description,
    keywords: [
      "Movies",
      "Tv Shows",
      "Trailers",
      "Collaboration",
      "Movie Trailers",
      "Tv Show Trailers",
    ],
    authors: [
      {
        name: "evansso",
        url: "https://reelhype.space",
      },
    ],
    creator: "shadcn",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
      creator: "@evansso_",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-icon.png",
    },
    manifest: `${siteConfig.url}/sitemap.xml`,
  }

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <CSPostHogProvider>
                <html lang="en" suppressHydrationWarning>
                    <QueryProvider>
                        <body
                            className={cn(
                                'dark min-h-screen bg-black font-primary text-foreground antialiased',
                                lato.variable,
                                poppins.variable,
                                pacifico.variable
                            )}
                        >
                            <MainNav />

                            <div>
                                <SpeedInsights />
                                <Analytics />
                                <GoogleOneTap />
                            </div>

                            {children}
                        </body>
                    </QueryProvider>
                </html>
            </CSPostHogProvider>
        </ClerkProvider>
    );
}
