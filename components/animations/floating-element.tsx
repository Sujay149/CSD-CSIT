"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingElementProps {
  children: ReactNode
  amplitude?: number
  duration?: number
}

export function FloatingElement({ children, amplitude = 10, duration = 5 }: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [`-${amplitude}px`, `${amplitude}px`, `-${amplitude}px`],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}
