"use client"

import { SessionProvider } from "next-auth/react"

import { TooltipProvider } from "@/components/ui/tooltip"

type Props = {
  children: React.ReactNode
}

export default function Providers({ children }: Props) {
  return (
    <SessionProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </SessionProvider>
  )
}
