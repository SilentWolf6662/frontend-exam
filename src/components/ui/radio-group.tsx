"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { LuCircle } from "react-icons/lu"

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> { }

export function RadioGroup({ className, children, ...props }: RadioGroupProps) {
    return (
        <div
            data-slot="radio-group"
            role="radiogroup"
            className={cn("grid gap-3", className)}
            {...props}
        >
            {children}
        </div>
    )
}

interface RadioGroupItemProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: React.ReactNode
}

interface RadioGroupItemProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: React.ReactNode
}

export function RadioGroupItem({
    className,
    label,
    id,
    ...props
}: RadioGroupItemProps) {
    const inputId = id ?? React.useId()

    return (
        <div className="flex items-center space-x-2">
            <input
                type="radio"
                id={inputId}
                className="peer hidden"
                {...props}
            />
            <label
                htmlFor={inputId}
                className={cn(
                    "relative size-4 rounded-full border border-input shadow-xs",
                    "flex items-center justify-center cursor-pointer",
                    "transition-all focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                    "peer-checked:border-ring peer-checked:ring-1 peer-checked:ring-ring/50",
                    "peer-checked:bg-primary peer-checked:text-primary",
                    "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
                    "data-[state=checked]:bg-primary data-[state=checked]:text-primary",
                )}
            >
            </label>
            {label && (
                <label htmlFor={inputId} className="cursor-pointer">
                    {label}
                </label>
            )}
        </div>
    )
}
