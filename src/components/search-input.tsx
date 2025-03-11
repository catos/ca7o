"use client"

import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

export function SearchInput() {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault()
        if (inputRef.current) {
          inputRef.current.focus()
          inputRef.current.select()
        }
      }

      if (e.key === "Escape") {
        if (inputRef.current) {
          inputRef.current.blur()
        }
      }
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const query = formData.get("q")
    if (typeof query === "string") {
      router.push(`/recipes?q=${query}`)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="GET"
      action="/recipes"
      className="relative"
    >
      <input
        type="text"
        name="q"
        placeholder="Search"
        className="input ml-auto pr-10 w-32 focus:w-full focus:md:w-1/2"
        ref={inputRef}
      />
      <Button
        variant="button-icon"
        className="absolute right-2 top-1"
        type="submit"
      >
        <SearchIcon />
      </Button>
    </form>
  )
}
