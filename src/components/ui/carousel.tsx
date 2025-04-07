'use client'

import { Children, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LuChevronDown, LuChevronLeft, LuChevronRight, LuChevronUp } from 'react-icons/lu'
import { cn } from '@/lib/utils'

type CarouselProps = {
    dots?: boolean
    arrows?: boolean
    loop?: boolean
    direction?: 'horizontal' | 'vertical'
    slideDuration?: number
    slideDirection?: '-' | '+'
    className?: string
    children: React.ReactNode[]
}

export function Carousel({ dots = false, arrows = false, loop = false, direction = 'horizontal', slideDuration = 4000, slideDirection = '-', className, children }: CarouselProps) {
    const [index, setIndex] = useState(0)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const normalizedChildren = Children.toArray(children)
    const slideCount = normalizedChildren.length

    const isHorizontal = direction === 'horizontal'

    const nextSlide = () => setIndex((prev) => (prev + 1) % slideCount)
    const prevSlide = () => setIndex((prev) => (prev - 1 + slideCount) % slideCount)

    const resetTimeout = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }

    useEffect(() => {
        if (!loop) return
        resetTimeout()
        timeoutRef.current = setTimeout(nextSlide, slideDuration)
        return () => resetTimeout()
    }, [index])

    return (
        <div
            className={cn(
                'relative w-full',
                isHorizontal ? 'aspect-[16/9] my-12' : 'h-96 my-12',
                className
            )}
        >
            <div className={cn("relative size-full")}>
                <AnimatePresence initial={false} mode="wait">
                    {normalizedChildren.map((child, i) =>
                        i === index ? (
                            <motion.div
                                key={i}
                                drag={isHorizontal ? 'x' : 'y'}
                                dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                                initial={
                                    isHorizontal
                                        ? slideDirection === '-' ? { opacity: 0, x: -50 }
                                            : { opacity: 0, x: 50 }
                                        : slideDirection === '-' ? { opacity: 0, y: -50 }
                                            : { opacity: 0, y: 50 }
                                }
                                animate={
                                    isHorizontal
                                        ? { opacity: 1, x: 0 }
                                        : { opacity: 1, y: 0 }
                                }
                                exit={
                                    isHorizontal
                                        ? slideDirection === '-' ? { opacity: 0, x: -50 }
                                            : { opacity: 0, x: 50 }
                                        : slideDirection === '-' ? { opacity: 0, y: -50 }
                                            : { opacity: 0, y: 50 }
                                }
                                transition={{ duration: 0.6 }}
                                className="flex size-full min-w-full items-center justify-center"
                            >
                                {child}
                            </motion.div>
                        ) : null
                    )}
                </AnimatePresence>
            </div>

            {/* Navigation Arrows (horizontal only for now) */}
            {arrows && (isHorizontal ? (
                <>
                    <div className="absolute -left-12 top-1/2 h-full w-14 z-10 -translate-y-1/2 bg-gradient-to-r from-background from-70% to-transparent p-2 transition" />
                    <button
                        onClick={prevSlide}
                        className="absolute -left-12 top-1/2 z-20 -translate-y-1/2 rounded-full bg-primary/60 p-2 text-primary-foreground hover:bg-primary/80 transition"
                    >
                        <LuChevronLeft size={26} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute -right-12 top-1/2 z-20 -translate-y-1/2 rounded-full bg-primary/60 p-2 text-primary-foreground hover:bg-primary/80 transition"
                    >
                        <LuChevronRight size={26} />
                    </button>
                    <div className="absolute -right-12 top-1/2 h-full w-14 z-10 -translate-y-1/2 bg-gradient-to-l from-background from-70% to-transparent p-2 transition" />
                </>
            ) : (
                <>
                    <div className="absolute left-1/2 -top-12 -translate-x-1/2 w-full h-14 z-10 bg-gradient-to-b from-background from-70% to-transparent p-2 transition" />
                    <button
                        onClick={prevSlide}
                        className="absolute left-1/2 -top-12 z-20 -translate-x-1/2 rounded-full bg-primary/60 p-2 text-primary-foreground hover:bg-primary/80 transition"
                    >
                        <LuChevronUp size={26} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute left-1/2 -bottom-12 z-20 -translate-x-1/2 rounded-full bg-primary/60 p-2 text-primary-foreground hover:bg-primary/80 transition"
                    >
                        <LuChevronDown size={26} />
                    </button>
                    <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 w-full h-14 z-10 bg-gradient-to-t from-background from-70% to-transparent p-2 transition" />
                </>
            ))}


            {/* Dots */}
            {dots && (
                <div
                    className={cn(
                        'absolute z-10 flex gap-2',
                        isHorizontal
                            ? 'left-1/2 -bottom-6 -translate-x-1/2'
                            : '-right-6 top-1/2 -translate-y-1/2 flex-col'
                    )}
                >
                    {normalizedChildren.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={cn(
                                'size-2 rounded-full transition-all',
                                i === index ? 'bg-primary scale-125' : 'bg-primary/50'
                            )}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
