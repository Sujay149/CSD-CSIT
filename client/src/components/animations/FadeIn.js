"use client"

import React, { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

const FadeIn = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.4,
  className = "",
  once = true,
  distance = 40,
}) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.2 })

  // Set the initial and animate properties based on the direction
  let initial = { opacity: 0 }
  if (direction === "up") initial = { ...initial, y: distance }
  if (direction === "down") initial = { ...initial, y: -distance }
  if (direction === "left") initial = { ...initial, x: distance }
  if (direction === "right") initial = { ...initial, x: -distance }

  const animate = { opacity: 1, y: 0, x: 0 }

  useEffect(() => {
    if (isInView) {
      controls.start(animate)
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      transition={{
        duration,
        delay,
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default React.memo(FadeIn)
