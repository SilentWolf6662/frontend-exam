'use client';

import type React from 'react';
import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuX } from "react-icons/lu";
import { cn } from '@/lib/utils';

interface ModalProps {
    buttonTitle?: React.ReactElement;
    title?: string;
    children: React.ReactNode;
    variant?: keyof typeof variants;
    placement?: keyof typeof placements;
    className?: string;
    isDefaultOpen?: boolean;
    onClose?: () => void;
    onShow?: () => void;
    autoClose?: boolean;
    autoCloseDelay?: number;
}

const variants = {
    default: 'bg-background rounded-lg shadow-lg', // Standard style with background from color scheme and soft shadow
    test: "bg-background rounded-lg shadow-lg",
    minimal: 'bg-transparent border-2 border-secondary-300 rounded-lg', // Minimal style with transparent background and subtle border using secondary colors
    elevated: 'bg-surface rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.1)]', // Elevated with surface background and stronger shadow
    transparent: 'bg-transparent border-2 border-primary-300 rounded-lg', // Transparent background with primary color border
    withHeader: 'bg-surface rounded-t-lg shadow-lg border-b-2 border-primary-200', // Header style with a border at the top
    withFooter: 'bg-surface rounded-b-lg shadow-lg border-t-2 border-primary-200', // Footer style with a border at the bottom
    custom: 'bg-primary text-on-primary p-6 rounded-lg shadow-md', // Custom style with your primary color background and contrasting text
    accent1: 'bg-accent-1-300 text-on-primary p-6 rounded-lg shadow-md', // Accent 1 color with a gentle greenish shade
    accent2: 'bg-accent-2-300 text-on-primary p-6 rounded-lg shadow-md', // Accent 2 with a blueish tone for a calming effect
    accent3: 'bg-accent-3-300 text-on-primary p-6 rounded-lg shadow-md', // Accent 3 with a soft mauve tone for a warm, inviting look
};


// right-0 === left-auto - Dialog does not allow me to use right
// bottom-0 === top-auto - Dialog does not allow me to use bottom
export const placements = {
    'top-left': 'top-0 left-0',
    'top-center': 'top-0 left-1/2 transform -translate-x-1/2',
    'top-right': 'top-0 left-auto',
    'center-left': 'top-1/2 left-0 transform -translate-y-1/2',
    'center': 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    'center-right': 'top-1/2 left-auto transform -translate-y-1/2',
    'bottom-left': 'top-auto left-0',
    'bottom-center': 'top-auto left-1/2 transform -translate-x-1/2',
    'bottom-right': 'top-auto left-auto',
};

export type ModalPlacement = keyof typeof placements

export default function Modal({
    buttonTitle,
    title,
    children,
    variant = 'default',
    placement = 'center',
    className = '',
    isDefaultOpen = false,
    onClose,
    onShow,
    autoClose = false, // Default to false
    autoCloseDelay = 3000, // Default auto-close delay to 3 seconds
}: ModalProps) {
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    function handleOnClose() {
        dialogRef.current?.close();
        if (onClose) onClose();
    }

    function handleOnShow() {
        dialogRef.current?.showModal();
        if (onShow) onShow();
    }

    // biome-ignore lint/correctness/useExhaustiveDependencies: Causes the component to infinite rerender
    useEffect(() => {
        if (isDefaultOpen) handleOnShow();

        if (autoClose && dialogRef.current) {
            const timer = setTimeout(() => {
                handleOnClose();
            }, autoCloseDelay);

            return () => clearTimeout(timer); // Clean up the timeout on unmount
        }
    }, [isDefaultOpen, autoClose, autoCloseDelay]);

    return (
        <AnimatePresence>
            <>
                <dialog
                    ref={dialogRef}
                    className={cn('backdrop:bg-black/50 backdrop:backdrop-blur-sm bg-transparent fixed m-0', placements[placement], 'z-50')}
                >
                    <motion.div
                        className={cn('bg-background text-body shadow-xl', variants[variant], className)}
                    >
                        <div className="relative">
                            {title && (
                                <div className="px-6 py-4 border-b border-primary-tint-60">
                                    <h2 className="text-xl font-semibold">{title}</h2>
                                </div>
                            )}
                            <button
                                ref={(button) => {
                                    if (button && dialogRef.current?.open) {
                                        button.focus();
                                    }
                                }}
                                type='button'
                                onClick={() => handleOnClose()}
                                className="absolute top-1 right-1 p-1 hover:bg-primary-tint-80 rounded-full"
                            >
                                <LuX aria-hidden="true" className="w-5 h-5 text-heading" />
                                <span className='sr-only'>Close</span>
                            </button>
                            <div className="p-6">{children}</div>
                        </div>
                    </motion.div>
                </dialog>
                <button type="button" onClick={() => handleOnShow()}>
                    {buttonTitle ? buttonTitle : <>Show Dialog</>}
                </button>
            </>
        </AnimatePresence>
    );
}
