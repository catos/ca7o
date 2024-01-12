/**
 * Get initials from name
 * @param name Name to get initials from
 * @returns Initials from name
 */
export function getInitials(name: string): string {
  if (!name) {
    return ""
  }

  const words = name.split(" ")
  const initials = words.map((word) => word.charAt(0).toUpperCase())
  return initials.join("")
}
