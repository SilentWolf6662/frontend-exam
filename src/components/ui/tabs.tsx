"use client"

import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, createContext, HTMLAttributes, ReactNode, useContext, useState } from "react"

type TabsProps = {
  defaultValue?: string
  className?: string
  children: ReactNode
}

type TabsContextType = {
  activeTab: string
  setActiveTab: (value: string) => void
}

const TabsContext = createContext<TabsContextType | undefined>(undefined)

function Tabs({ defaultValue, className, children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue ?? "")

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn("flex flex-col gap-2", className)}>{children}</div>
    </TabsContext.Provider>
  )
}

function TabsList({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

type TabsTriggerProps = {
  value: string
  className?: string
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

function TabsTrigger({ value, className, children, ...props }: TabsTriggerProps) {
  const context = useContext(TabsContext)
  if (!context) throw new Error("TabsTrigger must be used within <Tabs>")

  const { activeTab, setActiveTab } = context
  const isActive = activeTab === value

  return (
    <button
      type="button"
      data-slot="tabs-trigger"
      onClick={() => setActiveTab(value)}
      data-state={isActive ? "active" : "inactive"}
      className={cn(
        "inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50",
        isActive
          ? "bg-background text-foreground"
          : "",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

type TabsContentProps = {
  value: string
  className?: string
  children: ReactNode
}

function TabsContent({ value, className, children }: TabsContentProps) {
  const context = useContext(TabsContext)
  if (!context) throw new Error("TabsContent must be used within <Tabs>")

  if (context.activeTab !== value) return null

  return (
    <div
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
    >
      {children}
    </div>
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
