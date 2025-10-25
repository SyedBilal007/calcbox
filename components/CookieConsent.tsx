'use client'

import { useState, useEffect } from 'react'

type ConsentPreferences = {
  analytics: boolean
  advertising: boolean
}

// Global function to open privacy settings
declare global {
  interface Window {
    openPrivacySettings: () => void
  }
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }

    // Make openPrivacySettings globally available
    window.openPrivacySettings = () => {
      setShowPreferences(true)
    }
  }, [])

  const saveConsent = (preferences: ConsentPreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences))
    setShowBanner(false)
    setShowPreferences(false)
    
    // Load non-essential scripts if accepted
    if (preferences.analytics) {
      loadAnalytics()
    }
    if (preferences.advertising) {
      loadAdvertising()
    }
  }

  const loadAnalytics = () => {
    // Load Google Analytics or other analytics scripts
    console.log('Loading analytics scripts...')
    // Example: gtag('config', 'GA_MEASUREMENT_ID')
  }

  const loadAdvertising = () => {
    // Load AdSense or other advertising scripts
    console.log('Loading advertising scripts...')
    // Example: AdSense script loading
  }

  const handleAcceptAll = () => {
    saveConsent({ analytics: true, advertising: true })
  }

  const handleRejectNonEssential = () => {
    saveConsent({ analytics: false, advertising: false })
  }

  const handleManage = () => {
    setShowPreferences(true)
  }

  const handleSavePreferences = (preferences: ConsentPreferences) => {
    saveConsent(preferences)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Main Banner */}
      {!showPreferences && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="max-w-3xl mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <p className="text-sm text-gray-700">
                  We use cookies for analytics and personalized content.{' '}
                  <button
                    onClick={handleManage}
                    className="text-gray-900 underline hover:no-underline"
                  >
                    Manage preferences
                  </button>
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleRejectNonEssential}
                  className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Reject non-essential
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 text-sm bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                >
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Cookie Preferences
            </h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Essential Cookies</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Required for the website to function properly. These cannot be disabled.
                </p>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Always active</span>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Analytics Cookies</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Help us understand how visitors interact with our website.
                </p>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="analytics"
                    className="mr-2"
                    defaultChecked
                  />
                  <label htmlFor="analytics" className="text-sm text-gray-700">
                    Allow analytics
                  </label>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Advertising Cookies</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Used to show relevant ads and support our free services.
                </p>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="advertising"
                    className="mr-2"
                    defaultChecked
                  />
                  <label htmlFor="advertising" className="text-sm text-gray-700">
                    Allow advertising
                  </label>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowPreferences(false)}
                className="flex-1 px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const analytics = (document.getElementById('analytics') as HTMLInputElement)?.checked || false
                  const advertising = (document.getElementById('advertising') as HTMLInputElement)?.checked || false
                  handleSavePreferences({ analytics, advertising })
                }}
                className="flex-1 px-4 py-2 text-sm bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
