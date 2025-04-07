"use client"
import { FaChevronUp } from "react-icons/fa6";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function GoBackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        // Debug values for scroll position and visibility if needed later
        /* console.log("window.scrollY", window.scrollY)
        console.log("toggle", window.scrollY > 100) */
        setIsVisible(window.scrollY > 100);
    };

    // biome-ignore lint/correctness/useExhaustiveDependencies: Rerender on every render if handleScroll is included in the dependency array
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Button
            onClick={scrollToTop}
            disabled={!isVisible}
            className={cn("fixed right-5 bottom-5 pointer-events-auto cursor-pointer p-3 py-5 bg-primary hover:bg-primary/60 transition-all duration-300 rounded-none justify-center items-center",
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-96 pointer-events-none')}
        >
            <span className="sr-only">Back to top</span>
            <FaChevronUp className="size-5" />
        </Button>
    );
};
