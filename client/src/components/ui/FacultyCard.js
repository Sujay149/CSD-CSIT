"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, Globe, Award, BookOpen, FileText } from "lucide-react"

const FacultyCard = ({
  name,
  title,
  department,
  image,
  email,
  phone,
  website,
  education,
  specialization,
  publications,
  awards,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-4 cursor-pointer" onClick={toggleExpand}>
        <div className="flex items-center space-x-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={image || "/placeholder.svg?height=100&width=100"}
              alt={name}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg text-[#006699]">{name}</h3>
            <p className="text-sm text-gray-600">{title}</p>
            <p className="text-xs text-gray-500">{department}</p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-gray-200"
          >
            <div className="p-4 space-y-4">
              {/* Contact Information */}
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-gray-700">Contact Information</h4>
                <div className="space-y-1">
                  {email && (
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="h-4 w-4 text-[#006699]" />
                      <a href={`mailto:${email}`} className="text-[#006699] hover:underline">
                        {email}
                      </a>
                    </div>
                  )}
                  {phone && (
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="h-4 w-4 text-[#006699]" />
                      <a href={`tel:${phone}`} className="text-[#006699] hover:underline">
                        {phone}
                      </a>
                    </div>
                  )}
                  {website && (
                    <div className="flex items-center space-x-2 text-sm">
                      <Globe className="h-4 w-4 text-[#006699]" />
                      <a
                        href={website}
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
              {education && education.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-gray-700 flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    Education
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {education.map((edu, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1 h-1 rounded-full bg-gray-400 mt-2"></div>
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Specialization */}
              {specialization && (
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-gray-700">Areas of Specialization</h4>
                  <p className="text-sm">{specialization}</p>
                </div>
              )}

              {/* Publications */}
              {publications && publications.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-gray-700 flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    Selected Publications
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {publications.map((pub, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1 h-1 rounded-full bg-gray-400 mt-2"></div>
                        <span>{pub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Awards */}
              {awards && awards.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-gray-700 flex items-center">
                    <Award className="h-4 w-4 mr-1" />
                    Awards & Recognition
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {awards.map((award, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1 h-1 rounded-full bg-gray-400 mt-2"></div>
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-2 flex justify-center">
                <button onClick={toggleExpand} className="text-sm text-[#006699] hover:underline">
                  Show Less
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FacultyCard
