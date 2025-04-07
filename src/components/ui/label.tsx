import { cn } from "@/lib/utils"
import type { ClassAttributes, InputHTMLAttributes, LabelHTMLAttributes } from "react"
import { Input } from "./input"

type LabelProps = {
    label: string
    name: string;
    className?: string;
    input?: InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement> | null
    props?: LabelHTMLAttributes<HTMLLabelElement> & ClassAttributes<HTMLLabelElement> | null
}

function Label({
    className,
    label,
    name,
    input,
    ...props
}: LabelProps) {
    return (
        <label
            data-slot="label"
            htmlFor={name}
            className={cn(
                "flex items-center gap-2 text-sm leading-none font-medium select-none",
                className
            )}
            {...props}
        >
            <div className="flex">
                {label && <p>{label}</p>}{input?.required && <span className="text-error-text">*</span>}
            </div>
            {input?.type && <Input data-slot="input" name={name} type={input.type} className={cn(
                input?.className
            )} required={input?.required} defaultValue={input?.defaultValue} />}
        </label>
    )
}

export { Label }
