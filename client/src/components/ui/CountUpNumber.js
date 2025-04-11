"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

const CountUpNumber = ({
  end,
  start = 0,
  duration = 2,
  delay = 0,
  prefix = "",
  suffix = "",
  className = "",
  formatter = (value) => value.toLocaleString(),
}) => {
  const [count, setCount] = useState(start)
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 })
  const countRef = useRef(null)

  useEffect(() => {
    if (!isInView) return

    let startTime
    let animationFrame

    // Delay the animation start if needed
    const timer = setTimeout(() => {
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

        // Use easeOutExpo for a nice deceleration effect
        const easeOutExpo = 1 - Math.pow(2, -10 * progress)
        const currentCount = Math.floor(start + (end - start) * easeOutExpo)

        setCount(currentCount)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }, delay * 1000)

    return () => {
      clearTimeout(timer)
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, start, end, duration, delay])

  return (
    <span ref={nodeRef} className={className}>
      {prefix}
      {formatter(count)}
      {suffix}
    </span>
  )
}

export default CountUpNumber
