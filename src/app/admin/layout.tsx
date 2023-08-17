import Link from "@/components/ui/link"
import List from "@/components/ui/list"
import ListItem from "@/components/ui/list-item"

// TODO: Move CRUDs to admin folder
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex -m-4">
      <div className="w-64 h-screen p-4 bg-primary-300">
        <List>
          <ListItem>
            <Link href="/admin/">Dashboard</Link>
          </ListItem>
          <ListItem>
            <Link href="/admin/recipes">Recipes</Link>
            <List>
              <ListItem>
                <Link href="/admin/recipes/create">New</Link>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </div>
      <div className="flex-1 p-4">{children}</div>
    </div>
  )
}
