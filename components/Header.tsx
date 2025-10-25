'use client'

import Link from 'next/link'
import { useState, useCallback } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
            <Link 
              href="/" 
              className="text-xl font-semibold text-brand-600 hover:text-brand-700 transition-colors"
              aria-label="CalcBox Home"
            >
              CalcBox
            </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-brand-600 transition-colors"
            >
              Calculators
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-brand-600 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-brand-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            id="mobile-menu"
            className="md:hidden pt-4 border-t border-gray-200" 
            role="navigation" 
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-3">
                <Link 
                  href="/" 
                  onClick={closeMenu}
                  className="text-gray-600 hover:text-brand-600 transition-colors py-2"
                >
                  Calculators
                </Link>
                <Link 
                  href="/about" 
                  onClick={closeMenu}
                  className="text-gray-600 hover:text-brand-600 transition-colors py-2"
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  onClick={closeMenu}
                  className="text-gray-600 hover:text-brand-600 transition-colors py-2"
                >
                  Contact
                </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
