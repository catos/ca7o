export function handleDBError(error: unknown, message: string) {
  console.error("Database error", error)
  throw new Error(message)
}
