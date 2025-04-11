"use client"

import { motion } from "framer-motion"

const GradientCard = ({ title, description, index = 0 }) => {
  const gradients = [
    "from-blue-50 to-blue-100 border-blue-200",
    "from-green-50 to-green-100 border-green-200",
    "from-purple-50 to-purple-100 border-purple-200",
  ]

  const gradient = gradients[index % gradients.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      className={`bg-gradient-to-br ${gradient} p-4 rounded-lg border shadow-sm transition-all duration-300`}
    >
      <h5 className="font-medium text-[#006699] mb-2">{title}</h5>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  )
}

export default GradientCard
