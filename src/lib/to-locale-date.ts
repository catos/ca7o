export default function toLocaleDate(date: string | Date | null): string {
  if (!date) {
    return ""
  }

  const _date = typeof date === "string" ? new Date(Date.parse(date)) : date

  return _date.toLocaleDateString("nb-NO", {
    year: "numeric",
    day: "2-digit",
    month: "2-digit",
  })
}
