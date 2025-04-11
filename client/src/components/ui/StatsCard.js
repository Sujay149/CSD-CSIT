"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const StatsCard = ({ value, label, prefix = "", suffix = "", duration = 1.5 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    const start = 0
    if (isInView) {
      // Only animate if in view
      const end = Math.min(value, 9999) // Cap at 9999 to avoid performance issues

      // Calculate frame duration based on total duration and value
      const totalFrames = Math.min(end, 60) // Cap frames for better performance
      const frameDuration = (duration * 1000) / totalFrames

      // If we start the animation
      if (start === 0) {
        let animationFrame
        const counter = () => {
          const increment = Math.ceil(end / totalFrames)

          setCount((prevCount) => {
            const nextCount = Math.min(prevCount + increment, end)
            if (nextCount === end) {
              cancelAnimationFrame(animationFrame)
              return end
            }
            return nextCount
          })

          animationFrame = requestAnimationFrame(counter)
        }
        counter()

        return () => cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, value, duration])

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 text-center">
        <motion.div
          ref={ref}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.5,
          }}
          className="space-y-2"
        >
          <div className="text-3xl font-bold md:text-4xl text-[#006699]">
            {prefix}
            {count.toLocaleString()}
            {suffix}
          </div>
          <p className="text-sm text-muted-foreground md:text-base">{label}</p>
        </motion.div>
      </div>
    </div>
  )
}

export default React.memo(StatsCard)
