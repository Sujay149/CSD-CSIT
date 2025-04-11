"use client"

import { motion } from "framer-motion"

const FloatingShapes = () => {
  const shapes = [
    { type: "circle", size: 40, x: "10%", y: "20%", delay: 0, duration: 20 },
    { type: "circle", size: 25, x: "70%", y: "15%", delay: 5, duration: 25 },
    { type: "square", size: 35, x: "80%", y: "60%", delay: 2, duration: 22 },
    { type: "triangle", size: 45, x: "20%", y: "70%", delay: 8, duration: 18 },
    { type: "square", size: 20, x: "40%", y: "80%", delay: 4, duration: 23 },
    { type: "circle", size: 15, x: "60%", y: "40%", delay: 6, duration: 19 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: [0, -15, 0],
            x: [0, 15, 0],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          {shape.type === "circle" && <div className="w-full h-full rounded-full bg-[#006699]"></div>}
          {shape.type === "square" && <div className="w-full h-full bg-yellow-500 rounded-sm"></div>}
          {shape.type === "triangle" && (
            <div
              className="w-full h-full bg-[#0088cc]"
              style={{
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              }}
            ></div>
          )}
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingShapes
