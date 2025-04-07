import type { HTMLAttributes, ComponentProps } from "react";
import { LuChevronRight, LuEllipsis } from "react-icons/lu";
import { cn } from "@/lib/utils";

interface BreadcrumbProps extends HTMLAttributes<HTMLElement> { }

function Breadcrumb({ ...props }: BreadcrumbProps) {
    return <nav aria-label="breadcrumb" {...props} />;
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
    return (
        <ol
            className={cn(
                "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
                className
            )}
            {...props}
        />
    );
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
    return (
        <li
            className={cn("inline-flex items-center gap-1.5", className)}
            {...props}
        />
    );
}

function BreadcrumbLink({
    className,
    ...props
}: ComponentProps<"a">) {
    return (
        <a
            className={cn("hover:text-foreground transition-colors", className)}
            {...props}
        />
    );
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
    return (
        <span
            role="link"
            tabIndex={0}
            aria-disabled="true"
            aria-current="page"
            className={cn("text-foreground font-normal", className)}
            {...props}
        />
    );
}

function BreadcrumbSeparator({
    children,
    className,
    ...props
}: ComponentProps<"li">) {
    return (
        <li
            role="presentation"
            aria-hidden="true"
            className={cn("[&>svg]:size-3.5", className)}
            {...props}
        >
            {children ?? <LuChevronRight />}
        </li>
    );
}

function BreadcrumbEllipsis({
    className,
    ...props
}: ComponentProps<"span">) {
    return (
        <span
            role="presentation"
            aria-hidden="true"
            className={cn("flex size-9 items-center justify-center", className)}
            {...props}
        >
            <LuEllipsis className="size-4" />
            <span className="sr-only">More</span>
        </span>
    );
}

export {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis,
};
