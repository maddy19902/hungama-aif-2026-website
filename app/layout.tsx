import React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export const metadata: Metadata = {
  title: "Hungama AI Film Festival 2026 | Awards & Recognition",
  description:
    "Celebrating the future of storytelling. The premier global platform recognizing excellence in AI-driven creative innovation and artistic vision.",
  keywords: ["AI", "film festival", "awards", "creative innovation", "storytelling", "Hungama"],
  authors: [{ name: "Hungama", url: "https://www.bollywoodhungama.com" }],
  creator: "Hungama",
  publisher: "Hungama",
  robots: "index, follow",
  canonical: "https://aif2026.com",
  alternates: {
    canonical: "https://aif2026.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aif2026.com",
    siteName: "Hungama AI Film Festival 2026",
    title: "Hungama AI Film Festival 2026 | Awards & Recognition",
    description:
      "Celebrating the future of storytelling. The premier global platform recognizing excellence in AI-driven creative innovation.",
    images: [
      {
        url: "https://aif2026.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hungama AI Film Festival 2026",
        type: "image/jpeg",
      },
      {
        url: "https://aif2026.com/og-image-square.jpg",
        width: 800,
        height: 800,
        alt: "Hungama AI Film Festival 2026",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hungama AI Film Festival 2026",
    description: "Celebrating excellence in AI-driven creative innovation and storytelling.",
    creator: "@BollywoodHungama",
    site: "@BollywoodHungama",
    images: [
      {
        url: "https://aif2026.com/twitter-image.jpg",
        width: 1200,
        height: 675,
        alt: "Hungama AI Film Festival 2026",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon-light-32x32.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geist.className} ${geistMono.className} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  )
}
