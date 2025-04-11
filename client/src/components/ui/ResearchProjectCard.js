"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, Award, ChevronDown, ExternalLink } from "lucide-react"

const ResearchProjectCard = ({
  title,
  investigators,
  fundingAgency,
  amount,
  duration,
  status,
  description,
  objectives,
  outcomes,
  publications,
  collaborators,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  // Get status badge color
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "ongoing":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "proposed":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-4 cursor-pointer" onClick={toggleExpand}>
        <div className="flex justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(status)}`}>{status}</span>
              <span className="text-sm text-gray-500">{duration}</span>
            </div>
            <h3 className="font-bold text-lg text-[#006699]">{title}</h3>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{investigators}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="h-4 w-4" />
                <span>{fundingAgency}</span>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <ChevronDown className="h-5 w-5 text-gray-500" />
          </motion.div>
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
              {/* Project Details */}
              <div>
                <h4 className="font-medium text-[#006699] mb-2">Project Details</h4>
                <p className="text-sm text-gray-700">{description}</p>
                <div className="mt-2 p-2 bg-gray-50 rounded-md">
                  <div className="text-sm font-medium">Funding: ₹{amount.toLocaleString()}</div>
                </div>
              </div>

              {/* Objectives */}
              {objectives && objectives.length > 0 && (
                <div>
                  <h4 className="font-medium text-[#006699] mb-2">Objectives</h4>
                  <ul className="space-y-1 text-sm">
                    {objectives.map((objective, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#006699] mt-1.5"></div>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Outcomes */}
              {outcomes && outcomes.length > 0 && (
                <div>
                  <h4 className="font-medium text-[#006699] mb-2">Outcomes</h4>
                  <ul className="space-y-1 text-sm">
                    {outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#006699] mt-1.5"></div>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Publications */}
              {publications && publications.length > 0 && (
                <div>
                  <h4 className="font-medium text-[#006699] mb-2">Publications</h4>
                  <ul className="space-y-2 text-sm">
                    {publications.map((pub, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-5 h-5 rounded-full bg-[#006699]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-[#006699]">{index + 1}</span>
                        </div>
                        <div>
                          <span>{pub.title}</span>
                          {pub.url && (
                            <a
                              href={pub.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-2 inline-flex items-center text-[#006699] hover:underline"
                            >
                              <ExternalLink className="h-3 w-3 mr-1" />
                              View
                            </a>
                          )}
                          <div className="text-xs text-gray-500 mt-1">
                            {pub.journal}, {pub.year}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Collaborators */}
              {collaborators && collaborators.length > 0 && (
                <div>
                  <h4 className="font-medium text-[#006699] mb-2">Collaborators</h4>
                  <div className="flex flex-wrap gap-2">
                    {collaborators.map((collab, index) => (
                      <div key={index} className="bg-gray-100 rounded-full px-3 py-1 text-xs">
                        {collab}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ResearchProjectCard
