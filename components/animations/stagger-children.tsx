"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface StaggerChildrenProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
  threshold?: number
}

export function StaggerChildren({
  children,
  className = "",
  staggerDelay = 0.1,
  once = true,
  threshold = 0.1,
}: StaggerChildrenProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, threshold }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
  index?: number
}

export function StaggerItem({ children, className = "", index = 0 }: StaggerItemProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        mass: 0.5,
      },
    },
  }

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}
