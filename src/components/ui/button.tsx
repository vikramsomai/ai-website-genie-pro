
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground shadow-lg hover:shadow-glow hover:-translate-y-1 hover:scale-105 transition-spring glass-morphism neon-glow",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-glow hover:-translate-y-0.5 glass-morphism",
        outline:
          "border-2 border-border bg-transparent hover:bg-accent hover:text-accent-foreground shadow-sm hover:shadow-neon hover:border-primary/50 glass-morphism hover:-translate-y-0.5 lightning-border",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-glow hover:-translate-y-0.5 glass-morphism",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:shadow-glow glass-morphism",
        link: "text-primary underline-offset-4 hover:underline hover:text-premium-gold transition-colors",
        whatsapp: "bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 shadow-lg hover:shadow-glow font-semibold transition-spring hover:-translate-y-1 hover:scale-105 glass-morphism animate-pulse-glow",
        premium: "bg-gradient-premium text-white shadow-premium hover:shadow-neon font-semibold transition-spring hover:-translate-y-1 hover:scale-105 relative overflow-hidden lightning-border holographic before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:animate-shimmer",
        glass: "bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 shadow-lg hover:shadow-glow transition-spring hover:-translate-y-0.5 hover:scale-105 glass-morphism",
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        sm: "h-10 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-xl px-8 text-lg font-semibold",
        xl: "h-16 rounded-2xl px-10 text-xl font-bold",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
