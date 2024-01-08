import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

import Heading from "@/components/ui/heading"

export default async function Admin() {
  const session = await getServerSession()
  if (!session) {
    redirect("/api/auth/signin")
  }

  return (
    <div>
      <Heading>Admin</Heading>

      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}
