"use client"

import { cn } from "@/lib/utils"
import type { HTMLAttributes, ReactNode } from "react"

interface ScrollAreaProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export function ScrollArea({ className, children, ...props }: ScrollAreaProps) {
    return (
        <div
            data-slot="scroll-area"
            className={cn("relative overflow-hidden", className)}
            {...props}
        >
            <div
                data-slot="scroll-area-viewport"
                className="size-full overflow-auto rounded-[inherit] focus-visible:ring-[3px] focus-visible:ring-ring/50 transition-[color,box-shadow] outline-none scrollarea"
            >
                {children}
            </div>
        </div>
    )
}
