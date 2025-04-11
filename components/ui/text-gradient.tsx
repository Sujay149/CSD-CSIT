"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface TextGradientProps {
  children: ReactNode
  className?: string
  from?: string
  to?: string
}

export function TextGradient({ children, className, from = "from-primary", to = "to-secondary" }: TextGradientProps) {
  return <span className={cn("bg-gradient-to-r bg-clip-text text-transparent", from, to, className)}>{children}</span>
}
