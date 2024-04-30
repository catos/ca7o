import Feed from "@/components/feed/feed"

export default async function FeedPage() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "1rem",
      }}
    >
      <Feed url="https://www.reddit.com/r/funny/.rss" />
      <Feed url="https://www.reddit.com/r/godot/.rss" />
      <Feed url="https://www.gamer.no/rss" />
      <Feed url="https://code.visualstudio.com/feed.xml" />
    </div>
  )
}
