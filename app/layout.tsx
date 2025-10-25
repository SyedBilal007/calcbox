import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import ConditionalScripts from '@/components/ConditionalScripts'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
})

export const metadata: Metadata = {
  title: {
    template: '%s | CalcBox',
    default: 'CalcBox - Fast, Free Online Calculators',
  },
  description: 'Fast, free online calculators and converters.',
  keywords: ['calculator', 'converter', 'math', 'BMI calculator', 'weight converter', 'free calculator', 'online calculator'],
  authors: [{ name: 'CalcBox Team' }],
  creator: 'CalcBox',
  publisher: 'CalcBox',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://calcbox.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://calcbox.com',
    title: 'CalcBox - Fast, Free Online Calculators',
    description: 'Fast, free online calculators and converters.',
    siteName: 'CalcBox',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CalcBox Calculator Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CalcBox - Fast, Free Online Calculators',
    description: 'Fast, free online calculators and converters.',
    images: ['/og-image.jpg'],
    creator: '@calcbox',
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
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
    },
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon.ico', sizes: 'any' }
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
      ],
    },
    manifest: '/manifest.json',
    other: {
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
    },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white`}>
        <Header />
        <main className="flex-1" role="main">
          <div className="max-w-3xl mx-auto px-6">
            {children}
          </div>
        </main>
        <Footer />
        <CookieConsent />
        <ConditionalScripts />
      </body>
    </html>
  )
}
