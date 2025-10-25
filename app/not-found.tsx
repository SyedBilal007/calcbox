import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found - 404',
  description: 'The page you are looking for could not be found. Return to our calculator tools.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="py-12">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for could not be found. Here are some popular calculators to get you started:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Link
          href="/"
          className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          <div className="text-3xl mb-3">⚖️</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">BMI Calculator</h3>
          <p className="text-gray-600 text-sm">Calculate your Body Mass Index</p>
        </Link>

        <Link
          href="/kg-to-lbs"
          className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          <div className="text-3xl mb-3">🔄</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Weight Converter</h3>
          <p className="text-gray-600 text-sm">Convert kg to lbs and lbs to kg</p>
        </Link>

        <Link
          href="/age-calculator"
          className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          <div className="text-3xl mb-3">📅</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Age Calculator</h3>
          <p className="text-gray-600 text-sm">Calculate your exact age</p>
        </Link>
      </div>

      <div className="text-center mt-12">
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-brand-600 text-white font-medium rounded-md hover:bg-brand-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
        >
          <span>Go to Homepage</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
