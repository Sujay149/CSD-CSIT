"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const ParallaxSection = ({
  children,
  backgroundImage,
  overlayColor = "rgba(0, 102, 153, 0.8)",
  height = "500px",
  speed = 0.5,
}) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6])

  return (
    <motion.div ref={ref} className="relative overflow-hidden" style={{ height }}>
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          y,
        }}
      />
      <div className="absolute inset-0 w-full h-full" style={{ backgroundColor: overlayColor }} />
      <motion.div className="relative z-10 h-full flex items-center justify-center" style={{ opacity }}>
        {children}
      </motion.div>
    </motion.div>
  )
}

export default ParallaxSection
