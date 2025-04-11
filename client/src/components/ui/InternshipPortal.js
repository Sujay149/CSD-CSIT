"use client"

import { useState } from "react"
import { Briefcase, Calendar, Clock, MapPin, Building, Search } from "lucide-react"

const InternshipPortal = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterDuration, setFilterDuration] = useState("all")
  const [filterType, setFilterType] = useState("all")
  const [filterLocation, setFilterLocation] = useState("all")

  // Sample internship data
  const internships = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "TechSolutions India",
      location: "Hyderabad",
      type: "Full-time",
      duration: "6 months",
      stipend: "₹15,000/month",
      deadline: "30 May 2025",
      description:
        "Looking for passionate software developers to work on cutting-edge web applications using React, Node.js, and MongoDB.",
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      title: "Machine Learning Intern",
      company: "DataMinds",
      location: "Bangalore",
      type: "Part-time",
      duration: "3 months",
      stipend: "₹12,000/month",
      deadline: "15 June 2025",
      description:
        "Join our ML team to work on real-world data science projects and gain hands-on experience with advanced algorithms.",
      skills: ["Python", "TensorFlow", "Data Analysis", "Statistics"],
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      title: "UI/UX Design Intern",
      company: "CreativeMinds",
      location: "Remote",
      type: "Full-time",
      duration: "4 months",
      stipend: "₹10,000/month",
      deadline: "10 June 2025",
      description:
        "Design intuitive user interfaces and experiences for web and mobile applications. Portfolio required.",
      skills: ["Figma", "Adobe XD", "UI Design", "Prototyping"],
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 4,
      title: "IoT Research Intern",
      company: "SRKR Research Lab",
      location: "On-campus",
      type: "Part-time",
      duration: "6 months",
      stipend: "₹8,000/month",
      deadline: "5 June 2025",
      description:
        "Work with faculty on cutting-edge IoT research projects. Great opportunity for ECE and CSE students.",
      skills: ["Arduino", "Raspberry Pi", "Sensors", "C/C++"],
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 5,
      title: "Digital Marketing Intern",
      company: "MarketBoost",
      location: "Hyderabad",
      type: "Remote",
      duration: "3 months",
      stipend: "₹7,000/month",
      deadline: "20 May 2025",
      description: "Learn and implement digital marketing strategies including SEO, SEM, and social media marketing.",
      skills: ["SEO", "Content Writing", "Social Media", "Analytics"],
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 6,
      title: "Embedded Systems Intern",
      company: "EmbedTech",
      location: "Vijayawada",
      type: "Full-time",
      duration: "6 months",
      stipend: "₹12,000/month",
      deadline: "25 May 2025",
      description: "Work on embedded systems projects for automotive and industrial applications.",
      skills: ["Embedded C", "Microcontrollers", "PCB Design", "RTOS"],
      logo: "/placeholder.svg?height=80&width=80",
    },
  ]

  // Filter internships based on search term and filters
  const filteredInternships = internships.filter((internship) => {
    const matchesSearch =
      internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesDuration =
      filterDuration === "all" ||
      (filterDuration === "short" && Number.parseInt(internship.duration) <= 3) ||
      (filterDuration === "medium" &&
        Number.parseInt(internship.duration) > 3 &&
        Number.parseInt(internship.duration) <= 5) ||
      (filterDuration === "long" && Number.parseInt(internship.duration) >= 6)

    const matchesType = filterType === "all" || internship.type.toLowerCase().includes(filterType.toLowerCase())

    const matchesLocation =
      filterLocation === "all" || internship.location.toLowerCase() === filterLocation.toLowerCase()

    return matchesSearch && matchesDuration && matchesType && matchesLocation
  })

  // Get unique locations for filter
  const locations = [...new Set(internships.map((internship) => internship.location))]

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto">
      <div className="flex items-center mb-8">
        <Briefcase className="h-8 w-8 text-yellow-500 mr-3" />
        <h2 className="text-2xl font-bold text-gray-800">Internship Opportunities</h2>
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
                placeholder="Search by title, company or skills"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <select
              value={filterDuration}
              onChange={(e) => setFilterDuration(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="all">All Durations</option>
              <option value="short">Short (≤ 3 months)</option>
              <option value="medium">Medium (4-5 months)</option>
              <option value="long">Long (≥ 6 months)</option>
            </select>

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="all">All Types</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="remote">Remote</option>
            </select>

            <select
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="all">All Locations</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {filteredInternships.length > 0 ? (
          filteredInternships.map((internship) => (
            <div
              key={internship.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 border border-gray-200"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-3/4">
                    <div className="flex items-center mb-4">
                      <img
                        src={internship.logo || "/placeholder.svg"}
                        alt={internship.company}
                        className="w-12 h-12 object-contain mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{internship.title}</h3>
                        <div className="flex items-center text-gray-600">
                          <Building className="h-4 w-4 mr-1" />
                          <span>{internship.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                        <span>{internship.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
                        <span>{internship.type}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
                        <span>{internship.duration}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{internship.description}</p>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/4 md:border-l md:border-gray-200 md:pl-6 mt-4 md:mt-0 flex flex-col justify-between">
                    <div>
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-700">Stipend:</h4>
                        <p className="text-lg font-semibold text-green-600">{internship.stipend}</p>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-700">Apply By:</h4>
                        <p className="text-red-600">{internship.deadline}</p>
                      </div>
                    </div>

                    <button className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No internships found matching your search criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("")
                setFilterDuration("all")
                setFilterType("all")
                setFilterLocation("all")
              }}
              className="mt-4 text-yellow-600 hover:text-yellow-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      <div className="mt-8 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <h3 className="font-semibold text-gray-800 mb-2">For SRKR Students</h3>
        <p className="text-gray-700">
          CSD&IT Departments has dedicated internship coordinators to help you secure the right opportunity. Visit
          the Training & Placement Cell or contact your department internship coordinator for personalized guidance.
        </p>
      </div>
    </div>
  )
}

export default InternshipPortal
