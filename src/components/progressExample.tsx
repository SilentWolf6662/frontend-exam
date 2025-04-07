"use client"

import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"

export function ProgressExample() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])

    return <Progress value={progress} className="w-full" />
}
