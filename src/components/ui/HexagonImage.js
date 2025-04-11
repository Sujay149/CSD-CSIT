"use client"

import { motion } from "framer-motion"

const HexagonImage = ({ src, alt, size = 64 }) => {
  return (
    <motion.div
      initial={{ rotate: -30, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      style={{
        width: size,
        height: size,
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      }}
      className="relative overflow-hidden bg-gradient-to-br from-[#006699] to-[#0088cc] flex-shrink-0"
    >
      <img src={src || "/placeholder.svg"} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
    </motion.div>
  )
}

export default HexagonImage
