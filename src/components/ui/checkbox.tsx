"use client"

import { cn } from "@/lib/utils"
import { InputHTMLAttributes } from "react"
import { LuCheck } from "react-icons/lu"

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> { }

function Checkbox({ className = "", ...props }: CheckboxProps) {
  return (
    <label className={cn('relative inline-flex items-center', className)}>
      <input
        type="checkbox"
        className="peer appearance-none size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:ring-2 focus-visible:ring-ring/50 checked:bg-primary checked:border-primary disabled:cursor-not-allowed disabled:opacity-50"
        {...props}
      />
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-white peer-checked:visible invisible">
        <LuCheck className="size-3.5" />
      </span>
    </label>
  )
}

export { Checkbox }
