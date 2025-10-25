import CalculatorCard from '@/components/CalculatorCard'
import BMICalculator from '@/components/BMICalculator'
import AdSlot from '@/components/AdSlot'
import JsonLd from '@/components/JsonLd'

export const metadata = {
  title: 'Free BMI Calculator - Calculate Body Mass Index Online',
  description: 'Free BMI calculator to calculate your body mass index. Get instant BMI results with health categories and advice. No registration required.',
  keywords: ['BMI calculator', 'body mass index', 'BMI calculator free', 'BMI calculator online', 'calculate BMI', 'BMI chart'],
  openGraph: {
    title: 'Free BMI Calculator - Calculate Body Mass Index Online | CalcBox',
    description: 'Free BMI calculator to calculate your body mass index. Get instant BMI results with health categories and advice. No registration required.',
    url: 'https://calcbox.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free BMI Calculator - Calculate Body Mass Index Online | CalcBox',
    description: 'Free BMI calculator to calculate your body mass index. Get instant BMI results with health categories and advice. No registration required.',
  },
  alternates: {
    canonical: 'https://calcbox.com',
  },
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'BMI Calculator',
    applicationCategory: 'Calculator',
    operatingSystem: 'Web Browser',
    description: 'Calculate your Body Mass Index (BMI) with our free, accurate BMI calculator tool.',
    url: 'https://calcbox.com',
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
      'Real-time BMI calculation',
      'Height and weight input',
      'BMI category classification',
      'Health advice and recommendations',
      'Mobile-friendly interface',
    ],
  }
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="py-12">
        {/* Hero Section */}
        <section className="text-center mb-16" aria-labelledby="main-heading">
          <h1 id="main-heading" className="text-4xl font-bold text-gray-900 mb-4">
            BMI Calculator & Health Tools
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate your BMI and access professional health calculator tools. Free, fast, and accessible.
          </p>
        </section>

      {/* Ad Slot Below Title */}
      <div className="mb-8">
        <AdSlot position="below-title" />
      </div>

      {/* BMI Calculator */}
      <section className="mb-16">
        <BMICalculator />
      </section>

      {/* Ad Slot Below Result */}
      <div className="mb-16">
        <AdSlot position="below-result" />
      </div>

        {/* FAQ Section */}
        <section className="mb-16" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-bold text-gray-900 mb-8">BMI Calculator FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What is BMI?</h3>
            <p className="text-gray-600">
              BMI (Body Mass Index) is a measure of body fat based on height and weight. It&apos;s calculated by dividing weight in kilograms by height in meters squared.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What do the BMI categories mean?</h3>
            <p className="text-gray-600">
              BMI categories are: Underweight (below 18.5), Normal weight (18.5-24.9), Overweight (25-29.9), and Obese (30 and above). These ranges help assess health risks.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Is BMI accurate for everyone?</h3>
            <p className="text-gray-600">
              BMI is a useful screening tool but has limitations. It may not accurately reflect body composition for athletes, older adults, or people with high muscle mass.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What should I do with my BMI result?</h3>
            <p className="text-gray-600">
              Use your BMI as a starting point for health discussions. Consult with healthcare providers for personalized advice, especially if you&apos;re outside the normal range.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How often should I check my BMI?</h3>
            <p className="text-gray-600">
              BMI can change over time. Check it periodically, but focus more on overall health habits like regular exercise and balanced nutrition.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Are there other health metrics I should consider?</h3>
            <p className="text-gray-600">
              Yes! Consider waist circumference, body fat percentage, blood pressure, and overall fitness level. BMI is just one tool in assessing health.
            </p>
          </div>
        </div>
      </section>

        {/* SEO Content */}
        <section className="mb-16" aria-labelledby="seo-content-heading">
          <div className="prose prose-lg max-w-none">
            <h2 id="seo-content-heading" className="text-2xl font-bold text-gray-900 mb-6">Understanding BMI: Your Health Assessment Tool</h2>
          <p className="text-gray-600 mb-4">
            Body Mass Index (BMI) is one of the most widely used health assessment tools, providing a quick and simple way to evaluate whether your weight is in a healthy range relative to your height. Developed in the 19th century by Belgian mathematician Adolphe Quetelet, BMI has become a standard screening tool used by healthcare professionals worldwide.
          </p>
          <p className="text-gray-600 mb-4">
            The calculation is straightforward: BMI = weight (kg) ÷ height (m)². This formula produces a number that falls into one of four categories: underweight (below 18.5), normal weight (18.5-24.9), overweight (25-29.9), and obese (30 and above). These categories help identify potential health risks associated with being underweight or overweight.
          </p>
          <p className="text-gray-600 mb-4">
            While BMI is an excellent screening tool, it&apos;s important to understand its limitations. The calculation doesn&apos;t distinguish between muscle and fat mass, which means athletes with high muscle mass may register as overweight despite being in excellent health. Similarly, older adults may have lower muscle mass, potentially masking health concerns. For these reasons, BMI should be used as part of a comprehensive health assessment rather than the sole indicator of health status.
          </p>
          <p className="text-gray-600">
            Regular BMI monitoring can help track health trends over time and serve as motivation for maintaining healthy lifestyle choices. Combined with other health metrics like blood pressure, cholesterol levels, and physical fitness assessments, BMI provides valuable insight into overall health and wellness.
          </p>
        </div>
      </section>

        {/* Related Health Tools */}
        <section className="mb-16" aria-labelledby="related-tools-heading">
          <h2 id="related-tools-heading" className="text-2xl font-bold text-gray-900 mb-8">Related Health Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CalculatorCard
            title="Weight Converter"
            description="Convert between kilograms and pounds for BMI calculations"
            icon="🔄"
            href="/kg-to-lbs"
          />
          <CalculatorCard
            title="Age Calculator"
            description="Calculate your exact age for health assessments"
            icon="📅"
            href="/age-calculator"
          />
        </div>
      </section>

        {/* Popular Calculators */}
        <section className="mb-16" aria-labelledby="popular-calculators-heading">
          <h2 id="popular-calculators-heading" className="text-2xl font-bold text-gray-900 mb-8">Popular Calculators</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CalculatorCard
            title="BMI Calculator"
            description="Calculate your Body Mass Index"
            icon="⚖️"
            href="/"
          />
          <CalculatorCard
            title="Weight Converter"
            description="Convert kg to lbs and lbs to kg"
            icon="🔄"
            href="/kg-to-lbs"
          />
          <CalculatorCard
            title="Age Calculator"
            description="Calculate age in years, months, and days"
            icon="📅"
            href="/age-calculator"
          />
        </div>
      </section>

        {/* Additional Calculator Tools */}
        <section className="mb-16" aria-labelledby="more-tools-heading">
          <h2 id="more-tools-heading" className="text-2xl font-bold text-gray-900 mb-8">More Calculator Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CalculatorCard
            title="Basic Calculator"
            description="Simple arithmetic operations"
            icon="🧮"
            href="/calculator/basic"
          />
          <CalculatorCard
            title="Scientific Calculator"
            description="Advanced mathematical functions"
            icon="🔬"
            href="/calculator/scientific"
          />
          <CalculatorCard
            title="Graphing Calculator"
            description="Visualize mathematical functions"
            icon="📊"
            href="/calculator/graphing"
          />
          <CalculatorCard
            title="Unit Converter"
            description="Convert between different units"
            icon="🔄"
            href="/calculator/converter"
          />
        </div>
      </section>

        {/* Features Section */}
        <section className="bg-gray-50 rounded-lg p-8" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-2xl font-bold text-center mb-8 text-gray-900">
            Why Choose CalcBox?
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Lightning Fast</h3>
            <p className="text-gray-600">
              Optimized for speed and performance with instant calculations.
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">♿</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Accessible</h3>
            <p className="text-gray-600">
              Built with accessibility in mind, supporting screen readers and keyboard navigation.
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Mobile First</h3>
            <p className="text-gray-600">
              Responsive design that works perfectly on all devices.
            </p>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
