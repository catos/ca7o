"use client"

// Error components must be Client components
import { useEffect } from "react"

import { Button } from "@/components/ui/button"

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
    <div className="sm:w-2/3 md:w-1/2 text-center mx-auto flex flex-col gap-4 items-center">
      <h1>Error Boundary from root</h1>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  )
}
