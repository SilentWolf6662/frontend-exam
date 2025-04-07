"use client";

import { cn } from "@/lib/utils"; // Utility function
import { buttonVariants } from "@/components/ui/button"; // Button styling utility
import type { ComponentProps, ReactNode } from "react";

interface AlertDialogProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

interface AlertDialogTriggerProps {
    onClick: () => void;
    children: ReactNode;
}

interface AlertDialogContentProps {
    children: ReactNode;
}

interface AlertDialogHeaderProps {
    children: ReactNode;
}

interface AlertDialogFooterProps {
    children: ReactNode;
}

const AlertDialog = ({ isOpen, onClose, children }: AlertDialogProps) => {
    return (
        <>
            {isOpen && (
                <button
                    type="button"
                    data-slot="alert-dialog-overlay"
                    className="fixed inset-0 z-50 bg-black/50"
                    onClick={onClose}
                    onKeyDown={(e) => {
                        if (e.key === "Escape") onClose();
                    }}
                    tabIndex={0}
                >
                    <button
                        type="button"
                        data-slot="alert-dialog-content"
                        className="fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg bg-background"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </button>
                </button>
            )}
        </>
    );
};

const AlertDialogTrigger = ({ onClick, children }: AlertDialogTriggerProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            data-slot="alert-dialog-trigger"
            className={cn("focus-visible:ring-primary", buttonVariants({ variant: "outline" }))}
        >
            {children}
        </button>
    );
};

const AlertDialogContent = ({ children }: AlertDialogContentProps) => {
    return <div data-slot="alert-dialog-content">{children}</div>;
};

const AlertDialogHeader = ({ children }: AlertDialogHeaderProps) => {
    return <div data-slot="alert-dialog-header" className="text-center">{children}</div>;
};

const AlertDialogFooter = ({ children }: AlertDialogFooterProps) => {
    return <div data-slot="alert-dialog-footer" className="flex justify-end">{children}</div>;
};

const AlertDialogTitle = ({ children }: ComponentProps<"h2">) => {
    return <h2 data-slot="alert-dialog-title" className="text-lg font-semibold">{children}</h2>;
};

const AlertDialogDescription = ({ children }: ComponentProps<"p">) => {
    return <p data-slot="alert-dialog-description" className="text-muted-foreground text-sm">{children}</p>;
};

const AlertDialogAction = ({ children, onClick }: ComponentProps<"button">) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(buttonVariants({ variant: "outline" }))}
        >
            {children}
        </button>
    );
};

const AlertDialogCancel = ({ children, onClick }: ComponentProps<"button">) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(buttonVariants({ variant: "outline" }))}
        >
            {children}
        </button>
    );
};

export {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel,
};
