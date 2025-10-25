'use client'

import { useState, useCallback } from 'react'

interface BMIResult {
  value: number
  category: string
  advice: string
}

export default function BMICalculator() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [result, setResult] = useState<BMIResult | null>(null)

  const calculateBMI = (heightCm: number, weightKg: number): BMIResult => {
    const heightM = heightCm / 100
    const bmi = weightKg / (heightM * heightM)
    
    let category: string
    let advice: string
    
    if (bmi < 18.5) {
      category = 'Underweight'
      advice = 'Consider consulting a healthcare provider about healthy weight gain strategies.'
    } else if (bmi < 25) {
      category = 'Normal weight'
      advice = 'Great! Maintain your current healthy lifestyle and balanced diet.'
    } else if (bmi < 30) {
      category = 'Overweight'
      advice = 'Consider incorporating regular exercise and a balanced diet to reach a healthy weight.'
    } else {
      category = 'Obese'
      advice = 'Please consult with a healthcare provider for personalized weight management guidance.'
    }
    
    return {
      value: bmi,
      category,
      advice
    }
  }

  const handleInputChange = useCallback((type: 'height' | 'weight', value: string) => {
    if (type === 'height') {
      setHeight(value)
    } else {
      setWeight(value)
    }

    const heightNum = parseFloat(type === 'height' ? value : height)
    const weightNum = parseFloat(type === 'weight' ? value : weight)
    
    if (heightNum > 0 && weightNum > 0) {
      const bmiResult = calculateBMI(heightNum, weightNum)
      setResult(bmiResult)
    } else {
      setResult(null)
    }
  }, [height, weight])

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">BMI Calculator</h3>
        <p className="text-gray-600 text-sm">
          Calculate your Body Mass Index to assess your weight status
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-2">
            Height (cm)
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => handleInputChange('height', e.target.value)}
            placeholder="Enter height in cm"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
            min="50"
            max="250"
            step="0.1"
            aria-label="Height in centimeters"
          />
        </div>
        
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => handleInputChange('weight', e.target.value)}
            placeholder="Enter weight in kg"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
            min="20"
            max="300"
            step="0.1"
            aria-label="Weight in kilograms"
          />
        </div>
      </div>

      {result && (
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {result.value.toFixed(1)}
            </div>
            <div className="text-lg font-semibold text-gray-700 mb-2">
              {result.category}
            </div>
            <p className="text-sm text-gray-600">
              {result.advice}
            </p>
          </div>
        </div>
      )}

      {!result && height && weight && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            Please enter valid height and weight values to calculate your BMI.
          </p>
        </div>
      )}
    </div>
  )
}
