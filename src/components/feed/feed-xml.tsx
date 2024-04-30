"use client"

import { RssIcon } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"

export default function FeedXml({ feed }: { feed: any }) {
  return (
    <Dialog>
      <DialogTrigger>
        <RssIcon />
      </DialogTrigger>
      <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
        <pre className="h-1/2">{JSON.stringify(feed)}</pre>
      </DialogContent>
    </Dialog>
  )
}
