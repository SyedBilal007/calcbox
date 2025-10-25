// Example usage of AdSlot component with different positions

import AdSlot from '@/components/AdSlot'

export default function AdSlotExample() {
  return (
    <div className="space-y-8">
      {/* Below Title Ad */}
      <section>
        <h2>Below Title Ad Example</h2>
        <AdSlot position="below-title" />
      </section>

      {/* Below Result Ad */}
      <section>
        <h2>Below Result Ad Example</h2>
        <AdSlot position="below-result" />
      </section>

      {/* In Article Ad */}
      <section>
        <h2>In Article Ad Example</h2>
        <p>This is some article content...</p>
        <AdSlot position="in-article" />
        <p>More article content continues...</p>
      </section>
    </div>
  )
}
