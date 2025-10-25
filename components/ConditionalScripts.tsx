'use client'

import { useEffect } from 'react'
import { useCookieConsent } from '@/hooks/useCookieConsent'

export default function ConditionalScripts() {
  const { consent, isLoading } = useCookieConsent()

  useEffect(() => {
    if (isLoading || !consent) return

    // Only load non-essential scripts if user has given consent
    if (consent.analytics || consent.advertising) {
      loadAnalytics()
    }

    if (consent.advertising) {
      loadAdvertising()
    }
  }, [consent, isLoading])

  const loadAnalytics = () => {
    if (typeof window !== 'undefined') {
      // Load Plausible Analytics (privacy-friendly)
      if (process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN) {
        const script = document.createElement('script')
        script.defer = true
        script.setAttribute('data-domain', process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN)
        script.src = 'https://plausible.io/js/script.js'
        document.head.appendChild(script)
      }

      // Fallback to Google Analytics if Plausible not configured
      if (!process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && process.env.NEXT_PUBLIC_GA_ID) {
        const script = document.createElement('script')
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`
        document.head.appendChild(script)

        const gtagScript = document.createElement('script')
        gtagScript.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `
        document.head.appendChild(gtagScript)
      }
    }
  }

  const loadAdvertising = () => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_ADSENSE_ID) {
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      script.setAttribute('data-ad-client', process.env.NEXT_PUBLIC_ADSENSE_ID)
      document.head.appendChild(script)
    }
  }

  return null
}
