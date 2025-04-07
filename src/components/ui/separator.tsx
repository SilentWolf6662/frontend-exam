import { cn } from "@/lib/utils"
import { HTMLProps } from "react";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: {
  className?: string
  orientation?: "horizontal" | "vertical"
  decorative?: boolean
} & HTMLProps<HTMLDivElement>) {
  if (!decorative) return null;

  return (
    <div
      data-slot="separator-root"
      className={cn(
        "bg-border shrink-0",
        orientation === "horizontal"
          ? "h-px w-full"
          : "h-full w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
