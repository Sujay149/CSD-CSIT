"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import CountUpNumber from "./CountUpNumber"

const PlacementStats = ({ year = "2022-2023" }) => {
  const statsRef = useRef(null)
  const isInView = useInView(statsRef, { once: true, amount: 0.3 })

  // Placement statistics data
  const placementData = {
    totalStudents: 850,
    placedStudents: 765,
    highestPackage: 42,
    averagePackage: 8.5,
    companiesVisited: 120,
    internationalOffers: 25,

    // Data for pie chart (placement percentage by department)
    departmentPlacements: [
      { name: "CSE", value: 98 },
      { name: "ECE", value: 92 },
      { name: "EEE", value: 85 },
      { name: "Mech", value: 80 },
      { name: "Civil", value: 75 },
    ],

    // Data for bar chart (top recruiters by number of offers)
    topRecruiters: [
      { name: "TCS", offers: 85 },
      { name: "Infosys", offers: 72 },
      { name: "Wipro", offers: 65 },
      { name: "Cognizant", offers: 58 },
      { name: "Accenture", offers: 52 },
      { name: "IBM", offers: 45 },
      { name: "HCL", offers: 40 },
      { name: "Tech Mahindra", offers: 35 },
    ],

    // Data for salary ranges
    salaryRanges: [
      { range: "3-5 LPA", count: 320 },
      { range: "5-8 LPA", count: 280 },
      { range: "8-12 LPA", count: 120 },
      { range: "12-20 LPA", count: 35 },
      { range: "20+ LPA", count: 10 },
    ],
  }

  // Colors for pie chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

  return (
    <div ref={statsRef} className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-[#006699] text-white p-4">
        <h3 className="text-lg font-bold">Placement Statistics {year}</h3>
      </div>

      <div className="p-6">
        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-[#006699]">
              <CountUpNumber end={placementData.placedStudents} />
            </div>
            <div className="text-sm text-gray-600">Students Placed</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-[#006699]">
              <CountUpNumber
                end={Math.round((placementData.placedStudents / placementData.totalStudents) * 100)}
                suffix="%"
              />
            </div>
            <div className="text-sm text-gray-600">Placement Rate</div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-[#006699]">
              <CountUpNumber end={placementData.highestPackage} prefix="₹" suffix=" LPA" />
            </div>
            <div className="text-sm text-gray-600">Highest Package</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-[#006699]">
              <CountUpNumber end={placementData.averagePackage} prefix="₹" suffix=" LPA" decimals={1} />
            </div>
            <div className="text-sm text-gray-600">Average Package</div>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-[#006699]">
              <CountUpNumber end={placementData.companiesVisited} suffix="+" />
            </div>
            <div className="text-sm text-gray-600">Companies Visited</div>
          </div>
          <div className="bg-indigo-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-[#006699]">
              <CountUpNumber end={placementData.internationalOffers} />
            </div>
            <div className="text-sm text-gray-600">International Offers</div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Department-wise Placement Percentage */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-center">Department-wise Placement %</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={placementData.departmentPlacements}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {placementData.departmentPlacements.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top Recruiters */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-center">Top Recruiters</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={placementData.topRecruiters} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="offers" fill="#006699" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Salary Distribution */}
        <div className="mt-8">
          <h4 className="text-lg font-medium mb-4 text-center">Salary Distribution</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={placementData.salaryRanges} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#ffcc00" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlacementStats
