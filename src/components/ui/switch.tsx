"use client"

import { cn } from "@/lib/utils"
import { forwardRef, HTMLAttributes, useEffect, useState } from "react"

interface SwitchProps extends HTMLAttributes<HTMLButtonElement> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
}

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, checked = false, onCheckedChange, disabled, ...props }, ref) => {
    const [isChecked, setIsChecked] = useState(checked)

    useEffect(() => {
      setIsChecked(checked)
    }, [checked])

    const toggle = () => {
      if (disabled) return
      const newChecked = !isChecked
      setIsChecked(newChecked)
      onCheckedChange?.(newChecked)
    }

    return (
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        disabled={disabled}
        ref={ref}
        onClick={toggle}
        className={cn(
          "inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring",
          isChecked ? "bg-primary" : "bg-input dark:bg-input/80",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        <span
          className={cn(
            "pointer-events-none block size-4 rounded-full ring-0 transition-transform",
            isChecked
              ? "translate-x-[calc(100%-2px)] dark:bg-primary-foreground bg-background"
              : "translate-x-0 dark:bg-foreground bg-background"
          )}
        />
      </button>
    )
  }
)

Switch.displayName = "Switch"

export { Switch }
