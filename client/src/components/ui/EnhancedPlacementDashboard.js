"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bar, Pie, Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend)

const placementData = {
  overview: {
    totalStudents: 850,
    placedStudents: 792,
    highestPackage: 45,
    averagePackage: 12.5,
    companiesVisited: 120,
    internationalOffers: 28,
  },
  topRecruiters: [
    { name: "Microsoft", logo: "/placeholder.svg?height=60&width=120", offers: 32 },
    { name: "Amazon", logo: "/placeholder.svg?height=60&width=120", offers: 28 },
    { name: "Google", logo: "/placeholder.svg?height=60&width=120", offers: 24 },
    { name: "TCS", logo: "/placeholder.svg?height=60&width=120", offers: 65 },
    { name: "Infosys", logo: "/placeholder.svg?height=60&width=120", offers: 58 },
    { name: "Wipro", logo: "/placeholder.svg?height=60&width=120", offers: 52 },
    { name: "Accenture", logo: "/placeholder.svg?height=60&width=120", offers: 48 },
    { name: "IBM", logo: "/placeholder.svg?height=60&width=120", offers: 42 },
  ],
  departmentWise: {
    labels: ["CSE", "ECE", "EEE", "Mechanical", "Civil", "CSD"],
    data: [98, 92, 88, 85, 82, 96],
  },
  salaryRanges: {
    labels: ["3-6 LPA", "6-10 LPA", "10-15 LPA", "15-25 LPA", "25+ LPA"],
    data: [35, 30, 20, 10, 5],
  },
  yearWiseData: {
    labels: ["2019", "2020", "2021", "2022", "2023"],
    placementPercentage: [88, 90, 92, 93, 95],
    avgPackage: [8.5, 9.2, 10.5, 11.8, 12.5],
  },
}

const EnhancedPlacementDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview")

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Department-wise Placement Percentage",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: "Placement Percentage (%)",
        },
      },
    },
  }

  const barChartData = {
    labels: placementData.departmentWise.labels,
    datasets: [
      {
        label: "Placement Percentage",
        data: placementData.departmentWise.data,
        backgroundColor: [
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 99, 132, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const pieChartData = {
    labels: placementData.salaryRanges.labels,
    datasets: [
      {
        label: "Percentage of Students",
        data: placementData.salaryRanges.data,
        backgroundColor: [
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 99, 132, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const lineChartData = {
    labels: placementData.yearWiseData.labels,
    datasets: [
      {
        label: "Placement Percentage",
        data: placementData.yearWiseData.placementPercentage,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        yAxisID: "y",
      },
      {
        label: "Average Package (LPA)",
        data: placementData.yearWiseData.avgPackage,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        yAxisID: "y1",
      },
    ],
  }

  const lineChartOptions = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      title: {
        display: true,
        text: "Year-wise Placement Trends",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
        title: {
          display: true,
          text: "Placement Percentage (%)",
        },
        min: 80,
        max: 100,
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        title: {
          display: true,
          text: "Average Package (LPA)",
        },
        min: 5,
        max: 15,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  }

  const tabVariants = {
    inactive: { opacity: 0.7, y: 5 },
    active: { opacity: 1, y: 0 },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Placement Dashboard</h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b">
          {["overview", "statistics", "top recruiters", "trends"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-lg font-medium capitalize transition-all ${
                activeTab === tab ? "text-primary border-b-2 border-primary" : "text-gray-500 hover:text-gray-800"
              }`}
              variants={tabVariants}
              initial="inactive"
              animate={activeTab === tab ? "active" : "inactive"}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div key={activeTab} variants={contentVariants} initial="hidden" animate="visible">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Placement Rate</h3>
                <div className="flex items-center">
                  <div className="relative w-32 h-32">
                    <svg viewBox="0 0 36 36" className="w-32 h-32 transform -rotate-90">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#eee"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        strokeDasharray={`${(placementData.overview.placedStudents / placementData.overview.totalStudents) * 100}, 100`}
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <span className="text-2xl font-bold text-blue-600">
                        {Math.round(
                          (placementData.overview.placedStudents / placementData.overview.totalStudents) * 100,
                        )}
                        %
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-600">
                      <span className="font-semibold">{placementData.overview.placedStudents}</span> out of{" "}
                      <span className="font-semibold">{placementData.overview.totalStudents}</span> students placed
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Package Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 mb-1">Highest Package</p>
                    <p className="text-2xl font-bold text-green-600">₹{placementData.overview.highestPackage} LPA</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Average Package</p>
                    <p className="text-2xl font-bold text-green-600">₹{placementData.overview.averagePackage} LPA</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Recruitment Overview</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 mb-1">Companies Visited</p>
                    <p className="text-2xl font-bold text-purple-600">{placementData.overview.companiesVisited}+</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">International Offers</p>
                    <p className="text-2xl font-bold text-purple-600">{placementData.overview.internationalOffers}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Statistics Tab */}
          {activeTab === "statistics" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Bar options={barChartOptions} data={barChartData} />
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Salary Range Distribution</h3>
                <div className="h-80">
                  <Pie data={pieChartData} />
                </div>
              </div>
            </div>
          )}

          {/* Top Recruiters Tab */}
          {activeTab === "top recruiters" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Our Top Recruiting Partners</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {placementData.topRecruiters.map((recruiter, index) => (
                  <motion.div
                    key={recruiter.name}
                    className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <img
                      src={recruiter.logo || "/placeholder.svg"}
                      alt={`${recruiter.name} logo`}
                      className="h-12 object-contain mb-3"
                    />
                    <h4 className="font-medium text-gray-800">{recruiter.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{recruiter.offers} offers</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  And <span className="font-semibold">100+</span> more companies visit our campus every year
                </p>
              </div>
            </div>
          )}

          {/* Trends Tab */}
          {activeTab === "trends" && (
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Line options={lineChartOptions} data={lineChartData} />
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Highlights</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Consistent improvement in placement percentage over the last 5 years
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Average package has increased by 47% since 2019
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Number of companies visiting campus has doubled in the last 3 years
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    International placements have seen a 200% increase since 2020
                  </li>
                </ul>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default EnhancedPlacementDashboard
