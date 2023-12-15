// TODO: Add optional callback to handle error, default to throwing error
/**
 * Handle database error
 * @param error error object
 * @param message message to throw
 */
export function handleDBError(error: unknown, message: string) {
  console.error("Database error", error)
  throw new Error(message)
}
