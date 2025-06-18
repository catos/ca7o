/**
 * Truncates a title to a specified length and appends "..." if it exceeds that length.
 * @param title - The title to be truncated.
 * @param length - The maximum length of the title.
 * @returns The truncated title.
 */
export function snip(title: string, length: number): string {
  if (title.length > length) {
    return title.substring(0, length) + "..."
  }
  return title
}
