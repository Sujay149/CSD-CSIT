"use client"
import { motion } from "framer-motion"
import { Building, TrendingUp, Award } from "lucide-react"
import CountUpNumber from "./CountUpNumber"

const DepartmentPlacementStats = ({ department }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="bg-[#006699] text-white p-4">
        <h3 className="text-lg font-bold">{department.name}</h3>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 rounded-lg p-3 text-center">
            <div className="text-xl font-bold text-[#006699]">
              <CountUpNumber end={department.placementRate} suffix="%" />
            </div>
            <div className="text-sm text-gray-600">Placement Rate</div>
          </div>

          <div className="bg-green-50 rounded-lg p-3 text-center">
            <div className="text-xl font-bold text-[#006699]">
              <CountUpNumber end={department.averagePackage} prefix="₹" suffix=" LPA" decimals={1} />
            </div>
            <div className="text-sm text-gray-600">Average Package</div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Award className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="font-medium">Highest Package:</span>
            <span className="ml-2 font-bold text-[#006699]">₹{department.highestPackage} LPA</span>
          </div>

          <div className="flex items-start">
            <Building className="h-5 w-5 text-[#006699] mt-1 mr-2 flex-shrink-0" />
            <div>
              <span className="font-medium">Top Recruiters:</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {department.topRecruiters.map((company, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600">{department.description}</p>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <a
            href={`/programs/${department.id}`}
            className="text-[#006699] hover:underline text-sm font-medium flex items-center"
          >
            <TrendingUp className="h-4 w-4 mr-1" />
            View Program Details
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default DepartmentPlacementStats
