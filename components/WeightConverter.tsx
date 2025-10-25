'use client'

import { useState, useEffect } from 'react'

export default function WeightConverter() {
  const [kilograms, setKilograms] = useState('')
  const [pounds, setPounds] = useState('')
  const [isUpdating, setIsUpdating] = useState(false)

  // Conversion constants
  const KG_TO_LBS = 2.20462
  const LBS_TO_KG = 0.453592

  const updateFromKg = (kgValue: string) => {
    if (isUpdating) return
    
    setIsUpdating(true)
    setKilograms(kgValue)
    
    if (kgValue === '') {
      setPounds('')
    } else {
      const kg = parseFloat(kgValue)
      if (!isNaN(kg)) {
        const lbs = kg * KG_TO_LBS
        setPounds(lbs.toFixed(2))
      }
    }
    setIsUpdating(false)
  }

  const updateFromLbs = (lbsValue: string) => {
    if (isUpdating) return
    
    setIsUpdating(true)
    setPounds(lbsValue)
    
    if (lbsValue === '') {
      setKilograms('')
    } else {
      const lbs = parseFloat(lbsValue)
      if (!isNaN(lbs)) {
        const kg = lbs * LBS_TO_KG
        setKilograms(kg.toFixed(2))
      }
    }
    setIsUpdating(false)
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Weight Converter</h3>
        <p className="text-gray-600 text-sm">
          Convert between kilograms and pounds instantly
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="kilograms" className="block text-sm font-medium text-gray-700 mb-2">
            Kilograms (kg)
          </label>
          <input
            type="number"
            id="kilograms"
            value={kilograms}
            onChange={(e) => updateFromKg(e.target.value)}
            placeholder="Enter weight in kg"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
            min="0"
            step="0.01"
            aria-label="Weight in kilograms"
          />
        </div>
        
        <div>
          <label htmlFor="pounds" className="block text-sm font-medium text-gray-700 mb-2">
            Pounds (lbs)
          </label>
          <input
            type="number"
            id="pounds"
            value={pounds}
            onChange={(e) => updateFromLbs(e.target.value)}
            placeholder="Enter weight in lbs"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
            min="0"
            step="0.01"
            aria-label="Weight in pounds"
          />
        </div>
      </div>

      {/* Conversion Formula */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Conversion Formula</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>kg to lbs:</strong> pounds = kilograms × 2.20462</p>
          <p><strong>lbs to kg:</strong> kilograms = pounds × 0.453592</p>
        </div>
      </div>

      {kilograms && pounds && (
        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="text-center">
            <div className="text-lg font-semibold text-blue-900 mb-1">
              {kilograms} kg = {pounds} lbs
            </div>
            <div className="text-sm text-blue-700">
              Conversion accurate to 2 decimal places
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
