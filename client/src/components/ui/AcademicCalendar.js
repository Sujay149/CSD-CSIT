"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, BookOpen, Award, Users } from "lucide-react"

const AcademicCalendar = ({ academicYear = "2023-2024" }) => {
  const [activeTab, setActiveTab] = useState("semester1")

  // Academic calendar data
  const calendarData = {
    semester1: [
      { date: "August 16, 2023", event: "Classes Begin", type: "academic" },
      { date: "September 5, 2023", event: "Last Day to Add/Drop Courses", type: "academic" },
      { date: "October 2, 2023", event: "Gandhi Jayanti (Holiday)", type: "holiday" },
      { date: "October 10-15, 2023", event: "Mid-Semester Examinations", type: "exam" },
      { date: "October 24, 2023", event: "Dussehra (Holiday)", type: "holiday" },
      { date: "November 12, 2023", event: "Diwali (Holiday)", type: "holiday" },
      { date: "November 20-25, 2023", event: "Technical Symposium", type: "event" },
      { date: "December 10, 2023", event: "Last Day of Classes", type: "academic" },
      { date: "December 15-30, 2023", event: "End-Semester Examinations", type: "exam" },
      { date: "December 31, 2023 - January 15, 2024", event: "Winter Break", type: "holiday" },
    ],
    semester2: [
      { date: "January 16, 2024", event: "Classes Begin", type: "academic" },
      { date: "January 26, 2024", event: "Republic Day (Holiday)", type: "holiday" },
      { date: "February 5, 2024", event: "Last Day to Add/Drop Courses", type: "academic" },
      { date: "February 15-20, 2024", event: "Annual Sports Meet", type: "event" },
      { date: "March 8, 2024", event: "Holi (Holiday)", type: "holiday" },
      { date: "March 15-20, 2024", event: "Mid-Semester Examinations", type: "exam" },
      { date: "April 5-10, 2024", event: "Cultural Festival", type: "event" },
      { date: "April 22, 2024", event: "Last Day of Classes", type: "academic" },
      { date: "May 1-15, 2024", event: "End-Semester Examinations", type: "exam" },
      { date: "May 16 - July 31, 2024", event: "Summer Break", type: "holiday" },
    ],
    special: [
      { date: "September 15, 2023", event: "Engineers Day Celebration", type: "event" },
      { date: "November 5, 2023", event: "Alumni Meet", type: "event" },
      { date: "December 5, 2023", event: "Industry-Academia Conclave", type: "event" },
      { date: "February 28, 2024", event: "National Science Day", type: "event" },
      { date: "March 25, 2024", event: "Hackathon", type: "event" },
      { date: "April 15, 2024", event: "Graduation Ceremony", type: "event" },
    ],
  }

  // Get event type icon
  const getEventIcon = (type) => {
    switch (type) {
      case "academic":
        return <BookOpen className="h-4 w-4" />
      case "exam":
        return <Award className="h-4 w-4" />
      case "event":
        return <Users className="h-4 w-4" />
      case "holiday":
        return <Calendar className="h-4 w-4" />
      default:
        return <Calendar className="h-4 w-4" />
    }
  }

  // Get event type color
  const getEventColor = (type) => {
    switch (type) {
      case "academic":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "exam":
        return "bg-red-100 text-red-800 border-red-200"
      case "event":
        return "bg-green-100 text-green-800 border-green-200"
      case "holiday":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-[#006699] text-white p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Academic Calendar {academicYear}</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab("semester1")}
              className={`px-3 py-1 rounded-md text-sm ${activeTab === "semester1" ? "bg-white text-[#006699]" : "bg-[#005588] text-white"}`}
            >
              Semester 1
            </button>
            <button
              onClick={() => setActiveTab("semester2")}
              className={`px-3 py-1 rounded-md text-sm ${activeTab === "semester2" ? "bg-white text-[#006699]" : "bg-[#005588] text-white"}`}
            >
              Semester 2
            </button>
            <button
              onClick={() => setActiveTab("special")}
              className={`px-3 py-1 rounded-md text-sm ${activeTab === "special" ? "bg-white text-[#006699]" : "bg-[#005588] text-white"}`}
            >
              Special Events
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-xs">Academic</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-xs">Exams</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs">Events</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span className="text-xs">Holidays</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {calendarData[activeTab].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`p-3 rounded-md border ${getEventColor(item.type)} flex items-start space-x-3`}
            >
              <div className="mt-0.5">{getEventIcon(item.type)}</div>
              <div>
                <div className="font-medium">{item.event}</div>
                <div className="text-sm">{item.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AcademicCalendar
