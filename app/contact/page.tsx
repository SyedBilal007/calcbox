import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the CalcBox team. We welcome your feedback, questions, and suggestions.',
  openGraph: {
    title: 'Contact Us | CalcBox',
    description: 'Get in touch with the CalcBox team. We welcome your feedback, questions, and suggestions.',
    url: 'https://calcbox.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | CalcBox',
    description: 'Get in touch with the CalcBox team. We welcome your feedback, questions, and suggestions.',
  },
  alternates: {
    canonical: 'https://calcbox.com/contact',
  },
}

export default function Contact() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Contact Us
      </h1>
      
      <div className="max-w-2xl">
        <p className="text-lg text-gray-600 mb-8">
            Have a question, suggestion, or found a bug? We&apos;d love to hear from you!
        </p>

        <ContactForm />
      </div>
    </div>
  )
}

