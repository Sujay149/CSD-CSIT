"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, CalendarIcon } from "lucide-react"

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTHS = [
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

const EventCalendar = ({ events = [] }) => {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [selectedDate, setSelectedDate] = useState(null)

  // Get days in month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate()
  }

  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay()
  }

  // Navigate to previous month
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
    setSelectedDate(null)
  }

  // Navigate to next month
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
    setSelectedDate(null)
  }

  // Check if a date has events
  const hasEvents = (day) => {
    const date = new Date(currentYear, currentMonth, day)
    return events.some((event) => {
      const eventDate = new Date(event.date)
      return (
        eventDate.getDate() === day && eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear
      )
    })
  }

  // Get events for a specific day
  const getEventsForDay = (day) => {
    const date = new Date(currentYear, currentMonth, day)
    return events.filter((event) => {
      const eventDate = new Date(event.date)
      return (
        eventDate.getDate() === day && eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear
      )
    })
  }

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth)
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth)
    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 p-1"></div>)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()

      const isSelected =
        selectedDate &&
        day === selectedDate.day &&
        currentMonth === selectedDate.month &&
        currentYear === selectedDate.year

      const dayHasEvents = hasEvents(day)

      days.push(
        <motion.div
          key={`day-${day}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`h-10 p-1 relative cursor-pointer ${isToday ? "font-bold" : ""} ${
            isSelected ? "bg-[#006699]/10 rounded" : ""
          }`}
          onClick={() => setSelectedDate({ day, month: currentMonth, year: currentYear })}
        >
          <div className="flex items-center justify-center h-full">
            {day}
            {dayHasEvents && (
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#006699]"></div>
            )}
          </div>
        </motion.div>,
      )
    }

    return days
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Calendar header */}
      <div className="bg-[#006699] text-white p-4">
        <div className="flex items-center justify-between">
          <button
            onClick={prevMonth}
            className="p-1 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <h3 className="text-lg font-bold">
            {MONTHS[currentMonth]} {currentYear}
          </h3>

          <button
            onClick={nextMonth}
            className="p-1 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Next month"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Calendar grid */}
      <div className="p-4">
        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {DAYS.map((day) => (
            <div key={day} className="h-10 flex items-center justify-center font-medium text-sm">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-1">{generateCalendarDays()}</div>
      </div>

      {/* Events for selected day */}
      <AnimatePresence>
        {selectedDate && getEventsForDay(selectedDate.day).length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-gray-200 overflow-hidden"
          >
            <div className="p-4">
              <h4 className="font-medium flex items-center mb-2">
                <CalendarIcon className="h-4 w-4 mr-1" />
                Events on {MONTHS[selectedDate.month]} {selectedDate.day}, {selectedDate.year}
              </h4>
              <div className="space-y-2">
                {getEventsForDay(selectedDate.day).map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-2 bg-[#006699]/5 rounded-md"
                  >
                    <h5 className="font-medium text-[#006699]">{event.title}</h5>
                    <p className="text-sm text-gray-600">{event.time || "All day"}</p>
                    {event.location && <p className="text-xs text-gray-500">{event.location}</p>}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default EventCalendar
