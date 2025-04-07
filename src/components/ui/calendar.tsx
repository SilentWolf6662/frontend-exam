"use client";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { useState } from "react"

// Helper function to get the first day of the month
const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDay()
}

// Helper function to get the number of days in a month
const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
}
// days.push({ date: null, currentMonth: false, actualDate: null });
// Helper function to get a range of dates for a given month
const getCalendarDays = (year: number, month: number, showOutsideDays: boolean) => {
    const firstDay = getFirstDayOfMonth(year, month)
    const daysInMonth = getDaysInMonth(year, month)
    const days: { date: number | null, currentMonth: boolean, actualDate: Date | null }[] = []

    // Fill previous month's days if showOutsideDays is true
    if (showOutsideDays) {
        for (let i = 0; i < firstDay; i++) {
            const prevMonth = month === 0 ? 11 : month - 1;
            const prevYear = month === 0 ? year - 1 : year;
            const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);
            const date = new Date(prevYear, prevMonth, daysInPrevMonth - firstDay + i + 1);
            days.push({ date: date.getDate(), currentMonth: false, actualDate: date });
        }
    } else {
        for (let i = 0; i < firstDay; i++) {
            days.push({ date: null, currentMonth: false, actualDate: null });
        }
    }

    // Fill current month's days
    for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(year, month, i)
        days.push({ date: i, currentMonth: true, actualDate: date })
    }

    // Fill next month's days if showOutsideDays is true
    if (showOutsideDays) {
        const totalDays = days.length;
        const remainingDays = 7 - (totalDays % 7);
        if (remainingDays < 7) {
            for (let i = 1; i <= remainingDays; i++) {
                const nextMonth = month === 11 ? 0 : month + 1;
                const nextYear = month === 11 ? year + 1 : year;
                const date = new Date(nextYear, nextMonth, i);
                days.push({ date: i, currentMonth: false, actualDate: date });
            }
        }
    } else {
        days.push({ date: null, currentMonth: false, actualDate: null })
    }

    return days
}

function isDateInRange(date: Date, fromDate: Date, toDate: Date) {
    return date >= fromDate && date <= toDate;
}

function isDateExcluded(date: Date, excludeDates: Date[], excludeWeekends: boolean) {
    if (excludeWeekends && (date.getDay() === 0 || date.getDay() === 6)) {
        return true
    }
    return excludeDates?.filter(d => d instanceof Date).some(excluded => excluded.getTime() === date.getTime());
}

interface CalendarProps {
    className?: string;
    showOutsideDays?: boolean;
    mode?: "single" | "range" | "multiple";
    selected?: Date | [Date, Date] | Date[] | undefined | null;
    onSelect?: (date: Date | [Date, Date] | Date[] | undefined | null) => void;
    excludeDates?: Date[];
    excludeWeekends?: boolean;
}

