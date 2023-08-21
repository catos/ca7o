export default function toLocaleDate(date: Date | null): string {
  if (!date) {
    return ""
  }

  return date.toLocaleDateString("nb-NO", {
    year: "numeric",
    day: "2-digit",
    month: "2-digit",
  })
}
