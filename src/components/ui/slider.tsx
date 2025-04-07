"use client"
import {
    useCallback,
    useEffect,
    useState,
    useRef,
    type CSSProperties
} from 'react';

import "./multiRangeSlider.css";
import { cn } from "@/lib/utils";
import { Input } from './input';

interface SliderProps {
    min: number;
    max: number;
    step?: number;
    onChange?: (value: { min: number; max: number }) => void;
    className?: string;
}

function Slider({
    min,
    max,
    step = 1,
    onChange,
    className,
}: SliderProps) {

    const [minVal, setMinVal] = useState<number>(min);
    const [maxVal, setMaxVal] = useState<number>(max);
    const minValRef = useRef<number>(min);
    const maxValRef = useRef<number>(max);
    const range = useRef<HTMLDivElement | null>(null);


    // convert to percentage
    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    // set the width of the range to decrease from right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        if (minVal !== minValRef.current || maxVal !== maxValRef.current) {
            onChange?.({ min: minVal, max: maxVal });
            minValRef.current = minVal;
            maxValRef.current = maxVal;
        }
    }, [minVal, maxVal, onChange]);

    return (
        <Input type="range" min={min} max={max} step={step} className={className}>
        </Input>
    )
}

interface MultiRangeSliderProps {
    min: number;
    max: number;
    step?: number;
    onChange?: (values: { min: number; max: number }) => void;
    className?: string;
}

function MultiRangeSlider({ min, max, step = 1, onChange, className, }: MultiRangeSliderProps) {
    const [minVal, setMinVal] = useState<number>(min);
    const [maxVal, setMaxVal] = useState<number>(max);
    const minValRef = useRef<HTMLInputElement | null>(null);
    const maxValRef = useRef<HTMLInputElement | null>(null);
    const range = useRef<HTMLDivElement | null>(null);

    const getPercent = useCallback(
        (value: number): number => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value);

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);

    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    useEffect(() => {
        onChange?.({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);

    return (
        <div className='mb-4'>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={minVal}
                ref={minValRef}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const value = Math.min(+event.target.value, maxVal - 1);
                    setMinVal(value);
                    event.target.value = value.toString();
                }}
                className={cn("thumb thumb--zindex-3 bg-primary", {
                    "thumb--zindex-5": minVal > max - 100,
                })}
            />
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={maxVal}
                ref={maxValRef}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const value = Math.max(+event.target.value, minVal + 1);
                    setMaxVal(value);
                    event.target.value = value.toString();
                }}
                className="thumb thumb--zindex-4 bg-primary"
            />

            <div className="slider">
                <div className="slider__track bg-primary/40" />
                <div ref={range} className="slider__range bg-primary" />
                <div className="slider__left-value">{minVal}</div>
                <div className="slider__right-value">{maxVal}</div>
            </div>
        </div>
    );
};

export { Slider, MultiRangeSlider }
