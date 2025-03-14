import { useEffect, useRef } from "react"

type Timer = ReturnType<typeof setTimeout>
type SomeFunction = (...args: any[]) => void

/**
 * A hook that returns a debounced version of the function passed to it
 * Credit: https://medium.com/@philip.andrewweedewang/debounce-hook-in-react-typescript-in-20-lines-of-code-9cde26254d10
 * @param func The original, non debounced function (You can pass any number of args to it)
 * @param delay The delay (in ms) for the function to return
 * @returns The debounced function, which will run only if the debounced function has not been called in the last (delay) ms
 */
export function useDebounce<Func extends SomeFunction>(
  func: Func,
  delay = 1000
) {
  const timer = useRef<Timer>(null)

  useEffect(() => {
    return () => {
      if (!timer.current) return
      clearTimeout(timer.current)
    }
  }, [])

  const debouncedFunction = ((...args) => {
    if (!timer.current) {
      return
    }

    const newTimer = setTimeout(() => {
      func(...args)
    }, delay)
    clearTimeout(timer.current)
    timer.current = newTimer
  }) as Func

  return debouncedFunction
}
