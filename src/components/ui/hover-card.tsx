"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface HoverCardProps {
  children: ReactNode
}

interface HoverCardTriggerProps {
  children: ReactNode
}

interface HoverCardContentProps {
  children: ReactNode
  trigger: ReactNode
  className?: string
  align?: "center" | "start" | "end"
}

export function HoverCard({ children }: HoverCardProps) {
  return <div className="relative inline-block">{children}</div>
}

export function HoverCardTrigger({ children }: HoverCardTriggerProps) {
  return children
}

export function HoverCardContent({
  children,
  trigger,
  className,
  align = "center",
}: HoverCardContentProps) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => setOpen(false), 100)
    }

    const handleMouseEnter = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      setOpen(true)
    }

    const card = cardRef.current
    if (card) {
      card.addEventListener("mouseenter", handleMouseEnter)
      card.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (card) {
        card.removeEventListener("mouseenter", handleMouseEnter)
        card.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => {
          timeoutRef.current = setTimeout(() => setOpen(false), 100)
        }}
      >
        <HoverCardTrigger>{trigger}</HoverCardTrigger>
      </div>
      {open && (
        <div
          ref={cardRef}
          className={cn(
            "absolute z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md",
            align === "center" && "left-1/2 -translate-x-1/2",
            align === "start" && "left-0",
            align === "end" && "right-0",
            "top-full mt-2",
            className
          )}
        >
          {children}
        </div>
      )}
    </>
  )
}
