"use client"
import { LuChevronDown } from "react-icons/lu"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface Option {
    value: string
    label: ReactNode
}

interface NativeSelectProps {
    options: Option[]
    value: string
    onChange?: (value: string) => void
    placeholder?: string
    className?: string
    size?: "sm" | "default"
}

function Select({
    options,
    value,
    onChange,
    placeholder = "Select...",
    className,
    size = "default",
}: NativeSelectProps) {
    return (
        <div
            data-slot="select-trigger"
            data-size={size}
            className={cn(
                "relative",
                className
            )}
        >
            <select
                id="select-input"
                className="border-input data-[placeholder]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive flex w-fit items-center justify-between gap-2 rounded-md border px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 bg-transparent outline-none appearance-none focus-visible:outline-none focus-visible:ring-offset-0"
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
            >
                <option value="" disabled hidden>
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <LuChevronDown className="size-4 opacity-50 pointer-events-none absolute top-3 right-2" />
        </div>
    )
}

export { Select }
