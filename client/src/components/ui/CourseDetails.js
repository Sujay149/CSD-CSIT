"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, BookOpen, Users } from "lucide-react"

const CourseDetails = ({
  courseCode,
  courseTitle,
  credits,
  department,
  instructor,
  description,
  prerequisites = [],
  objectives = [],
  outcomes = [],
  syllabus = [],
  textbooks = [],
  references = [],
}) => {
  const [activeSection, setActiveSection] = useState("description")
  const [expanded, setExpanded] = useState(false)

  const toggleExpand = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Course Header */}
      <div className="bg-[#006699] text-white p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-medium">{courseCode}</div>
            <h3 className="text-xl font-bold">{courseTitle}</h3>
          </div>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <div className="flex items-center space-x-1">
              <BookOpen className="h-4 w-4" />
              <span className="text-sm">{credits} Credits</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span className="text-sm">{department}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Brief */}
      <div className="p-4 border-b cursor-pointer" onClick={toggleExpand}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-[#006699]/10 flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-[#006699]" />
            </div>
            <div>
              <div className="font-medium">{instructor}</div>
              <div className="text-sm text-gray-500">Course Instructor</div>
            </div>
          </div>
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="h-5 w-5 text-gray-500" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Navigation Tabs */}
            <div className="border-b">
              <div className="flex overflow-x-auto hide-scrollbar">
                {[
                  { id: "description", label: "Description" },
                  { id: "objectives", label: "Objectives" },
                  { id: "outcomes", label: "Outcomes" },
                  { id: "syllabus", label: "Syllabus" },
                  { id: "textbooks", label: "Textbooks" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSection(tab.id)}
                    className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                      activeSection === tab.id
                        ? "text-[#006699] border-b-2 border-[#006699]"
                        : "text-gray-500 hover:text-[#006699]/70"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Sections */}
            <div className="p-4">
              {/* Description */}
              {activeSection === "description" && (
                <div className="space-y-4">
                  <p className="text-gray-700">{description}</p>

                  {prerequisites.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-medium text-[#006699] mb-2">Prerequisites</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {prerequisites.map((prereq, index) => (
                          <li key={index} className="text-sm">
                            {prereq}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Objectives */}
              {activeSection === "objectives" && (
                <div className="space-y-2">
                  <h4 className="font-medium text-[#006699] mb-2">Course Objectives</h4>
                  <ul className="space-y-2">
                    {objectives.map((objective, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-5 h-5 rounded-full bg-[#006699]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-[#006699]">{index + 1}</span>
                        </div>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Outcomes */}
              {activeSection === "outcomes" && (
                <div className="space-y-2">
                  <h4 className="font-medium text-[#006699] mb-2">Course Outcomes</h4>
                  <p className="text-sm text-gray-600 mb-2">After completing this course, students will be able to:</p>
                  <ul className="space-y-2">
                    {outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-5 h-5 rounded-full bg-[#006699]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-[#006699]">{index + 1}</span>
                        </div>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Syllabus */}
              {activeSection === "syllabus" && (
                <div className="space-y-4">
                  <h4 className="font-medium text-[#006699] mb-2">Course Syllabus</h4>
                  <div className="space-y-4">
                    {syllabus.map((unit, index) => (
                      <div key={index} className="border rounded-md p-3">
                        <h5 className="font-medium flex items-center">
                          <span className="w-6 h-6 rounded-full bg-[#006699] text-white flex items-center justify-center text-xs mr-2">
                            {index + 1}
                          </span>
                          {unit.title}
                        </h5>
                        <ul className="mt-2 space-y-1 pl-8 text-sm">
                          {unit.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="list-disc">
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Textbooks */}
              {activeSection === "textbooks" && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-[#006699] mb-2">Textbooks</h4>
                    <ul className="space-y-2">
                      {textbooks.map((book, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-5 h-5 rounded-full bg-[#006699]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium text-[#006699]">{index + 1}</span>
                          </div>
                          <span>{book}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {references.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-medium text-[#006699] mb-2">Reference Materials</h4>
                      <ul className="space-y-2">
                        {references.map((ref, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-5 h-5 rounded-full bg-[#006699]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-medium text-[#006699]">{index + 1}</span>
                            </div>
                            <span>{ref}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CourseDetails
