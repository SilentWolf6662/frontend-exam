"use client"

import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
    value?: number
}

function Progress({ className, value = 0, ...props }: ProgressProps) {
    return (
        <div
            data-slot="progress"
            role="progressbar"
            tabIndex={0}
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={100}
            className={cn(
                "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
                className
            )}
            {...props}
        >
            <div
                data-slot="progress-indicator"
                className="bg-primary h-full transition-all"
                style={{ width: `${value}%` }}
            />
        </div>
    )
}

export { Progress }
