import { getInitials } from "@/lib/get-initials"
import { createClient } from "@/utils/supabase/server"
import { LogOutIcon } from "lucide-react"
import { redirect } from "next/navigation"
import { getProfile, update } from "@/data/profile.actions"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default async function Profile() {
  const supabase = await createClient()

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
        <h1 className="m-0">{user.user_metadata.full_name}</h1>
        <h2>{user.email}</h2>
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

      <form
        className="p-2 flex gap-2 items-center"
        action="/auth/signout"
        method="post"
      >
        <Button variant="outlined" type="submit">
          <LogOutIcon />
          Logg ut
        </Button>
      </form>
    </div>
  )
}
