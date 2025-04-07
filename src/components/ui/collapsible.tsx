"use client"

import {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  HTMLAttributes,
  ButtonHTMLAttributes,
} from "react"

interface CollapsibleContextType {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const CollapsibleContext = createContext<CollapsibleContextType | undefined>(undefined)

interface CollapsibleProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  open?: boolean
  defaultOpen?: boolean
  onChange?: Dispatch<SetStateAction<boolean>>
}

function Collapsible({
  open: controlledOpen,
  defaultOpen = false,
  onChange,
  children,
  ...props
}: CollapsibleProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : uncontrolledOpen

  const setOpen: Dispatch<SetStateAction<boolean>> = (value) => {
    if (isControlled) {
      onChange?.(value)
    } else {
      setUncontrolledOpen((prev) => {
        const next = typeof value === "function" ? value(prev) : value
        onChange?.(() => next)
        return next
      })
    }
  }

  return (
    <div data-slot="collapsible" {...props}>
      <CollapsibleContext.Provider value={{ open, setOpen }}>
        {children}
      </CollapsibleContext.Provider>
    </div>
  )
}

interface CollapsibleTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

function CollapsibleTrigger({ children, ...props }: CollapsibleTriggerProps) {
  const ctx = useContext(CollapsibleContext)
  if (!ctx) throw new Error("CollapsibleTrigger must be used within a Collapsible")

  return (
    <span
      type="button"
      onClick={() => ctx.setOpen((prev) => !prev)}
      data-slot="collapsible-trigger"
      {...props}
    >
      {children}
    </span>
  )
}

interface CollapsibleContentProps
  extends HTMLAttributes<HTMLDivElement> {}

function CollapsibleContent({ children, hidden, ...props }: CollapsibleContentProps) {
  const ctx = useContext(CollapsibleContext)
  if (!ctx) throw new Error("CollapsibleContent must be used within a Collapsible")

  return (
    <div
      hidden={!ctx.open}
      data-slot="collapsible-content"
      {...props}
    >
      {children}
    </div>
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
