import React from "react"
import FadeIn from "../animations/FadeIn"

const SectionHeading = ({ title, description, align = "center", className = "" }) => {
  const alignmentClasses = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  }

  return (
    <FadeIn className={`space-y-4 ${className}`}>
      <div className={`space-y-2 ${alignmentClasses[align]}`}>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
        {description && (
          <p
            className={`max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ${align === "center" ? "mx-auto" : ""}`}
          >
            {description}
          </p>
        )}
      </div>
    </FadeIn>
  )
}

export default React.memo(SectionHeading)
