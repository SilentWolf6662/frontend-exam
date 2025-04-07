import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

const badgeClasses = {
    default:
        "border-transparent bg-primary text-primary-foreground hover:bg-primary/90",
    secondary:
        "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90",
    destructive:
        "border-transparent bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
    outline:
        "text-foreground hover:bg-accent hover:text-accent-foreground",
};

export type BadgeVariants = keyof typeof badgeClasses

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariants;
    asChild?: boolean;
}

function Badge({
    className,
    variant = "default",
    ...props
}: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden transition-[color,box-shadow]",
                badgeClasses[variant],
                className
            )}
            {...props}
        />
    );
}

export { Badge };
