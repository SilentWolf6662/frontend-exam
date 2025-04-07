"use client"
import { Calendar } from "@/ui/calendar"
import { useState } from "react"

// Make a date exclusion array
const excludeDates = [new Date(2025, 4, 3), new Date(2025, 4, 20)]; // Example dates to exclude

export default function CalenderExample() {
    const [date, setDate] = useState<Date | undefined | null>(null);
    const [dateMulti, setDateMulti] = useState<Date[] | undefined | null>(null);
    const [dateRange, setDateRange] = useState<[Date, Date] | undefined | null>(null);

    const handleSingleSelect = (value: Date | Date[] | [Date, Date] | null | undefined): void => {
        setDate(value as Date)
    }

    // Handle multiple date selection (an array of dates)
    const handleMultipleSelect = (value: Date | Date[] | [Date, Date] | null | undefined): void => {
        setDateMulti(value as Date[])
    }

    // Handle range selection (a range of dates)
    const handleRangeSelect = (value: Date | Date[] | [Date, Date] | null | undefined): void => {
        setDateRange(value as [Date, Date])
    }
    return (
        <>
            <Calendar
                mode="single"
                selected={date}
                onSelect={handleSingleSelect}
                showOutsideDays={false}
                excludeDates={excludeDates}
            />
            <Calendar
                mode="single"
                showOutsideDays
                excludeWeekends
                selected={date}
                onSelect={handleSingleSelect}
            />
            <Calendar
                mode="single"
                showOutsideDays
                selected={date}
                onSelect={handleSingleSelect}
            />
            <Calendar
                mode="multiple"
                showOutsideDays
                selected={dateMulti}
                onSelect={handleMultipleSelect}
            />
            <Calendar
                mode="range"
                showOutsideDays
                selected={dateRange}
                onSelect={handleRangeSelect}
            />
        </>
    );
}
