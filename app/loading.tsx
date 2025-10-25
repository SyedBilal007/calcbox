export default function Loading() {
  return (
    <div className="py-12">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading calculator...</p>
      </div>
    </div>
  )
}
