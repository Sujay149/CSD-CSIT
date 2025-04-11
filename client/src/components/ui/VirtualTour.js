"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Info } from "lucide-react"

const VirtualTour = ({ tourSpots }) => {
  const [currentSpot, setCurrentSpot] = useState(0)
  const [showInfo, setShowInfo] = useState(false)
  const containerRef = useRef(null)

  const nextSpot = () => {
    setCurrentSpot((prev) => (prev === tourSpots.length - 1 ? 0 : prev + 1))
    setShowInfo(false)
  }

  const prevSpot = () => {
    setCurrentSpot((prev) => (prev === 0 ? tourSpots.length - 1 : prev - 1))
    setShowInfo(false)
  }

  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        nextSpot()
      } else if (e.key === "ArrowLeft") {
        prevSpot()
      } else if (e.key === "i") {
        toggleInfo()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-lg" ref={containerRef}>
      <motion.div
        key={currentSpot}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${tourSpots[currentSpot].image})` }}
      />

      <div className="absolute inset-0 bg-black/20" />

      {/* Navigation controls */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
        onClick={prevSpot}
        aria-label="Previous location"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
        onClick={nextSpot}
        aria-label="Next location"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <button
        className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
        onClick={toggleInfo}
        aria-label={showInfo ? "Hide information" : "Show information"}
      >
        <Info className="h-6 w-6" />
      </button>

      {/* Location indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {tourSpots.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSpot ? "bg-white" : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => setCurrentSpot(index)}
            aria-label={`Go to location ${index + 1}`}
          />
        ))}
      </div>

      {/* Location information */}
      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20 }}
            className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-6 backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold mb-2">{tourSpots[currentSpot].title}</h3>
            <p className="text-white/90 mb-4">{tourSpots[currentSpot].description}</p>
            {tourSpots[currentSpot].features && (
              <div className="grid grid-cols-2 gap-2 text-sm">
                {tourSpots[currentSpot].features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default VirtualTour
