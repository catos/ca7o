import { getUser } from "@/data/user-service"

import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Link from "@/components/ui/link"
import Title from "@/components/ui/title"

import { del } from "../../actions"

interface IProps {
  params: { id: number }
}

export default async function DeleteRecipe({ params }: IProps) {
  const user = await getUser({ id: params.id })

  if (!user) return null

  return (
    <form action={del}>
      <Input id="id" type="hidden" name="id" defaultValue={user.id} />

      <Title type="h3">Are you sure you want to delete this user ?</Title>
      <Title type="h1" noMargin>
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
