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
  themeColor: "#000000",
}

export const metadata: Metadata = {
  title: "Hungama AI Film Festival 2026",
  description:
    "Merging Hungama's rich heritage in global film culture with the cutting-edge precision of AI technology. Celebrating the future of storytelling through AI-driven creative innovation.",
  keywords: ["AI", "film festival", "awards", "creative innovation", "storytelling", "Hungama", "cinema"],
  authors: [{ name: "Hungama", url: "https://www.hungama.org" }],
  creator: "Hungama",
  publisher: "Hungama",
  robots: "index, follow",
  metadataBase: new URL("https://hungama.org"),
  alternates: {
    canonical: "https://hungama.org",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hungama.org",
    siteName: "Hungama AI Film Festival 2026",
    title: "Hungama AI Film Festival 2026",
    description:
      "Celebrating the future of storytelling through AI-driven creative innovation and artistic excellence.",
    images: [
      {
        url: "https://hungama.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hungama AI Film Festival 2026",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hungama AI Film Festival 2026",
    description: "Merging heritage with innovation. The premier platform for AI-driven creative excellence.",
    creator: "@BollywoodHungama",
    site: "@BollywoodHungama",
  },
  icons: {
    icon: [
      {
        url: "/images/favicon.ico",
        sizes: "any",
      },
    ],
    apple: "/images/favicon.ico",
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
        className={`${geist.className} ${geistMono.className} antialiased text-white`}
      >
        {children}
      </body>
    </html>
  )
}
