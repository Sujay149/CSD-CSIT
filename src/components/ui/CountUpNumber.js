"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

const CountUpNumber = ({ start = 0, end, duration = 2000, prefix = "", suffix = "", decimals = 0 }) => {
  const [count, setCount] = useState(start)
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: true, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let startTime
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime
        const percentage = Math.min(progress / duration, 1)

        const currentCount = start + (end - start) * percentage
        setCount(currentCount)

        if (percentage < 1) {
          requestAnimationFrame(animateCount)
        } else {
          setHasAnimated(true)
        }
      }

      requestAnimationFrame(animateCount)
    }
  }, [isInView, start, end, duration, hasAnimated])

  const formatNumber = (num) => {
    return num.toFixed(decimals)
  }

  return (
    <span ref={countRef}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  )
}

export default CountUpNumber
