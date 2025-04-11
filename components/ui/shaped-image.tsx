"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface ShapedImageProps {
  src: string
  alt: string
  width: number
  height: number
  shape?: "rounded" | "circle" | "rectangle" | "square" | "oval" | "wave" | "arch" | "trapezoid" | "custom"
  className?: string
  priority?: boolean
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  quality?: number
  customClipPath?: string
}

export function ShapedImage({
  src,
  alt,
  width,
  height,
  shape = "rounded",
  className,
  priority = false,
  objectFit = "cover",
  quality = 85,
  customClipPath,
}: ShapedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)

  // Handle image loading error
  const handleError = () => {
    console.error(`Failed to load image: ${src}`)
    setImgSrc("/placeholder.svg")
  }

  // Updated shape styles with new options
  const shapeStyles = {
    rounded: "rounded-xl overflow-hidden",
    circle: "rounded-full overflow-hidden",
    rectangle: "rounded-md overflow-hidden",
    square: "aspect-square rounded-md overflow-hidden",
    oval: "rounded-[50%] overflow-hidden",
    wave: "overflow-hidden [clip-path:polygon(0%_0%,100%_0%,100%_75%,75%_100%,0%_100%,0%_75%)]",
    arch: "overflow-hidden [clip-path:polygon(0%_0%,100%_0%,100%_80%,50%_100%,0%_80%)]",
    trapezoid: "overflow-hidden [clip-path:polygon(10%_0%,90%_0%,100%_100%,0%_100%)]",
    custom: "overflow-hidden",
  }

  // Apply custom clip path if provided
  const clipPathStyle = shape === "custom" && customClipPath ? { clipPath: customClipPath } : {}

  return (
    <div className={cn("relative", shapeStyles[shape], className)} style={clipPathStyle}>
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-full object-${objectFit}`}
        priority={priority}
        quality={quality}
        onError={handleError}
      />
    </div>
  )
}
