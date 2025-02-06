export default function Loading() {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="animate-pulse bg-foreground/50 h-64 w-full sm:h-96" />
      <div className="animate-pulse bg-foreground/50 h-8 w-full" />
      <div className="animate-pulse bg-foreground/50 h-16 w-full" />
      <div className="animate-pulse bg-foreground/50 h-12 w-full" />

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="animate-pulse bg-foreground/50 min-h-64 w-full" />
        <div className="animate-pulse bg-foreground/50 min-h-64 w-full" />
      </div>
    </div>
  )
}
