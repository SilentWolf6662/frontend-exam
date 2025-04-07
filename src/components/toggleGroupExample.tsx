"use client"

import * as React from "react"
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"
import { Toggle } from "./ui/toggle"
import { LuItalic } from "react-icons/lu"

export function ToggleGroupExample() {
    const [value, setValue] = React.useState("bold")

    return (
        <ToggleGroup
            variant="outline"
            size="default"
            value={value}
            onValueChange={(val) => setValue(val)}
        >
            <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
            <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
            <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
        </ToggleGroup>
    )
}

export function ToggleExample() {
    const [value, setValue] = React.useState<Boolean>()

    return (
        <div className="flex flex-col justify-center items-center">
            <Toggle onCheckedChange={(val) => setValue(val)}>
                <LuItalic />
            </Toggle>
            {!value && <p>Above Toggle is <span className="text-error-text">false</span></p>}
            {value && <p>Above Toggle is <span className="text-success-text">true</span></p>}
        </div>
    )
}