import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

import Title from "@/components/ui/title"

export default function Admin() {
  const session = getServerSession()
  if (!session) {
    redirect("/api/auth/signin")
  }

  return (
    <div>
      <Title>Admin</Title>
    </div>
  )
}
