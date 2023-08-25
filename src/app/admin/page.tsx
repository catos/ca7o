import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

import Title from "@/components/ui/title"

export default async function Admin() {
  const session = await getServerSession()
  if (!session) {
    redirect("/api/auth/signin")
  }

  return (
    <div>
      <Title>Admin</Title>

      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}
