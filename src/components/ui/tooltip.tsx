"use client"

import { useState, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TooltipProps {
  trigger: ReactNode
  children: ReactNode
  delayDuration?: number
}

interface TooltipTriggerProps {
  children: ReactNode
}

interface TooltipContentProps {
  children: ReactNode
  className?: string
  side?: "top" | "bottom" | "left" | "right"
  sideOffset?: number
}

function Tooltip({ children, trigger, delayDuration = 0 }: TooltipProps) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const tooltipRef = useRef<HTMLDivElement | null>(null)

  const handleOpen = () => {
    timeoutRef.current = setTimeout(() => setOpen(true), delayDuration)
  }

  const handleClose = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(false)
  }

  return (
    <div
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      className="relative inline-block"
    >
      {trigger}
      {open && children && (
        <div
          ref={tooltipRef}
          className="absolute z-50 pointer-events-none"
        >
          {children}
        </div>
      )}
    </div>
  )
}

function TooltipTrigger({ children }: TooltipTriggerProps) {
  return <span>{children}</span>
}
TooltipTrigger.displayName = "TooltipTrigger"

function TooltipContent({
  children,
  className,
  side = "top",
  sideOffset = 25,
}: TooltipContentProps) {
  const offset = `${sideOffset}px`

  const styles: Record<string, React.CSSProperties> = {
    top: { bottom: `calc(100% + ${offset})`, left: "50%", transform: "translateX(-30%)" },
    bottom: { top: `calc(100% + ${offset})`, left: "50%", transform: "translateX(-30%)" },
    left: { right: `calc(100% + ${offset})`, top: "50%", transform: "translateY(-30%)" },
    right: { left: `calc(100% + ${offset})`, top: "50%", transform: "translateY(-30%)" },
  }

  return (
    <div
      className={cn(
        "w-fit absolute bg-primary text-primary-foreground px-3 py-1.5 text-xs rounded-md shadow-md animate-fade-in z-50 text-nowrap",
        className
      )}
      style={styles[side]}
    >
      {children}
    </div>
  )
}
TooltipContent.displayName = "TooltipContent"

export { Tooltip, TooltipTrigger, TooltipContent }
