'use client'

import Link from 'next/link'

export default function Footer() {
  const handlePrivacySettings = () => {
    if (typeof window !== 'undefined' && window.openPrivacySettings) {
      window.openPrivacySettings()
    }
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} CalcBox. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <button
              onClick={handlePrivacySettings}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Privacy settings
            </button>
            <Link 
              href="/privacy" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Privacy
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
