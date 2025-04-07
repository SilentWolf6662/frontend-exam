import { cn } from "@/lib/utils"
import type { ComponentProps, HTMLAttributes } from "react"

const alertVariants = {
    default: "bg-card text-card-foreground",
    error: "text-error-text bg-error-bg [&>svg]:text-current *:data-[slot=alert-description]:text-error-text/90",
    success: "text-success-text bg-success-bg [&>svg]:text-current *:data-[slot=alert-description]:text-success-text/90",
    warning: "text-warning-text bg-warning-bg [&>svg]:text-current *:data-[slot=alert-description]:text-warning-text/90",
    info: "text-info-text bg-info-bg [&>svg]:text-current *:data-[slot=alert-description]:text-info-text/90",
}

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    variant?: keyof typeof alertVariants
}

function Alert({ className, variant = "default", ...props }: AlertProps) {
    return (
        <div
            role="alert"
            className={cn("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", alertVariants[variant], className)}
            {...props}
        />
    )
}

function AlertTitle({ className, ...props }: ComponentProps<"div">) {
    return (
        <div
            data-slot="alert-title"
            className={cn(
                "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
                className
            )}
            {...props}
        />
    )
}

function AlertDescription({
    className,
    ...props
}: ComponentProps<"div">) {
    return (
        <div
            data-slot="alert-description"
            className={cn(
                "text-error col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
                className
            )}
            {...props}
        />
    )
}

export { Alert, AlertTitle, AlertDescription, alertVariants }
