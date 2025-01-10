"use client"

import { RssIcon } from "lucide-react"
import { Dialog } from "../ui/dialog"

export default function FeedXml({ feed }: { feed: any }) {
  return (
    <Dialog>
      <RssIcon />
      <pre className="h-1/2">{JSON.stringify(feed)}</pre>
    </Dialog>
  )
}
