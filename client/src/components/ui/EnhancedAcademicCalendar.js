"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, ChevronLeft, ChevronRight, Clock, MapPin, Users, BookOpen, Award, Download } from "lucide-react"

const EnhancedAcademicCalendar = ({ academicYear = "2023-2024" }) => {
  const [activeTab, setActiveTab] = useState("semester1")
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [calendarView, setCalendarView] = useState("list") // 'list' or 'month'

  // Academic calendar data
  const calendarData = {
    semester1: [
      {
        date: "August 16, 2023",
        event: "Classes Begin",
        type: "academic",
        time: "8:00 AM",
        location: "All Departments",
        description:
          "First day of classes for the Fall semester. Students should check their schedules and arrive on time.",
      },
      {
        date: "September 5, 2023",
        event: "Last Day to Add/Drop Courses",
        type: "academic",
        time: "5:00 PM",
        location: "Online Portal",
        description:
          "Final day to add or drop courses without academic penalty. Changes must be submitted through the student portal.",
      },
      {
        date: "October 2, 2023",
        event: "Gandhi Jayanti (Holiday)",
        type: "holiday",
        time: "All Day",
        location: "Campus Closed",
        description: "National holiday celebrating the birth of Mahatma Gandhi. No classes will be held.",
      },
      {
        date: "October 10-15, 2023",
        event: "Mid-Semester Examinations",
        type: "exam",
        time: "As per Schedule",
        location: "Respective Departments",
        description: "Mid-semester examinations for all courses. Schedules will be posted one week prior.",
      },
      {
        date: "October 24, 2023",
        event: "Dussehra (Holiday)",
        type: "holiday",
        time: "All Day",
        location: "Campus Closed",
        description: "Festival holiday. No classes will be held.",
      },
      {
        date: "November 12, 2023",
        event: "Diwali (Holiday)",
        type: "holiday",
        time: "All Day",
        location: "Campus Closed",
        description: "Festival of lights celebration. Campus will be closed.",
      },
      {
        date: "November 20-25, 2023",
        event: "Technical Symposium",
        type: "event",
        time: "9:00 AM - 5:00 PM",
        location: "Technology Centre",
        description:
          "Annual technical symposium featuring workshops, guest lectures, and project exhibitions from all departments.",
      },
      {
        date: "December 10, 2023",
        event: "Last Day of Classes",
        type: "academic",
        time: "5:00 PM",
        location: "All Departments",
        description: "Final day of regular classes for the Fall semester.",
      },
      {
        date: "December 15-30, 2023",
        event: "End-Semester Examinations",
        type: "exam",
        time: "As per Schedule",
        location: "Examination Halls",
        description: "Final examinations for all courses. Schedules will be posted two weeks prior.",
      },
      {
        date: "December 31, 2023 - January 15, 2024",
        event: "Winter Break",
        type: "holiday",
        time: "All Day",
        location: "Campus Closed",
        description: "Winter break for students and faculty. Administrative offices will operate with limited staff.",
      },
    ],
    semester2: [
      {
        date: "January 16, 2024",
        event: "Classes Begin",
        type: "academic",
        time: "8:00 AM",
        location: "All Departments",
        description: "First day of classes for the Spring semester.",
      },
      {
        date: "January 26, 2024",
        event: "Republic Day (Holiday)",
        type: "holiday",
        time: "All Day",
        location: "Campus Closed",
        description: "National holiday celebrating the adoption of the Constitution of India.",
      },
      {
        date: "February 5, 2024",
        event: "Last Day to Add/Drop Courses",
        type: "academic",
        time: "5:00 PM",
        location: "Online Portal",
        description: "Final day to add or drop courses for the Spring semester.",
      },
      {
        date: "February 15-20, 2024",
        event: "Annual Sports Meet",
        type: "event",
        time: "9:00 AM - 6:00 PM",
        location: "Sports Complex",
        description: "Annual sports competition featuring various indoor and outdoor sports events.",
      },
      {
        date: "March 8, 2024",
        event: "Holi (Holiday)",
        type: "holiday",
        time: "All Day",
        location: "Campus Closed",
        description: "Festival of colors celebration. No classes will be held.",
      },
      {
        date: "March 15-20, 2024",
        event: "Mid-Semester Examinations",
        type: "exam",
        time: "As per Schedule",
        location: "Respective Departments",
        description: "Mid-semester examinations for all Spring semester courses.",
      },
      {
        date: "April 5-10, 2024",
        event: "Cultural Festival",
        type: "event",
        time: "10:00 AM - 9:00 PM",
        location: "Campus Grounds",
        description: "Annual cultural festival featuring performances, competitions, and exhibitions.",
      },
      {
        date: "April 22, 2024",
        event: "Last Day of Classes",
        type: "academic",
        time: "5:00 PM",
        location: "All Departments",
        description: "Final day of regular classes for the Spring semester.",
      },
      {
        date: "May 1-15, 2024",
        event: "End-Semester Examinations",
        type: "exam",
        time: "As per Schedule",
        location: "Examination Halls",
        description: "Final examinations for all Spring semester courses.",
      },
      {
        date: "May 16 - July 31, 2024",
        event: "Summer Break",
        type: "holiday",
        time: "All Day",
        location: "Campus Closed",
        description: "Summer break for students. Faculty will be involved in research and development activities.",
      },
    ],
    special: [
      {
        date: "September 15, 2023",
        event: "Engineers Day Celebration",
        type: "event",
        time: "10:00 AM - 4:00 PM",
        location: "Main Auditorium",
        description: "Celebration of Engineers Day with technical talks, competitions, and awards ceremony.",
      },
      {
        date: "November 5, 2023",
        event: "Alumni Meet",
        type: "event",
        time: "11:00 AM - 6:00 PM",
        location: "Campus Grounds",
        description: "Annual alumni gathering with networking opportunities, talks, and cultural programs.",
      },
      {
        date: "December 5, 2023",
        event: "Industry-Academia Conclave",
        type: "event",
        time: "9:00 AM - 5:00 PM",
        location: "Technology Centre",
        description:
          "Interaction between industry professionals and academic community to bridge the gap between education and industry requirements.",
      },
      {
        date: "February 28, 2024",
        event: "National Science Day",
        type: "event",
        time: "10:00 AM - 4:00 PM",
        location: "Science Complex",
        description: "Celebration of National Science Day with exhibitions, demonstrations, and competitions.",
      },
      {
        date: "March 25, 2024",
        event: "Hackathon",
        type: "event",
        time: "9:00 AM (24 hours)",
        location: "Technology Centre",
        description:
          "24-hour coding competition where students can showcase their programming and problem-solving skills.",
      },
      {
        date: "April 15, 2024",
        event: "Graduation Ceremony",
        type: "event",
        time: "10:00 AM - 1:00 PM",
        location: "Main Auditorium",
        description: "Annual graduation ceremony for the outgoing batch of students.",
      },
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

  // Get event type badge color
  const getEventBadgeColor = (type) => {
    switch (type) {
      case "academic":
        return "bg-blue-500 text-white"
      case "exam":
        return "bg-red-500 text-white"
      case "event":
        return "bg-green-500 text-white"
      case "holiday":
        return "bg-yellow-500 text-black"
      default:
        return "bg-gray-500 text-white"
    }
  }

  // Navigate to previous month
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  // Navigate to next month
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  // Month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  // Day names
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  // Get days in month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate()
  }

  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay()
  }

  // Parse date string to Date object
  const parseDate = (dateString) => {
    // Handle date ranges like "October 10-15, 2023"
    if (dateString.includes("-") && !dateString.includes(" - ")) {
      const parts = dateString.split("-")
      const datePart = parts[0].trim().split(" ")
      const day = Number.parseInt(datePart[1])
      const month = monthNames.findIndex((m) => m.toLowerCase() === datePart[0].toLowerCase())
      const year = Number.parseInt(parts[1].trim().split(",")[1])
      return new Date(year, month, day)
    }

    // Handle date ranges with " - " like "December 31, 2023 - January 15, 2024"
    if (dateString.includes(" - ")) {
      const startDate = dateString.split(" - ")[0]
      const dateParts = startDate.split(" ")
      const month = monthNames.findIndex((m) => m.toLowerCase() === dateParts[0].toLowerCase())
      const day = Number.parseInt(dateParts[1].replace(",", ""))
      const year = Number.parseInt(dateParts[2])
      return new Date(year, month, day)
    }

    // Handle regular dates like "August 16, 2023"
    const dateParts = dateString.split(" ")
    const month = monthNames.findIndex((m) => m.toLowerCase() === dateParts[0].toLowerCase())
    const day = Number.parseInt(dateParts[1].replace(",", ""))
    const year = Number.parseInt(dateParts[2])
    return new Date(year, month, day)
  }

  // Check if a date has events
  const getEventsForDate = (year, month, day) => {
    const date = new Date(year, month, day)
    const events = []

    // Check all tabs for events
    Object.keys(calendarData).forEach((tab) => {
      calendarData[tab].forEach((event) => {
        const eventDate = parseDate(event.date)
        if (eventDate.getDate() === day && eventDate.getMonth() === month && eventDate.getFullYear() === year) {
          events.push(event)
        }
      })
    })

    return events
  }

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth)
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth)
    const days = []
    const today = new Date()

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 p-1"></div>)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()

      const events = getEventsForDate(currentYear, currentMonth, day)
      const hasEvents = events.length > 0

      days.push(
        <div key={`day-${day}`} className={`h-24 p-1 border border-gray-200 ${isToday ? "bg-blue-50" : ""}`}>
          <div className="flex justify-between items-start">
            <span
              className={`inline-block w-6 h-6 text-center ${isToday ? "bg-blue-500 text-white rounded-full" : ""}`}
            >
              {day}
            </span>
            {hasEvents && (
              <div className="flex flex-wrap gap-1 justify-end">
                {events.slice(0, 2).map((event, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${getEventBadgeColor(event.type).split(" ")[0]}`}
                    title={event.event}
                  ></div>
                ))}
                {events.length > 2 && (
                  <div className="w-2 h-2 rounded-full bg-gray-500" title={`${events.length - 2} more events`}></div>
                )}
              </div>
            )}
          </div>
          <div className="mt-1 overflow-hidden max-h-16">
            {events.slice(0, 2).map((event, i) => (
              <div
                key={i}
                className="text-xs truncate cursor-pointer hover:text-blue-600"
                onClick={() => setSelectedEvent(event)}
              >
                {event.event}
              </div>
            ))}
            {events.length > 2 && (
              <div
                className="text-xs text-gray-500 cursor-pointer hover:text-blue-600"
                onClick={() => {
                  // Show a modal with all events for this day
                  // For simplicity, we'll just select the first event
                  setSelectedEvent(events[0])
                }}
              >
                +{events.length - 2} more
              </div>
            )}
          </div>
        </div>,
      )
    }

    return days
  }

  // Download calendar as ICS file
  const downloadCalendar = () => {
    // Create ICS content
    let icsContent = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//CSD&IT Departments//Academic Calendar//EN\n"

    // Add all events
    Object.keys(calendarData).forEach((tab) => {
      calendarData[tab].forEach((event) => {
        const eventDate = parseDate(event.date)

        // Format date as YYYYMMDD
        const formatDate = (date) => {
          const year = date.getFullYear()
          const month = (date.getMonth() + 1).toString().padStart(2, "0")
          const day = date.getDate().toString().padStart(2, "0")
          return `${year}${month}${day}`
        }

        icsContent += "BEGIN:VEVENT\n"
        icsContent += `SUMMARY:${event.event}\n`
        icsContent += `DTSTART:${formatDate(eventDate)}\n`
        icsContent += `DTEND:${formatDate(eventDate)}\n`
        icsContent += `DESCRIPTION:${event.description || ""}\n`
        icsContent += `LOCATION:${event.location || ""}\n`
        icsContent += "END:VEVENT\n"
      })
    })

    icsContent += "END:VCALENDAR"

    // Create and download the file
    const blob = new Blob([icsContent], { type: "text/calendar" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `SRKR_Academic_Calendar_${academicYear}.ics`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Calendar header */}
      <div className="bg-[#006699] text-white p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Academic Calendar {academicYear}</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCalendarView("list")}
              className={`px-3 py-1 rounded-md text-sm ${calendarView === "list" ? "bg-white text-[#006699]" : "bg-[#005588] text-white"}`}
            >
              List View
            </button>
            <button
              onClick={() => setCalendarView("month")}
              className={`px-3 py-1 rounded-md text-sm ${calendarView === "month" ? "bg-white text-[#006699]" : "bg-[#005588] text-white"}`}
            >
              Month View
            </button>
          </div>
        </div>
      </div>

      {/* List View */}
      {calendarView === "list" && (
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
            <button onClick={downloadCalendar} className="flex items-center text-sm text-[#006699] hover:underline">
              <Download className="h-4 w-4 mr-1" />
              Download Calendar
            </button>
          </div>

          <div className="mb-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setActiveTab("semester1")}
                className={`px-3 py-1 rounded-md text-sm ${activeTab === "semester1" ? "bg-[#006699] text-white" : "bg-gray-100 text-gray-800"}`}
              >
                Semester 1
              </button>
              <button
                onClick={() => setActiveTab("semester2")}
                className={`px-3 py-1 rounded-md text-sm ${activeTab === "semester2" ? "bg-[#006699] text-white" : "bg-gray-100 text-gray-800"}`}
              >
                Semester 2
              </button>
              <button
                onClick={() => setActiveTab("special")}
                className={`px-3 py-1 rounded-md text-sm ${activeTab === "special" ? "bg-[#006699] text-white" : "bg-gray-100 text-gray-800"}`}
              >
                Special Events
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {calendarData[activeTab].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-3 rounded-md border ${getEventColor(item.type)} flex items-start space-x-3 cursor-pointer hover:shadow-md transition-all duration-200`}
                onClick={() => setSelectedEvent(item)}
              >
                <div className="mt-0.5">{getEventIcon(item.type)}</div>
                <div className="flex-grow">
                  <div className="font-medium">{item.event}</div>
                  <div className="text-sm">{item.date}</div>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{item.time}</span>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${getEventBadgeColor(item.type)}`}>
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Month View */}
      {calendarView === "month" && (
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={prevMonth}
                className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Previous month"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <h3 className="text-lg font-medium">
                {monthNames[currentMonth]} {currentYear}
              </h3>

              <button
                onClick={nextMonth}
                className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Next month"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <button onClick={downloadCalendar} className="flex items-center text-sm text-[#006699] hover:underline">
              <Download className="h-4 w-4 mr-1" />
              Download Calendar
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames.map((day) => (
              <div key={day} className="h-10 flex items-center justify-center font-medium text-sm">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-1">{generateCalendarDays()}</div>
        </div>
      )}

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`px-3 py-1 rounded-full text-xs font-medium inline-block mb-2 ${getEventBadgeColor(selectedEvent.type)}`}
              >
                {selectedEvent.type.charAt(0).toUpperCase() + selectedEvent.type.slice(1)}
              </div>
              <h3 className="text-xl font-bold mb-2">{selectedEvent.event}</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-start space-x-2">
                  <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <div className="font-medium">Date</div>
                    <div className="text-sm text-gray-600">{selectedEvent.date}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <div className="font-medium">Time</div>
                    <div className="text-sm text-gray-600">{selectedEvent.time}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-gray-600">{selectedEvent.location}</div>
                  </div>
                </div>
              </div>
              {selectedEvent.description && (
                <div className="border-t pt-4">
                  <div className="font-medium mb-1">Description</div>
                  <p className="text-sm text-gray-600">{selectedEvent.description}</p>
                </div>
              )}
              <div className="mt-6 flex justify-end">
                <button
                  className="px-4 py-2 bg-[#006699] text-white rounded-md hover:bg-[#005588] transition-colors"
                  onClick={() => setSelectedEvent(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default EnhancedAcademicCalendar
