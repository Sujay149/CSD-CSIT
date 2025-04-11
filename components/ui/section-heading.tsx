import { FadeIn } from "@/components/animations/fade-in"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  description?: string
  align?: "left" | "center" | "right"
  className?: string
  accentText?: string
}

export function SectionHeading({ title, description, align = "center", className, accentText }: SectionHeadingProps) {
  return (
    <FadeIn className={cn("space-y-4", className)}>
      <div
        className={cn("space-y-2", {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right",
        })}
      >
        {accentText && (
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            {accentText}
          </div>
        )}
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
        {description && (
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
            {description}
          </p>
        )}
      </div>
    </FadeIn>
  )
}
