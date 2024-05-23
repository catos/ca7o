import { Button } from "@/components/ui/button"
import Input from "@/components/ui/input"
import { getProfile, update } from "@/data/profile.actions"
import { createClient } from "@/utils/supabase/server"
import Image from "next/image"

export default async function Account() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return null
  }

  const profile = await getProfile(user?.id)
  // TODO: fix
  const avatarUrl =
    "https://volslymfkdeblzqdnfkp.supabase.co/storage/v1/object/public/avatars/ed5e39dc-409e-4671-91fc-8d86ac626e2b-0.21225383379750484.png"

  const alt = profile?.fullname ?? user.email

  console.log(user, profile)

  return (
    <div>
      <div>
        {avatarUrl && (
          <Image src={avatarUrl} alt={alt ?? ""} width={100} height={100} />
        )}
        <div>
          <span>{user.email}</span>
        </div>
      </div>
      <form action={update} className="relative flex flex-col gap-4 p-4 mb-4">
        <Input name="id" hidden defaultValue={profile?.id} />
        <Input
          name="fullname"
          label="Full Name"
          defaultValue={profile?.fullname ?? ""}
        />
        <Input
          name="avatar"
          label="Avatar"
          defaultValue={profile?.avatar ?? ""}
        />
        <Button type="submit">Save</Button>
      </form>
    </div>
  )
}
