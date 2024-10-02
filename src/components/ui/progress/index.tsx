import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"



const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className=
      "relative h-2 w-full overflow-hidden rounded-full bg-stone-900/20 dark:bg-stone-50/20"
      
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-green-800 transition-all dark:bg-stone-50"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
