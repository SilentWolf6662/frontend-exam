"use client";
import { cn } from "@/lib/utils";
import { type HTMLProps, type ImgHTMLAttributes, type ReactNode, useState } from "react";

interface AvatarProps extends HTMLProps<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

function Avatar({ className, children, ...props }: AvatarProps) {
    return (
        <div
            className={cn(
                "relative flex shrink-0 overflow-hidden rounded-full",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

interface AvatarImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    alt?: string; // Optional alt text for accessibility
}

function AvatarImage({ className, alt = "Avatar image", ...props }: AvatarImageProps) {
    return (
        <img
            className={cn("size-full object-cover", className)}
            alt={alt}
            {...props}
            aria-label={alt} // Fallback for aria-label if alt is missing
        />
    );
}

interface AvatarFallbackProps {
    className?: string;
    children: ReactNode;
    "aria-label"?: string; // Adding aria-label for accessibility of fallback content
}

function AvatarFallback({ className, children, "aria-label": ariaLabel, ...props }: AvatarFallbackProps) {
    return (
        <div
            className={cn(
                "bg-background-muted flex items-center justify-center text-xl text-heading font-bold size-full rounded-full",
                className
            )}
            {...props}
            aria-label={ariaLabel} // Ensuring a label for fallback content
        >
            {children}
        </div>
    );
}

interface AvatarWithFallbackProps {
    src?: string;
    alt?: string;
    fallbackContent?: ReactNode;
    className?: string;
}

function AvatarWithFallback({
    src,
    alt,
    fallbackContent = "A", // Default content for fallback (1 - 2 letter(s) or icon)
    className,
}: AvatarWithFallbackProps) {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <Avatar className={cn('size-20', className)}> {/* Fixed size for circle */}
            {imageError || !src ? (
                <AvatarFallback className="size-full">{fallbackContent}</AvatarFallback>
            ) : (
                <AvatarImage src={src} alt={alt} onError={handleImageError} className="size-full" />
            )}
        </Avatar>
    );
}

export { AvatarWithFallback as Avatar };
