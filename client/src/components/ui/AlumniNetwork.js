"use client"

import { useState } from "react"
import { Users, Search, MapPin, Briefcase, GraduationCap, Calendar } from "lucide-react"

const AlumniNetwork = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterYear, setFilterYear] = useState("all")
  const [filterBranch, setFilterBranch] = useState("all")

  // Sample alumni data
  const alumniData = [
    {
      id: 1,
      name: "Rajesh Kumar",
      batch: "2018",
      branch: "CSE",
      company: "Google",
      location: "Bangalore",
      image: "/placeholder.svg?height=100&width=100",
      linkedin: "https://linkedin.com/in/rajesh-kumar",
    },
    {
      id: 2,
      name: "Priya Sharma",
      batch: "2019",
      branch: "ECE",
      company: "Microsoft",
      location: "Hyderabad",
      image: "/placeholder.svg?height=100&width=100",
      linkedin: "https://linkedin.com/in/priya-sharma",
    },
    {
      id: 3,
      name: "Suresh Reddy",
      batch: "2020",
      branch: "CSD",
      company: "Amazon",
      location: "Chennai",
      image: "/placeholder.svg?height=100&width=100",
      linkedin: "https://linkedin.com/in/suresh-reddy",
    },
    {
      id: 4,
      name: "Ananya Patel",
      batch: "2018",
      branch: "MECH",
      company: "Tata Motors",
      location: "Pune",
      image: "/placeholder.svg?height=100&width=100",
      linkedin: "https://linkedin.com/in/ananya-patel",
    },
    {
      id: 5,
      name: "Karthik Nair",
      batch: "2021",
      branch: "CSE",
      company: "Infosys",
      location: "Bangalore",
      image: "/placeholder.svg?height=100&width=100",
      linkedin: "https://linkedin.com/in/karthik-nair",
    },
    {
      id: 6,
      name: "Divya Rao",
      batch: "2020",
      branch: "CSD",
      company: "Wipro",
      location: "Hyderabad",
      image: "/placeholder.svg?height=100&width=100",
      linkedin: "https://linkedin.com/in/divya-rao",
    },
  ]

  // Filter alumni based on search term and filters
  const filteredAlumni = alumniData.filter((alumni) => {
    const matchesSearch =
      alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.location.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesYear = filterYear === "all" || alumni.batch === filterYear
    const matchesBranch = filterBranch === "all" || alumni.branch === filterBranch

    return matchesSearch && matchesYear && matchesBranch
  })

  // Available batch years and branches for filters
  const batchYears = [...new Set(alumniData.map((alumni) => alumni.batch))].sort()
  const branches = [...new Set(alumniData.map((alumni) => alumni.branch))].sort()

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto">
      <div className="flex items-center mb-8">
        <Users className="h-8 w-8 text-yellow-500 mr-3" />
        <h2 className="text-2xl font-bold text-gray-800">SRKR Alumni Network</h2>
      </div>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Search by name, company or location"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="md:w-1/4">
            <select
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="all">All Batches</option>
              {batchYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="md:w-1/4">
            <select
              value={filterBranch}
              onChange={(e) => setFilterBranch(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="all">All Branches</option>
              {branches.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAlumni.length > 0 ? (
          filteredAlumni.map((alumni) => (
            <div
              key={alumni.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="p-6">
                <div className="flex items-start">
                  <img
                    src={alumni.image || "/placeholder.svg"}
                    alt={alumni.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-yellow-500"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{alumni.name}</h3>
                    <div className="flex items-center text-gray-600 mt-1">
                      <Briefcase className="h-4 w-4 mr-1" />
                      <span>{alumni.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{alumni.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between">
                    <div className="flex items-center text-gray-600">
                      <GraduationCap className="h-4 w-4 mr-1" />
                      <span>{alumni.branch}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Batch of {alumni.batch}</span>
                    </div>
                  </div>

                  <a
                    href={alumni.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-md transition duration-300"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500 text-lg">No alumni found matching your search criteria.</p>
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Are you an SRKR alumnus?{" "}
          <a href="#" className="text-yellow-600 hover:underline font-medium">
            Register here
          </a>{" "}
          to join our alumni network.
        </p>
      </div>
    </div>
  )
}

export default AlumniNetwork
