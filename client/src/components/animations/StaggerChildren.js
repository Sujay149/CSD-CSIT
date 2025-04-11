"use client"

import React, { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export const StaggerChildren = ({ children, delay = 0, staggerDelay = 0.05, className = "", once = true }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.1 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  useEffect(() => {
    if (isInView) {
      controls.start("show")
    }
  }, [isInView, controls])

  return (
    <motion.div ref={ref} variants={container} initial="hidden" animate={controls} className={className}>
      {children}
    </motion.div>
  )
}

export const StaggerItem = ({ children, className = "" }) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  }

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}

export default React.memo(StaggerChildren)
