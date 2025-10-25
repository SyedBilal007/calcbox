'use client'

import { useState, useEffect } from 'react'

type ConsentPreferences = {
  analytics: boolean
  advertising: boolean
}

export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentPreferences | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setConsent(parsed)
      } catch (error) {
        console.error('Error parsing cookie consent:', error)
      }
    }
    setIsLoading(false)
  }, [])

  const updateConsent = (preferences: ConsentPreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences))
    setConsent(preferences)
  }

  const hasConsent = (type: keyof ConsentPreferences) => {
    return consent?.[type] || false
  }

  return {
    consent,
    isLoading,
    updateConsent,
    hasConsent,
  }
}
