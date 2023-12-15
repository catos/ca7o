import Icon from "@/components/icon"

import Link from "@/components/ui/link"
import List from "@/components/ui/list"
import ListItem from "@/components/ui/list-item"

export const revalidate = 0

// TODO: Move CRUDs to admin folder
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex -m-4">
      <div className="h-screen p-4 border-r">
        <List className="pl-0 list-none">
          <AsideItem title="Home" href="/admin" icon="home" />
          <AsideItem title="Users" href="/admin/users" icon="users" />
          <AsideItem title="Todos" href="/admin/todos" icon="todos" />
          <AsideItem title="Recipes" href="/admin/recipes" icon="document" />
        </List>
      </div>
      <div className="flex-1 p-4">{children}</div>
    </div>
  )
}

function AsideItem({
  title,
  href,
  icon,
}: {
  title: string
  href: string
  icon: string
}) {
  return (
    <ListItem className="p-0 md:w-48">
      <Link className="flex items-center gap-2 p-2 no-underline" href={href}>
        <Icon className="w-4 h-4" name={icon} />
        <span className="text-sm hidden md:inline-block">{title}</span>
      </Link>
    </ListItem>
  )
}
