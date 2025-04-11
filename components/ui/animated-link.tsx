"use client"

import type * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  underlineHeight?: number
  underlineColor?: string
}

export function AnimatedLink({
  className,
  underlineHeight = 2,
  underlineColor,
  children,
  ...props
}: AnimatedLinkProps) {
  return (
    <Link className={cn("relative group", className)} {...props}>
      {children}
      <motion.span
        className={cn(
          "absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300",
          underlineColor,
        )}
        style={{ height: underlineHeight }}
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  )
}
