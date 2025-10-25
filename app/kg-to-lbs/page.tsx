import type { Metadata } from 'next'
import WeightConverter from '@/components/WeightConverter'
import AdSlot from '@/components/AdSlot'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Kg to Lbs Converter - Convert Kilograms to Pounds Free',
  description: 'Convert kg to lbs instantly with our free weight converter. Accurate kilograms to pounds conversion with formulas. No registration required.',
  keywords: ['kg to lbs', 'kilograms to pounds', 'kg to pounds converter', 'weight converter', 'pounds to kg', 'lbs to kg converter'],
  openGraph: {
    title: 'Kg to Lbs Converter - Convert Kilograms to Pounds Free | CalcBox',
    description: 'Convert kg to lbs instantly with our free weight converter. Accurate kilograms to pounds conversion with formulas. No registration required.',
    url: 'https://calcbox.com/kg-to-lbs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kg to Lbs Converter - Convert Kilograms to Pounds Free | CalcBox',
    description: 'Convert kg to lbs instantly with our free weight converter. Accurate kilograms to pounds conversion with formulas. No registration required.',
  },
  alternates: {
    canonical: 'https://calcbox.com/kg-to-lbs',
  },
}

export default function KgToLbs() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Weight Converter - Kilograms to Pounds',
    applicationCategory: 'Calculator',
    operatingSystem: 'Web Browser',
    description: 'Convert between kilograms and pounds instantly with our free, accurate weight conversion tool.',
    url: 'https://calcbox.com/kg-to-lbs',
    author: {
      '@type': 'Organization',
      name: 'CalcBox',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Real-time weight conversion',
      'Kilograms to pounds conversion',
      'Pounds to kilograms conversion',
      'Accurate conversion formulas',
      'Mobile-friendly interface',
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Kilograms to Pounds Converter
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Convert between kilograms and pounds instantly with our free, accurate weight conversion tool.
        </p>
      </section>

      {/* Ad Slot Below Title */}
      <div className="mb-8">
        <AdSlot position="below-title" />
      </div>

      {/* Weight Converter */}
      <section className="mb-16">
        <WeightConverter />
      </section>

      {/* Ad Slot Below Converter */}
      <div className="mb-16">
        <AdSlot position="below-result" />
      </div>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Weight Conversion FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I convert kg to lbs?</h3>
            <p className="text-gray-600">
              To convert kilograms to pounds, multiply the weight in kg by 2.20462. For example, 70 kg × 2.20462 = 154.32 lbs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I convert lbs to kg?</h3>
            <p className="text-gray-600">
              To convert pounds to kilograms, multiply the weight in lbs by 0.453592. For example, 150 lbs × 0.453592 = 68.04 kg.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Why are there different conversion factors?</h3>
            <p className="text-gray-600">
              The conversion factor 2.20462 is the exact conversion between the international avoirdupois pound and kilogram. Some sources use 2.2 for simplicity, but 2.20462 is more accurate.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Which countries use kg vs lbs?</h3>
            <p className="text-gray-600">
              Most countries use the metric system (kg), including Europe, Asia, and most of the world. The United States, Myanmar, and Liberia primarily use pounds. Some countries use both systems.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="mb-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Weight Conversion: Kilograms vs Pounds</h2>
          <p className="text-gray-600 mb-4">
            Weight conversion between kilograms and pounds is essential for international communication, travel, and professional applications. The kilogram (kg) is the base unit of mass in the International System of Units (SI), while the pound (lb) is a unit of weight commonly used in the United States and a few other countries.
          </p>
          <p className="text-gray-600 mb-4">
            The conversion between these units follows a precise mathematical relationship: 1 kilogram equals exactly 2.20462 pounds. This conversion factor is based on the international avoirdupois pound, which is the standard pound used in most countries. Understanding this conversion is crucial for various fields including medicine, sports, cooking, and international trade.
          </p>
          <p className="text-gray-600">
            Our weight converter tool provides instant, accurate conversions between kilograms and pounds, helping you navigate between metric and imperial systems effortlessly. Whether you're tracking fitness progress, following international recipes, or working in professional settings, accurate weight conversion ensures precision in all your measurements.
          </p>
        </div>
      </section>

      {/* Related Tools */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Conversion Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">BMI Calculator</h3>
            <p className="text-gray-600 text-sm mb-4">
              Calculate your Body Mass Index using kg or lbs
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Age Calculator</h3>
            <p className="text-gray-600 text-sm mb-4">
              Calculate your exact age in years, months, and days
            </p>
            <a 
              href="/age-calculator" 
              className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors"
            >
              <span className="text-sm">Try Age Calculator</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
