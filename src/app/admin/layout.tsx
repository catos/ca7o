import Aside from "@/components/admin/aside"

type Props = {
  children: React.ReactNode
}

export default function AdminLayout({ children }: Props) {
  return (
    <div className="flex">
      <Aside />
      <div className="flex-1">{children}</div>
    </div>
  )
}
