import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export const Card = ({children}: {children: ReactNode}) => {
    return <div className="w-full rounded-sm border border-[#4184e466]">{children}</div>
}

export const CardHeader = ({children, className}: {
    children: ReactNode,
    className?: string
}) => {
    return (
        <div className={cn("px-4 py-2 border-b border-[#4184e466] text-sm bg-[#4184e41a]", className)}>
            {children}
        </div>
    )
}

export const CardContent = ({children}: {children: ReactNode}) => {
    return <div className="p-4">{children}</div>
}