import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { ArrowLeft, ArrowRight, ArrowDown, ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "flex",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(className)}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "p-4",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName


interface TabItem {
  title: string
  content: React.ReactNode
}

interface TabsProps {
  orientation?: "horizontal" | "vertical"
  backgroundColor?: boolean
  showIcon?: boolean
  showNumber?: boolean
  tabs: TabItem[]
  icon?: React.ReactNode
}

const TabsComponent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({
  orientation = "horizontal",
  backgroundColor = false,
  showIcon = false,
  showNumber = false,
  icon = null,
  tabs = [],
}, ref) => {
  const [activeTab, setActiveTab] = React.useState(-1)
  const tabsRef = React.useRef<HTMLDivElement | null>(null)

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (tabsRef.current && !tabsRef.current.contains(event.target as Node)) {
      setActiveTab(-1)
    }
  }

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  // Styles
  const tabWithBackgroundStyles = (isActive: boolean) => cn(
    "px-3 py-3 lg:px-8 lg:py-4 -transition-colors duration-300 cursor-pointer rounded-xl font-raleway font-bold text-xs",
    isActive 
      ? "bg-tosca-light-active text-tosca-tabs-active" 
      : "text-white hover:bg-tosca-light-active hover:text-tosca-tabs-active"
  )

  const tabWithoutBackgroundStyles = (isActive: boolean) => cn(
    "px-3 py-3 lg:px-8 lg:py-4 transition-colors duration-300 cursor-pointer rounded-xl font-raleway font-bold text-xs",
    isActive 
      ? "bg-tosca-light-active text-blue-tabs-active" 
      : "text-gray-600 hover:bg-tosca-light-active hover:text-blue-tabs-active"
  )

  const numberWithBackgroundStyles = (isActive: boolean) => cn(
    "mr-2 px-2 py-1 rounded-full text-xs font-bold",
    isActive 
      ? "bg-[#9fc7d2] text-tosca-tabs-active" 
      : "bg-[#669aa2] text-white",
    "hover:bg-[#9fc7d2] hover:text-tosca-tabs-active"
  )

  const numberWithoutBackgroundStyles = (isActive: boolean) => cn(
    "mr-2 px-2 py-1 rounded-full text-xs font-bold",
    isActive 
      ? "bg-[#94abc3] text-blue-tabs-active" 
      : "bg-gray-600 bg-opacity-40 text-gray-600"
  )

  const arrowVerticalStyles = (isTop: boolean, hasBackground: boolean) => cn(
    "absolute left-6 px-2 py-2 rounded-full",
    hasBackground 
      ? "bg-[#669aa2]" 
      : "bg-gray-600 bg-opacity-40",
    isTop ? "top-4 mb-4" : "bottom-4 mt-4"
  )

  const arrowHorizontalStyles = (isLeft: boolean, hasBackground: boolean) => cn(
    "absolute px-2 py-2 rounded-full",
    hasBackground 
      ? "bg-[#669aa2]" 
      : "bg-gray-600 bg-opacity-40",
    isLeft 
      ? "left-4 ml-4" 
      : "right-4 mr-4"
  )

  const renderIcon = () => {
    if (!icon || !React.isValidElement(icon)) return null

    return React.cloneElement(icon as React.ReactElement, {
      className: "mr-3 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:w-6"
    })
  }

  const renderTabs = () => (
    <div className={cn(
      "flex items-center justify-center",
      orientation === "vertical" && activeTab !== -1 ? "w-1/3" : "w-auto"
    )}>
      {showNumber && (
        <div className="flex flex-row items-center justify-center w-full">
          <div className={cn(
            orientation === "vertical"
              ? arrowVerticalStyles(true, backgroundColor)
              : arrowHorizontalStyles(true, backgroundColor)
          )}>
            {orientation === "vertical" ? (
              <ArrowUp
                size={20}
                strokeWidth={3}
                className="cursor-pointer max-lg:w-3 max-lg:h-3"
                onClick={() => setActiveTab((prev) => (prev > 0 ? prev - 1 : tabs.length - 1))}
              />
            ) : (
              <ArrowLeft
                size={20}
                strokeWidth={3}
                className="cursor-pointer max-lg:w-3 max-lg:h-3"
                onClick={() => setActiveTab((prev) => (prev > 0 ? prev - 1 : tabs.length - 1))}
              />
            )}
          </div>

          <TabsList className={cn(
            "flex",
            orientation === "vertical" ? "flex-col space-y-3" : "flex-row space-x-4"
          )}>
            {tabs.map((tab, index) => (
              <TabsTrigger
                key={index}
                value={index.toString()}
                className={backgroundColor
                  ? tabWithBackgroundStyles(activeTab === index)
                  : tabWithoutBackgroundStyles(activeTab === index)}
              >
                <span className={backgroundColor
                  ? numberWithBackgroundStyles(activeTab === index)
                  : numberWithoutBackgroundStyles(activeTab === index)}
                >
                  {index + 1}
                </span>
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className={cn(
            orientation === "vertical"
              ? arrowVerticalStyles(false, backgroundColor)
              : arrowHorizontalStyles(false, backgroundColor)
          )}>
            {orientation === "vertical" ? (
              <ArrowDown
                size={20}
                strokeWidth={3}
                className="cursor-pointer max-lg:w-3 max-lg:h-3"
                onClick={() => setActiveTab((prev) => (prev < tabs.length - 1 ? prev + 1 : 0))}
              />
            ) : (
              <ArrowRight
                size={20}
                strokeWidth={3}
                className="cursor-pointer max-lg:w-3 max-lg:h-3"
                onClick={() => setActiveTab((prev) => (prev < tabs.length - 1 ? prev + 1 : 0))}
              />
            )}
          </div>
        </div>
      )}

      {!showNumber && showIcon && (
        <TabsList className={cn(
          "flex",
          orientation === "vertical" ? "flex-col space-y-3" : "flex-row space-x-4"
        )}>
          {tabs.map((tab, index) => (
            <TabsTrigger
              key={index}
              value={index.toString()}
              className={backgroundColor
                ? tabWithBackgroundStyles(activeTab === index)
                : tabWithoutBackgroundStyles(activeTab === index)}
            >
              <span className="flex items-center justify-center">
                {renderIcon()}
                <span className="lg:pl-2">{tab.title}</span>
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
      )}

      {!showNumber && !showIcon && (
        <TabsList className={cn(
          "flex",
          orientation === "vertical" ? "flex-col space-y-3" : "flex-row space-x-4"
        )}>
          {tabs.map((tab, index) => (
            <TabsTrigger
              key={index}
              value={index.toString()}
              className={backgroundColor
                ? tabWithBackgroundStyles(activeTab === index)
                : tabWithoutBackgroundStyles(activeTab === index)}
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
      )}
    </div>
  )

  return (
    <div ref={tabsRef} className={cn(
      "inline-flex",
      orientation === "vertical" ? (activeTab !== -1 ? "w-full" : "w-auto") : "w-full"
    )}>
      <Tabs
        ref={ref}
        className={cn(
          "relative flex",
          orientation === "vertical" ? "flex-row" : "flex-col",
          backgroundColor && "bg-gradient-to-b from-tosca-normal-active to-tosca-pagination-darker p-2 rounded-2xl",
          showNumber && (orientation === "vertical" ? "py-16" : "px-24")
        )}
        value={activeTab.toString()}
        onValueChange={(value) => handleTabClick(Number(value))}
      >
        {renderTabs()}
        
        {activeTab !== -1 && (
          <div className={cn(
            "transition-all duration-300",
            orientation === "vertical" ? "w-full px-12 text-sm" : "w-full text-sm py-8",
            !backgroundColor && "text-gray-500"
          )}>
            {tabs.map((tab, index) => (
              <TabsContent
                key={index}
                value={index.toString()}
              >
                {tab.content}
              </TabsContent>
            ))}
          </div>
        )}
      </Tabs>
    </div>
  )
})
TabsComponent.displayName = "TabsComponent"

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsComponent }