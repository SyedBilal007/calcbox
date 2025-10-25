import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Age Calculator - Calculate Your Exact Age Free',
  description: 'Calculate your exact age in years, months, and days with our free age calculator. Perfect for health assessments and personal records.',
  keywords: ['age calculator', 'calculate age', 'age calculator free', 'exact age calculator', 'age in years months days'],
  openGraph: {
    title: 'Age Calculator - Calculate Your Exact Age Free | CalcBox',
    description: 'Calculate your exact age in years, months, and days with our free age calculator. Perfect for health assessments and personal records.',
    url: 'https://calcbox.com/age-calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Age Calculator - Calculate Your Exact Age Free | CalcBox',
    description: 'Calculate your exact age in years, months, and days with our free age calculator. Perfect for health assessments and personal records.',
  },
  alternates: {
    canonical: 'https://calcbox.com/age-calculator',
  },
}

export default function AgeCalculator() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Age Calculator
      </h1>
      
      <div className="max-w-2xl">
        <p className="text-lg text-gray-600 mb-8">
          Calculate your exact age in years, months, and days. Perfect for health assessments and personal records.
        </p>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Age Calculator Coming Soon</h2>
          <p className="text-gray-600">
            We&apos;re working on bringing you a comprehensive age calculator. Check back soon!
          </p>
        </div>

        {/* Related Tools */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Health Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">BMI Calculator</h3>
              <p className="text-gray-600 text-sm mb-4">
                Calculate your Body Mass Index for health assessments
              </p>
              <a 
                href="/" 
                className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors"
              >
                <span className="text-sm">Try BMI Calculator</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Weight Converter</h3>
              <p className="text-gray-600 text-sm mb-4">
                Convert between kilograms and pounds
              </p>
              <a 
                href="/kg-to-lbs" 
                className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors"
              >
                <span className="text-sm">Try Weight Converter</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
