import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border border-transparent font-bold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        'absurdist-comedy': 'border-[#FFE08E] bg-[#554500] text-[#FFE08E]',
        'meta-analysis': 'border-[#AEBDCE] bg-[#343C46] text-[#AEBDCE]',
        'minor-catastrophe': 'border-[#FF553D] bg-[#621100] text-[#FF553D]',
        'formalized-ramblings': 'bg-[#800000]',
        'infinite-regression': 'bg-[#363940]',
        default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90 ",
        success: "bg-green-800 text-green-100",
        'ghost-info': "border-[#4184e466] bg-[#4184e41a] text-[var(--color-foreground-muted)]"
      },
      size: {
        xs: "text-xs px-2 py-0.5",
        base: "text-base px-3 py-1"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "xs"
    },
  }
)

function Badge({
  className,
  variant = "default",
  size = 'xs',
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
