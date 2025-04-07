"use client"

import React, { createContext, useContext, ReactNode } from "react"
import { cn } from "@/lib/utils"

type Variant = "default" | "outline"
type Size = "default" | "sm" | "lg"

interface ToggleGroupContextProps {
  variant: Variant
  size: Size
}

const ToggleGroupContext = createContext<ToggleGroupContextProps>({
  variant: "default",
  size: "default",
})

interface ToggleGroupProps {
  value: string
  onValueChange: (value: string) => void
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

export function ToggleGroup({
  value,
  onValueChange,
  variant = "default",
  size = "default",
  className,
  children,
}: ToggleGroupProps) {
  return (
    <ToggleGroupContext.Provider value={{ variant, size }}>
      <div
        className={cn(
          "inline-flex w-fit items-center rounded-md",
          variant === "outline" && "shadow-xs",
          className
        )}
      >
        {/* Clone children with context props + selection handling */}
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null

          return React.cloneElement(child as React.ReactElement<any>, {
            selectedValue: value,
            onValueChange,
          })
        })}
      </div>
    </ToggleGroupContext.Provider>
  )
}

interface ToggleGroupItemProps {
  value: string
  children: ReactNode
  className?: string
  selectedValue?: string
  onValueChange?: (value: string) => void
}

export function ToggleGroupItem({
  value,
  children,
  className,
  selectedValue,
  onValueChange,
}: ToggleGroupItemProps) {
  const { variant, size } = useContext(ToggleGroupContext)
  const isSelected = selectedValue === value

  const sizeClasses = {
    default: "h-9 px-2 min-w-9",
    sm: "h-8 px-1.5 min-w-8",
    lg: "h-10 px-2.5 min-w-10",
  }

  const variantBase =
    variant === "outline"
      ? "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
      : "bg-transparent"

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center gap-2 text-sm font-medium transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none",
        sizeClasses[size],
        variantBase,
        isSelected && "bg-accent text-accent-foreground",
        "first:rounded-l-md last:rounded-r-md rounded-none border-l-0 first:border-l",
        className
      )}
      onClick={() => onValueChange?.(value)}
    >
      {children}
    </button>
  )
}
