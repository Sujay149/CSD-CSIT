"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    batch: "CSE 2023",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "My time at CSD&IT Departments was transformative. The faculty's dedication and industry-focused curriculum prepared me well for my career at Microsoft.",
    company: "Microsoft",
    designation: "Software Engineer",
  },
  {
    id: 2,
    name: "Rahul Verma",
    batch: "ECE 2022",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The practical approach to learning at SRKR gave me an edge in the industry. The college's placement cell was instrumental in landing my dream job at Amazon.",
    company: "Amazon",
    designation: "Systems Engineer",
  },
  {
    id: 3,
    name: "Ananya Reddy",
    batch: "CSD 2023",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The Computer Science & Design program at SRKR provided me with both technical skills and design thinking. This unique combination helped me secure a position at Google.",
    company: "Google",
    designation: "UX Engineer",
  },
  {
    id: 4,
    name: "Karthik Naidu",
    batch: "Mechanical 2021",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The research opportunities and industry collaborations at SRKR helped me develop practical skills that are highly valued in the automotive industry.",
    company: "Tata Motors",
    designation: "Design Engineer",
  },
  {
    id: 5,
    name: "Sneha Patel",
    batch: "CSD 2022",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The entrepreneurship cell and innovation hub at SRKR inspired me to start my own tech venture. The mentorship I received was invaluable.",
    company: "TechInnovate",
    designation: "Founder & CEO",
  },
]

const StudentTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Student Success Stories</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <motion.div
            key={testimonials[currentIndex].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-xl p-8 md:p-10 relative z-10"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-yellow-400"
                />
              </div>

              <div className="flex-1">
                <div className="mb-4">
                  <svg className="w-10 h-10 text-yellow-400 mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg md:text-xl text-gray-700 italic">{testimonials[currentIndex].quote}</p>
                </div>

                <div className="mt-4">
                  <h4 className="text-xl font-bold text-primary">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].batch}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-sm font-medium text-gray-800">
                      {testimonials[currentIndex].designation} at
                    </span>
                    <span className="ml-1 text-sm font-bold text-blue-600">{testimonials[currentIndex].company}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-yellow-100 rounded-full opacity-50 z-0"></div>
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-blue-100 rounded-full opacity-50 z-0"></div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrev}
              className="bg-primary hover:bg-primary-dark text-white p-2 rounded-full shadow-md transition-all"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary scale-125" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="bg-primary hover:bg-primary-dark text-white p-2 rounded-full shadow-md transition-all"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentTestimonials
