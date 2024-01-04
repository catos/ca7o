import { deleteUser, getUser } from "@/data/user-actions"

import Button from "@/components/ui/button"
import Link from "@/components/ui/link"
import Title from "@/components/ui/title"

type Props = {
  params: { email: string }
}

export default async function DeleteUser({ params }: Props) {
  const user = await getUser(decodeURIComponent(params.email))

  if (!user)
    return (
      <Title type="h1" className="m-0">
        User not found
      </Title>
    )

  return (
    <form action={deleteUser}>
      <input type="hidden" name="id" defaultValue={user.id} />

      <Title type="h3">Are you sure you want to delete this user ?</Title>
      <Title type="h1" className="m-0">
        {user.name}
      </Title>
      <Title type="h2">{user.email}</Title>

      <div className="flex gap-8 items-center justify-between">
        <Button type="submit">Delete</Button>
        <Link
          className="no-underline font-bold"
          href={`/admin/users/${user.id}`}
        >
          Cancel
        </Link>
      </div>
    </form>
  )
}
