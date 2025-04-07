"use client"

import { cn } from "@/lib/utils"
import { ReactNode, useState } from "react"

interface ToggleProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  className?: string
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  disabled?: boolean
  children?: ReactNode
}

const sizeClasses = {
  default: "h-9 px-2 min-w-9",
  sm: "h-8 px-1.5 min-w-8",
  lg: "h-10 px-2.5 min-w-10",
}

const variantClasses = {
  default: "bg-transparent",
  outline:
    "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground",
}

export function Toggle({
  className,
  variant = "default",
  size = "default",
  checked: initialChecked = false,
  onCheckedChange,
  disabled = false,
  children,
}: ToggleProps) {
  const [checked, setChecked] = useState<boolean>(initialChecked)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!disabled) {
      const newChecked = !checked
      setChecked(newChecked)
      onCheckedChange?.(newChecked)
    }
  }

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium",
        sizeClasses[size],
        variantClasses[variant],
        disabled ? "pointer-events-none opacity-50" : "",
        checked ? "bg-accent text-accent-foreground" : "bg-transparent",
        'hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow]',
        className
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      <span className="sr-only">{checked ? "Checked" : "Unchecked"}</span>
      {children}
    </button>
  )
}
