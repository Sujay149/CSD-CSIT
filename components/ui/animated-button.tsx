"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode
  whileHoverScale?: number
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, children, whileHoverScale = 1.05, ...props }, ref) => {
    return (
      <Button ref={ref} className={cn("overflow-hidden relative", className)} {...props} asChild>
        <motion.button
          whileHover={{ scale: whileHoverScale }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.button>
      </Button>
    )
  },
)
AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton }
