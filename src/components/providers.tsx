"use client"

import { TooltipProvider } from "@/components/ui/tooltip"

type Props = {
  children: React.ReactNode
}

export default function Providers({ children }: Props) {
  return <TooltipProvider>{children}</TooltipProvider>
}
