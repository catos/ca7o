"use client"

// Error components must be Client components
import { useEffect } from "react"

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
    <div>
      <h2>Something went wrong when showing the recipe!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
