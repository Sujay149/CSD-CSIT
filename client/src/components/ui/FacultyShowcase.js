"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Mail, Phone, Globe, Award, BookOpen, FileText, X } from "lucide-react"

const FacultyShowcase = ({ faculty }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedFaculty, setSelectedFaculty] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const carouselRef = useRef(null)

  const nextFaculty = () => {
    setCurrentIndex((prevIndex) => (prevIndex === faculty.length - 1 ? 0 : prevIndex + 1))
  }

  const prevFaculty = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? faculty.length - 1 : prevIndex - 1))
  }

  const openModal = (index) => {
    setSelectedFaculty(faculty[index])
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"
  }

  // Calculate visible faculty members based on screen size
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) return 4 // xl
      if (window.innerWidth >= 1024) return 3 // lg
      if (window.innerWidth >= 768) return 2 // md
      return 1 // sm and below
    }
    return 3 // Default for SSR
  }

  const visibleCount = getVisibleCount()

  // Get visible faculty members
  const getVisibleFaculty = () => {
    const result = []
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % faculty.length
      result.push({ ...faculty[index], index })
    }
    return result
  }

  const visibleFaculty = getVisibleFaculty()

  return (
    <div className="relative">
      {/* Faculty Carousel */}
      <div className="relative overflow-hidden" ref={carouselRef}>
        <div className="flex">
          <AnimatePresence initial={false} mode="popLayout">
            {visibleFaculty.map((member, i) => (
              <motion.div
                key={`faculty-${member.index}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 flex-shrink-0"
              >
                <div
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => openModal(member.index)}
                >
                  <div className="aspect-square relative">
                    <img
                      src={member.image || "/placeholder.svg?height=300&width=300"}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-white font-bold text-lg">{member.name}</h3>
                      <p className="text-white/80 text-sm">{member.title}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600 line-clamp-2">{member.department}</p>
                    <div className="mt-2 flex items-center text-xs text-[#006699]">
                      <span className="border border-[#006699] rounded-full px-2 py-0.5">View Profile</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevFaculty}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
        aria-label="Previous faculty"
      >
        <ChevronLeft className="h-6 w-6 text-[#006699]" />
      </button>
      <button
        onClick={nextFaculty}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
        aria-label="Next faculty"
      >
        <ChevronRight className="h-6 w-6 text-[#006699]" />
      </button>

      {/* Faculty Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedFaculty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white rounded-full p-1"
                onClick={closeModal}
              >
                <X className="h-5 w-5 text-gray-800" />
              </button>

              <div className="md:w-1/3 relative">
                <div className="h-64 md:h-full">
                  <img
                    src={selectedFaculty.image || "/placeholder.svg?height=600&width=400"}
                    alt={selectedFaculty.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="md:w-2/3 p-6 overflow-y-auto">
                <h2 className="text-2xl font-bold text-[#006699] mb-1">{selectedFaculty.name}</h2>
                <p className="text-lg text-gray-700 mb-4">{selectedFaculty.title}</p>
                <p className="text-gray-600 mb-6">{selectedFaculty.department}</p>

                <div className="space-y-6">
                  {/* Contact Information */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg flex items-center border-b pb-2">
                      <Mail className="h-5 w-5 mr-2 text-[#006699]" />
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedFaculty.email && (
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-[#006699]" />
                          <a href={`mailto:${selectedFaculty.email}`} className="text-[#006699] hover:underline">
                            {selectedFaculty.email}
                          </a>
                        </div>
                      )}
                      {selectedFaculty.phone && (
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-[#006699]" />
                          <a href={`tel:${selectedFaculty.phone}`} className="text-[#006699] hover:underline">
                            {selectedFaculty.phone}
                          </a>
                        </div>
                      )}
                      {selectedFaculty.website && (
                        <div className="flex items-center space-x-2">
                          <Globe className="h-4 w-4 text-[#006699]" />
                          <a
                            href={selectedFaculty.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#006699] hover:underline"
                          >
                            Personal Website
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Education */}
                  {selectedFaculty.education && selectedFaculty.education.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg flex items-center border-b pb-2">
                        <BookOpen className="h-5 w-5 mr-2 text-[#006699]" />
                        Education
                      </h3>
                      <ul className="space-y-1 pl-7 list-disc">
                        {selectedFaculty.education.map((edu, index) => (
                          <li key={index}>{edu}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Research Interests */}
                  {selectedFaculty.researchInterests && selectedFaculty.researchInterests.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg flex items-center border-b pb-2">
                        <BookOpen className="h-5 w-5 mr-2 text-[#006699]" />
                        Research Interests
                      </h3>
                      <ul className="space-y-1 pl-7 list-disc">
                        {selectedFaculty.researchInterests.map((interest, index) => (
                          <li key={index}>{interest}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Publications */}
                  {selectedFaculty.publications && selectedFaculty.publications.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg flex items-center border-b pb-2">
                        <FileText className="h-5 w-5 mr-2 text-[#006699]" />
                        Selected Publications
                      </h3>
                      <ul className="space-y-2">
                        {selectedFaculty.publications.map((pub, index) => (
                          <li key={index} className="pl-7 relative">
                            <span className="absolute left-0 top-0 text-[#006699] font-medium">{index + 1}.</span>
                            <p>{pub}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Awards */}
                  {selectedFaculty.awards && selectedFaculty.awards.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg flex items-center border-b pb-2">
                        <Award className="h-5 w-5 mr-2 text-[#006699]" />
                        Awards & Recognition
                      </h3>
                      <ul className="space-y-1 pl-7 list-disc">
                        {selectedFaculty.awards.map((award, index) => (
                          <li key={index}>{award}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Courses Taught */}
                  {selectedFaculty.coursesTaught && selectedFaculty.coursesTaught.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg flex items-center border-b pb-2">
                        <BookOpen className="h-5 w-5 mr-2 text-[#006699]" />
                        Courses Taught
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {selectedFaculty.coursesTaught.map((course, index) => (
                          <div key={index} className="bg-gray-50 p-2 rounded">
                            {course}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FacultyShowcase
