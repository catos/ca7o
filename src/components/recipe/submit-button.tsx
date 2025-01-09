"use client"

import { LoaderCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom"

export function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      {pending ? <LoaderCircle className="animate-spin" /> : children}
    </Button>
  )
}
