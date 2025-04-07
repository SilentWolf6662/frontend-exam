'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuChevronUp, LuChevronDown } from "react-icons/lu";
import { cn } from '@/lib/utils';

interface AccordionProps {
    items: {
        title: string;
        content: React.ReactNode;
    }[];
    variant?: keyof typeof variants;
    className?: string;
}

const variants = {
    default: 'bg-background rounded-lg shadow-sm',
    bordered: 'border border-primary-tint-60 rounded-lg',
    minimal: 'border-b border-primary-tint-60',
};


export function Accordion({ items, variant = 'default', className = '' }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className={`w-full ${variants[variant]} ${className}`}>
            {items.map((item, index) => (
                <div key={`accordian-${item.title}-#${index}`} className={variant === 'minimal' ? '' : 'p-4'}>
                    <button
                        type='button'
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className={`w-full flex items-center justify-between border-b px-2 ${variant === 'minimal' ? 'py-2' : ''
                            } hover:bg-primary-tint-60 dark:hover:bg-primary-tint-60 rounded-lg transition-all duration-200`}
                    >
                        <span className="font-medium text-body text-left">{item.title}</span>
                        {openIndex === index ? (
                            <LuChevronUp className="size-5 text-heading" />
                        ) : (
                            <LuChevronDown className="size-5 text-heading" />
                        )}
                    </button>
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                            >
                                <div className={cn(`${variant === 'minimal' ? 'p-2' : 'px-2 mt-2'}`)}>
                                    {item.content}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
