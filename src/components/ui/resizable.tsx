"use client"

import { LuGripVertical } from "react-icons/lu"
import { cn } from "@/lib/utils"
import type { CSSProperties, FC, ReactNode } from "react"

interface ResizablePanelGroupProps {
    className?: string
    children: ReactNode
}

const ResizablePanelGroup: FC<ResizablePanelGroupProps> = ({ className, children }) => {
    return (
        <div className={cn("flex h-full w-full", className)}>
            {children}
        </div>
    )
}

interface ResizablePanelProps {
    className?: string
    children: ReactNode
    style?: CSSProperties
}

const ResizablePanel: FC<ResizablePanelProps> = ({ className, children, style }) => {
    return (
        <div className={cn("flex-1", className)} style={style}>
            {children}
        </div>
    )
}

interface ResizableHandleProps {
    onMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    className?: string
}

const ResizableHandle: FC<ResizableHandleProps> = ({ onMouseDown, className }) => {
    return (
        <div
            className={cn(
                "bg-border relative flex w-px cursor-col-resize items-center justify-center",
                className
            )}
            onMouseDown={onMouseDown}
        >
            <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
                <LuGripVertical className="size-2.5" />
            </div>
        </div>
    )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
