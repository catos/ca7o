import Aside from "./aside"

// TODO: verify if this is needed
export const revalidate = 0

type Props = {
  children: React.ReactNode
}

export default function AdminLayout({ children }: Props) {
  return (
    <div className="flex -m-4">
      <Aside />
      <div className="flex-1 p-4">{children}</div>
    </div>
  )
}
