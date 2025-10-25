'use client'

import { useState, useEffect } from 'react'

type AdPosition = 'below-title' | 'below-result' | 'in-article'

interface AdSlotProps {
  position: AdPosition
  className?: string
  id?: string
}

export default function AdSlot({ position, className = '', id }: AdSlotProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate ad loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Generate unique ID if not provided
  const adId = id || `ad-${position}-${Math.random().toString(36).substr(2, 9)}`

  // Get responsive dimensions based on position
  const getDimensions = () => {
    switch (position) {
      case 'below-title':
        return {
          mobile: { width: '100%', height: '100px' },
          desktop: { width: '728px', height: '90px' },
          format: 'leaderboard'
        }
      case 'below-result':
        return {
          mobile: { width: '100%', height: '250px' },
          desktop: { width: '300px', height: '250px' },
          format: 'rectangle'
        }
      case 'in-article':
        return {
          mobile: { width: '100%', height: '100px' },
          desktop: { width: '728px', height: '90px' },
          format: 'leaderboard'
        }
      default:
        return {
          mobile: { width: '100%', height: '90px' },
          desktop: { width: '728px', height: '90px' },
          format: 'banner'
        }
    }
  }

  const dimensions = getDimensions()

  return (
    <div 
      id={adId}
      className={`bg-gray-50 border border-gray-300 rounded-lg overflow-hidden ${className}`}
      role="banner"
      aria-label={`Advertisement - ${position}`}
      data-ad-slot={adId}
      data-ad-format={dimensions.format}
      data-ad-position={position}
      style={{
        width: dimensions.mobile.width,
        height: dimensions.mobile.height,
        minHeight: dimensions.mobile.height
      }}
    >
      {!isLoaded ? (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-600"></div>
          <span className="ml-2 text-gray-600 text-sm">Loading ad...</span>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full p-4">
          <div className="text-center">
            <div className="text-gray-400 mb-2">📢</div>
            <p className="text-sm text-gray-600 font-medium">
              Ad placeholder
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Will show after AdSense approval
            </p>
            <div className="text-xs text-gray-400 mt-2">
              {position} • {dimensions.format}
            </div>
          </div>
        </div>
      )}

      {/* Desktop responsive styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (min-width: 768px) {
            #${adId} {
              width: ${dimensions.desktop.width};
              height: ${dimensions.desktop.height};
              min-height: ${dimensions.desktop.height};
            }
          }
        `
      }} />
    </div>
  )
}

