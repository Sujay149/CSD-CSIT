"use client"
import { motion, useScroll } from "framer-motion"

const ScrollProgress = ({ color = "#ffcc00", height = 4 }) => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 origin-left"
      style={{
        scaleX: scrollYProgress,
        height,
        backgroundColor: color,
      }}
    />
  )
}

export default ScrollProgress
