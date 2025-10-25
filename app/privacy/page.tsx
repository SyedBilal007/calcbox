import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read our privacy policy to understand how CalcBox collects, uses, and protects your information.',
  openGraph: {
    title: 'Privacy Policy | CalcBox',
    description: 'Read our privacy policy to understand how CalcBox collects, uses, and protects your information.',
    url: 'https://calcbox.com/privacy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | CalcBox',
    description: 'Read our privacy policy to understand how CalcBox collects, uses, and protects your information.',
  },
  alternates: {
    canonical: 'https://calcbox.com/privacy',
  },
}

export default function Privacy() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Privacy Policy
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-sm text-gray-500 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-4">What We Collect</h2>
        <p className="text-gray-600 mb-6">
          We collect minimal information to provide our services:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
          <li>Anonymous usage analytics to improve our tools</li>
          <li>Basic device information for optimization</li>
          <li>No personal information required to use calculators</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mb-4">Cookies</h2>
        <p className="text-gray-600 mb-6">
          We use essential cookies for site functionality and analytics cookies to understand usage patterns. 
          We may add advertising cookies in the future to support our free services.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Retention</h2>
        <p className="text-gray-600 mb-6">
          Analytics data is retained for up to 2 years. We do not store your calculation results or personal data.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h2>
        <p className="text-gray-600 mb-6">
          You can request access to your data, request deletion, or opt-out of analytics. 
          Contact us with any privacy concerns.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact</h2>
        <p className="text-gray-600 mb-6">
          Questions about this policy?{' '}
          <a href="/contact" className="text-gray-900 underline hover:no-underline">
            Contact us
          </a>.
        </p>
      </div>
    </div>
  )
}
