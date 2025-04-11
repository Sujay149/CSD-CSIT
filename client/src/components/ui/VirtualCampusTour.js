"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Info, MapPin, X } from "lucide-react"

const VirtualCampusTour = ({ tourSpots }) => {
  const [currentSpot, setCurrentSpot] = useState(0)
  const [showInfo, setShowInfo] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
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

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
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
      } else if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false)
      } else if (e.key === "f") {
        toggleFullscreen()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isFullscreen])

  // Prevent scrolling when in fullscreen
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isFullscreen])

  return (
    <>
      <div
        className={`relative ${isFullscreen ? "" : "w-full h-[500px] md:h-[600px] lg:h-[700px]"} overflow-hidden rounded-lg`}
        ref={containerRef}
      >
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

        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
            onClick={toggleInfo}
            aria-label={showInfo ? "Hide information" : "Show information"}
          >
            <Info className="h-6 w-6" />
          </button>
          <button
            className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? "Exit fullscreen" : "View fullscreen"}
          >
            {isFullscreen ? <X className="h-6 w-6" /> : <MapPin className="h-6 w-6" />}
          </button>
        </div>

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

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              <motion.div
                key={`fullscreen-${currentSpot}`}
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
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
                onClick={prevSpot}
                aria-label="Previous location"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
                onClick={nextSpot}
                aria-label="Next location"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  className="p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
                  onClick={toggleInfo}
                  aria-label={showInfo ? "Hide information" : "Show information"}
                >
                  <Info className="h-8 w-8" />
                </button>
                <button
                  className="p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
                  onClick={toggleFullscreen}
                  aria-label="Exit fullscreen"
                >
                  <X className="h-8 w-8" />
                </button>
              </div>

              {/* Location indicator */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
                {tourSpots.map((_, index) => (
                  <button
                    key={index}
                    className={`w-4 h-4 rounded-full transition-colors ${
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
                    className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-8 backdrop-blur-sm"
                  >
                    <h3 className="text-2xl font-bold mb-3">{tourSpots[currentSpot].title}</h3>
                    <p className="text-white/90 mb-4 text-lg">{tourSpots[currentSpot].description}</p>
                    {tourSpots[currentSpot].features && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-base">
                        {tourSpots[currentSpot].features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default VirtualCampusTour
