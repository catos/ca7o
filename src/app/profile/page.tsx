import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Input } from "@/components/ui/input"
import { getProfile, update } from "@/data/profile.actions"
import { getInitials } from "@/lib/get-initials"
import { createClient } from "@/utils/supabase/server"
import Image from "next/image"
import { redirect } from "next/navigation"

export default async function Profile() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect("/login")
  }

  const profile = await getProfile(user.id)

  // TODO: temporary solution
  if (!user) {
    return redirect("/login")
  }

  const name = user.user_metadata.full_name ?? user.app_metadata.email

  return (
    <div>
      <div>
        <Avatar
          fallback={getInitials(name)}
          src={user.user_metadata.avatar_url}
          className="w-32 h-32 hover:ring-2 ring-primary"
        />
        <Heading className="m-0">{user.user_metadata.full_name}</Heading>
        <Heading as="h2">{user.email}</Heading>
      </div>
      <form action={update} className="relative flex flex-col gap-4 p-4 mb-4">
        <Input name="id" hidden defaultValue={user.id} />
        <Input
          name="username"
          label="Username"
          readOnly
          defaultValue={profile?.username ?? ""}
        />
        <Input
          name="fullname"
          label="Full Name"
          defaultValue={profile?.name ?? ""}
        />
        <Input
          name="avatar"
          label="Avatar"
          defaultValue={profile?.avatar_url ?? ""}
        />
        <Button type="submit">Save</Button>
      </form>
    </div>
  )
}
