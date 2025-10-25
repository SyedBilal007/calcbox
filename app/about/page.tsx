import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About CalcBox',
  description: 'Learn about CalcBox - the advanced calculator platform designed for professionals, students, and anyone who needs reliable mathematical tools.',
  openGraph: {
    title: 'About CalcBox | CalcBox',
    description: 'Learn about CalcBox - the advanced calculator platform designed for professionals, students, and anyone who needs reliable mathematical tools.',
    url: 'https://calcbox.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About CalcBox | CalcBox',
    description: 'Learn about CalcBox - the advanced calculator platform designed for professionals, students, and anyone who needs reliable mathematical tools.',
  },
  alternates: {
    canonical: 'https://calcbox.com/about',
  },
}

export default function About() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        About CalcBox
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-6">
          CalcBox provides free, fast, and accurate online calculators and converters. 
          We make mathematical tools accessible to everyone, from students to professionals.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-4">What We Offer</h2>
        <p className="text-gray-600 mb-6">
          Our platform includes BMI calculators, weight converters, and other essential calculation tools. 
          All tools are free to use, work on any device, and require no registration.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-4">Accuracy</h2>
        <p className="text-gray-600 mb-6">
          While we strive for accuracy in all our calculations, our tools are for informational purposes only. 
          For medical, financial, or critical decisions, please consult with appropriate professionals.
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Questions or Feedback?
          </h3>
          <p className="text-gray-600">
            We&apos;d love to hear from you!{' '}
            <a href="/contact" className="text-gray-900 underline hover:no-underline">
              Contact us
            </a>{' '}
            with any questions or suggestions.
          </p>
        </div>
      </div>
    </div>
  )
}

