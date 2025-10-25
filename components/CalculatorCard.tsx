import Link from 'next/link'

interface CalculatorCardProps {
  title: string
  description: string
  icon: string
  href: string
}

export default function CalculatorCard({ title, description, icon, href }: CalculatorCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      aria-label={`Open ${title} calculator`}
    >
      <div className="p-6">
        <div className="text-3xl mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">
          {description}
        </p>
        <div className="mt-4 flex items-center text-gray-500 group-hover:text-gray-700 transition-colors">
          <span className="text-sm">Try it now</span>
          <svg 
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
