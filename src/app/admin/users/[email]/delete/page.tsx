import { deleteUser, getUser } from "@/data/user-actions"

import { Button } from "@/components/ui/button"
import Heading from "@/components/ui/heading"
import Link from "@/components/ui/link"

type Props = {
  params: { email: string }
}

export default async function DeleteUser({ params }: Props) {
  const user = await getUser(decodeURIComponent(params.email))

  if (!user)
    return (
      <Heading as="h1" className="m-0">
        User not found
      </Heading>
    )

  return (
    <form action={deleteUser}>
      <input type="hidden" name="id" defaultValue={user.id} />

      <Heading as="h3">Are you sure you want to delete this user ?</Heading>
      <Heading as="h1" className="m-0">
        {user.name}
      </Heading>
      <Heading as="h2">{user.email}</Heading>

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
