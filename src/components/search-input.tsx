"use client"

import { SearchIcon } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "./ui/input"

export function SearchInput() {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  const searchParams = useSearchParams()
  const q = searchParams.get("q")
  const [inputValue, setInputValue] = useState<string | null>(q || "")

  useEffect(() => {
    setInputValue(q)
  }, [q])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

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
      setInputValue("")
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
      <Input
        id="q"
        type="text"
        name="q"
        placeholder="Search"
        className="ml-auto w-32 pr-10 focus:w-full md:focus:w-1/2"
        value={inputValue || ""}
        onChange={handleChange}
        ref={inputRef}
      />
      <Button
        variant="icon"
        className="absolute top-1 right-2 h-7 w-7 p-1"
        type="submit"
      >
        <SearchIcon className="w-5" />
      </Button>
    </form>
  )
}
