"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export function HeroBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [particles, setParticles] = useState<React.ReactNode[]>([])
  const particlesRef = useRef<HTMLDivElement>(null)

  // Generate particles on client-side only to avoid hydration mismatch
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }).map((_, i) => {
      const size = Math.random() * 4 + 1
      const x = Math.random() * 100
      const y = Math.random() * 100
      const duration = Math.random() * 20 + 10
      const delay = Math.random() * 5

      return (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white opacity-70"
          style={{
            width: size,
            height: size,
            left: `${x}%`,
            top: `${y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration,
            repeat: Number.POSITIVE_INFINITY,
            delay,
          }}
        />
      )
    })

    setParticles(newParticles)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      {/* Approvals & Accreditations Bar */}
      <div className="absolute top-0 left-0 right-0 bg-primary/90 text-white text-xs py-1 px-4 z-20">
        <div className="container mx-auto flex flex-wrap justify-center gap-x-4">
          <span>Approvals & Accreditations</span>
          <span>|</span>
          <span>EAPCET / ECET CODE: SRKR</span>
          <span>|</span>
          <span>M.TECH CODE: SRKR1</span>
          <span>|</span>
          <span>BBA CODE: 17086</span>
        </div>
      </div>

      {/* Stunning gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background/80 z-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(0, 102, 204, 0.15) 0%, rgba(0, 0, 0, 0) 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 153, 204, 0.1) 0%, rgba(0, 0, 0, 0) 50%),
            radial-gradient(circle at 50% 50%, rgba(0, 102, 153, 0.05) 0%, rgba(0, 0, 0, 0) 70%),
            linear-gradient(180deg, rgba(0, 102, 153, 0.1) 0%, rgba(0, 0, 0, 0) 100%)
          `,
        }}
      />

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-40 z-10"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(0, 102, 153, 0.3) 0%, rgba(0, 0, 0, 0) 70%),
            radial-gradient(circle at 80% 80%, rgba(0, 153, 204, 0.2) 0%, rgba(0, 0, 0, 0) 70%)
          `,
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Mouse-following gradient */}
      <motion.div
        className="absolute opacity-30 pointer-events-none z-10"
        style={{
          background: "radial-gradient(circle at center, rgba(0, 102, 153, 0.4) 0%, rgba(0, 0, 0, 0) 50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-10"></div>

      {/* Decorative shapes */}
      <motion.div
        className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-[10%] w-80 h-80 rounded-full bg-secondary/5 blur-3xl z-0"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      {/* Animated particles - client-side only */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden z-10">
        {particles}
      </div>

      {/* Light beams */}
      <div className="absolute inset-0 overflow-hidden opacity-10 z-10">
        <motion.div
          className="absolute top-0 left-1/4 w-1 h-[30vh] bg-gradient-to-b from-primary via-primary/50 to-transparent"
          animate={{ height: ["30vh", "40vh", "30vh"], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute top-0 left-2/4 w-1 h-[40vh] bg-gradient-to-b from-primary via-primary/50 to-transparent"
          animate={{ height: ["40vh", "50vh", "40vh"], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 2 }}
        />
        <motion.div
          className="absolute top-0 left-3/4 w-1 h-[35vh] bg-gradient-to-b from-primary via-primary/50 to-transparent"
          animate={{ height: ["35vh", "45vh", "35vh"], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
        />
      </div>
    </div>
  )
}