function Calendar({
    className,
    showOutsideDays = true,
    mode = "single",
    selected,
    onSelect,
    excludeDates = [],
    excludeWeekends = false,
}: CalendarProps) {
    const [currentDate, setCurrentDate] = useState(new Date())

    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth()

    const days = getCalendarDays(currentYear, currentMonth, showOutsideDays)

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth - 1))
    }

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth + 1))
    }

    const handleDateSelect = (day: { date: number, currentMonth: boolean, actualDate: Date }) => {
        const selectedDate = day.actualDate;
        if (isDateExcluded(selectedDate, excludeDates, excludeWeekends)) return;
        if (mode === "single") {
            // Case: Reset if clicking the same date
            if (isDateSelected({ date: selectedDate.getDate(), currentMonth: true, actualDate: selectedDate }) || isDateSelected({ date: selectedDate.getDate(), currentMonth: false, actualDate: selectedDate })) {
                onSelect?.(null);
                return;
            }
            onSelect?.(selectedDate);
        } else if (mode === "multiple") {
            const newSelected = Array.isArray(selected) ? [...selected] : [];
            const index = newSelected.findIndex(d => d.getTime() === selectedDate.getTime());

            if (index === -1) {
                newSelected.push(selectedDate);
            } else {
                newSelected.splice(index, 1);
            }

            onSelect?.(newSelected);
        } else if (mode === "range") {
            if (Array.isArray(selected)) {
                const [startDate, endDate] = selected;

                // Case: Reset if clicking the same start date
                if (startDate && startDate.getTime() === selectedDate.getTime()) {
                    onSelect?.([]);
                    return;
                }

                // Case: Reset if clicking the same end date
                if (endDate && endDate.getTime() === selectedDate.getTime()) {
                    onSelect?.([]);
                    return;
                }

                // Case: First click or resetting
                if (!startDate || !endDate) {
                    onSelect?.([selectedDate, selectedDate]);
                } else {
                    // Determine the new range based on selection
                    // If selected date is before start, update start
                    // If after end, update end
                    // Otherwise, select based on closest edge
                    if (selectedDate < startDate) {
                        onSelect?.([selectedDate, endDate]);
                    } else if (selectedDate > endDate) {
                        onSelect?.([startDate, selectedDate]);
                    } else {
                        // Adjust based on proximity
                        const isCloserToStart = Math.abs(selectedDate.getTime() - startDate.getTime()) <
                            Math.abs(selectedDate.getTime() - endDate.getTime());

                        if (isCloserToStart) {
                            onSelect?.([selectedDate, endDate]);
                        } else {
                            onSelect?.([startDate, selectedDate]);
                        }
                    }
                }
            } else {
                onSelect?.([selectedDate, selectedDate]);
            }
        }

        if (!day.currentMonth) setCurrentDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth()));
    };


    const isDateSelected = (day: { date: number | null, currentMonth: boolean, actualDate: Date | null }) => {
        if (!selected || !day.actualDate) return false
        if (selected instanceof Date) return selected.getTime() === day.actualDate.getTime()
        if (Array.isArray(selected) && day.actualDate) return selected.some(d => d && day.actualDate && d.getTime() === day.actualDate.getTime())
        return false
    }

    return (
        <div className={cn("p-3 rounded-md border shadow", className)}>
            <div className="flex justify-between items-center">
                <button type="button" onClick={handlePrevMonth} className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}><LuChevronLeft /></button>
                <button type="button" onClick={() => setCurrentDate(new Date())} className="text-sm font-medium cursor-pointer capitalize">{currentDate.toLocaleString("default", { month: "long", year: "numeric" })}</button>
                <button type="button" onClick={handleNextMonth} className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}><LuChevronRight /></button>
            </div>
            <div className="grid grid-cols-7 gap-1 mt-4">
                {["Ma", "Ti", "On", "To", "Fr", "Lø", "Sø"].map((weekDay) => (
                    <div key={weekDay} className={cn("size-8 p-0 text-sm text-center rounded-md transition-all")}>
                        {weekDay}
                    </div>
                ))}
                {days.map((day, index) => (
                    <button
                        type="button"
                        key={day.actualDate ? day.actualDate.toISOString() : `null-${day.date}-#${index}`}
                        onClick={() => day.date !== null && day.actualDate !== null && handleDateSelect(day as { date: number; currentMonth: boolean; actualDate: Date })}
                        className={cn(
                            "size-8 p-0 text-sm text-center rounded-md transition-all",
                            !day.currentMonth ? "text-muted-foreground" : "",
                            mode === "range" && Array.isArray(selected) && selected.length === 2 && day.actualDate && isDateInRange(day.actualDate, selected[0], selected[1]) ? "bg-primary/30 text-secondary-foreground" : "",
                            day.currentMonth && day.date === new Date().getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "bg-accent" : "",
                            isDateSelected(day) ? "bg-primary text-primary-foreground" : "hover:bg-accent hover:text-accent-foreground",
                            day.actualDate && isDateExcluded(day.actualDate, excludeDates, excludeWeekends) ? "cursor-not-allowed opacity-50" : "cursor-pointer",
                            day.actualDate === null ? "hover:text-transparent hover:bg-transparent cursor-default" : ""
                        )}
                    >
                        {day.date}
                    </button>
                ))}
            </div>
        </div>
    )
}

export { Calendar }
