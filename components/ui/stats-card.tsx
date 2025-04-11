"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface StatsCardProps {
  value: number
  label: string
  suffix?: string
  icon?: React.ReactNode
  glassEffect?: boolean
  animated?: boolean
}

export function StatsCard({ value, label, suffix = "", icon, glassEffect = false, animated = false }: StatsCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView && animated) {
      let start = 0
      const end = value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start > end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    } else if (!animated) {
      setCount(value)
    }
  }, [isInView, value, animated])

  return (
    <div ref={ref}>
      <Card
        className={`p-6 text-center h-full ${glassEffect ? "bg-background/70 backdrop-blur-sm border-border/50" : ""}`}
      >
        <motion.div
          className="flex justify-center mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon && <div className="p-3 rounded-full bg-primary/10">{icon}</div>}
        </motion.div>
        <motion.div
          className="text-4xl font-bold text-primary mb-2 flex items-center justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span>{count}</span>
          <span>{suffix}</span>
        </motion.div>
        <motion.p
          className="text-muted-foreground"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.1 }}
        >
          {label}
        </motion.p>
      </Card>
    </div>
  )
}
