import Parser from "rss-parser"
import Heading from "@/components/ui/heading"
import Link from "@/components/ui/link"
import toLocaleDate from "@/lib/to-locale-date"
import FeedXml from "./feed-xml"

const parser = new Parser()

export default async function Feed({ url }: { url: string }) {
  const feed = await parser.parseURL(url)
  const take10 = feed.items.slice(0, 10)

  return (
    <div className="bg-white p-4">
      <Heading as="h2" className="mb-4">
        {feed.title}
      </Heading>
      {take10.map((item) => (
        <div key={item.title} className="flex flex-col gap-1 mb-4">
          {item.link ? (
            <Link
              href={item.link}
              className="no-underline text-lg leading-tight"
            >
              {item.title}
            </Link>
          ) : (
            item.title
          )}

          <div className="text-xs text-gray-500">
            {item.pubDate && toLocaleDate(new Date(item.pubDate))}
          </div>
          <div className="line-clamp-2 text-ellipsis text-sm">
            {item.contentSnippet}
          </div>
        </div>
      ))}
      <FeedXml feed={feed} />
    </div>
  )
}
