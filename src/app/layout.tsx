import type { Metadata } from "next";
import Script from "next/script";
import { Nunito, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MaterialSymbols } from "@/components/core/Icons/MaterialSymbols";
import { AppShell } from "@/components/core/AppShell/AppShell";
import { AUTHOR_NAME, BASE_URL } from "@/config/config";


const nunito = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default: AUTHOR_NAME, template: `%s - ${AUTHOR_NAME}` },
  description: "A2K — web and mobile products, backend systems, and APIs.",
  keywords: ["a2k", "portfolio", "react", "next.js", "django", "flutter"],
  authors: [{ name: AUTHOR_NAME }],
  creator: AUTHOR_NAME,
  openGraph: { siteName: AUTHOR_NAME, type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
      {
        url: "/web-app-manifest-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/web-app-manifest-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${nunito.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <MaterialSymbols />
        <Script src="/theme-init.js" strategy="beforeInteractive" />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
