"use client"

// Error components must be Client components
import { useEffect } from "react"

import Button from "@/components/ui/button"
import Heading from "@/components/ui/heading"

// TODO: implement error page for all routes
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container p-4 text-center bg-white">
      <Heading>Error Boundary from root</Heading>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  )
}
