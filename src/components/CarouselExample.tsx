import * as React from "react"

import {
    Carousel
} from "@/components/ui/carousel"

export default function CarouselExample() {
    return (
        <>
            <Carousel direction="horizontal" arrows dots loop>
                <div className="bg-red-400 w-full h-full" />
                <div className="bg-green-400 w-full h-full" />
                <div className="bg-blue-400 w-full h-full" />
            </Carousel>

            <Carousel direction="vertical" arrows dots loop>
                <div className="bg-red-400 w-full h-full" />
                <div className="bg-green-400 w-full h-full" />
                <div className="bg-blue-400 w-full h-full" />
            </Carousel>

            {/* <Carousel direction="horizontal" arrows dots slideDirection="+" loop>
                <div className="bg-red-400 w-full h-full" />
                <div className="bg-green-400 w-full h-full" />
                <div className="bg-blue-400 w-full h-full" />
            </Carousel>

            <Carousel direction="vertical" arrows dots loop slideDirection="+" className="">
                <div className="bg-red-400 w-full h-full" />
                <div className="bg-green-400 w-full h-full" />
                <div className="bg-blue-400 w-full h-full" />
            </Carousel> */}
        </>
    )
}
