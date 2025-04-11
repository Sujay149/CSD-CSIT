"use client"

import { useState } from "react"
import { Calculator, Award, Check } from "lucide-react"

const ScholarshipCalculator = () => {
  const [percentage, setPercentage] = useState("")
  const [category, setCategory] = useState("general")
  const [scholarshipAmount, setScholarshipAmount] = useState(null)
  const [error, setError] = useState("")

  const calculateScholarship = () => {
    const percentageNum = Number.parseFloat(percentage)

    if (isNaN(percentageNum) || percentageNum < 0 || percentageNum > 100) {
      setError("Please enter a valid percentage between 0 and 100")
      setScholarshipAmount(null)
      return
    }

    setError("")

    let amount = 0

    // Scholarship calculation logic based on SRKR policies
    if (category === "general") {
      if (percentageNum >= 95) amount = 50000
      else if (percentageNum >= 90) amount = 40000
      else if (percentageNum >= 85) amount = 30000
      else if (percentageNum >= 80) amount = 20000
      else if (percentageNum >= 75) amount = 10000
    } else if (category === "sc-st") {
      if (percentageNum >= 90) amount = 60000
      else if (percentageNum >= 85) amount = 50000
      else if (percentageNum >= 80) amount = 40000
      else if (percentageNum >= 75) amount = 30000
      else if (percentageNum >= 70) amount = 20000
    } else if (category === "sports") {
      if (percentageNum >= 85) amount = 70000
      else if (percentageNum >= 80) amount = 60000
      else if (percentageNum >= 75) amount = 50000
      else if (percentageNum >= 70) amount = 40000
      else if (percentageNum >= 65) amount = 30000
    }

    setScholarshipAmount(amount)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <div className="flex items-center mb-6">
        <Calculator className="h-8 w-8 text-yellow-500 mr-3" />
        <h2 className="text-2xl font-bold text-gray-800">Scholarship Calculator</h2>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Previous Academic Percentage</label>
        <input
          type="number"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Enter your percentage"
          min="0"
          max="100"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <option value="general">General</option>
          <option value="sc-st">SC/ST</option>
          <option value="sports">Sports Excellence</option>
        </select>
      </div>

      <button
        onClick={calculateScholarship}
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-md transition duration-300 flex items-center justify-center"
      >
        <Award className="h-5 w-5 mr-2" />
        Calculate Scholarship
      </button>

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {scholarshipAmount !== null && (
        <div className="mt-6 bg-gray-50 p-4 rounded-md border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Estimated Scholarship Amount</h3>
          <div className="flex items-center">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <p className="text-xl font-bold text-green-600">₹{scholarshipAmount.toLocaleString()}</p>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            *This is an estimate based on CSD&IT Departments scholarship policies. Actual scholarship may vary
            based on additional criteria and available funds.
          </p>
        </div>
      )}
    </div>
  )
}

export default ScholarshipCalculator
