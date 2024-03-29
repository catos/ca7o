import Link from "next/link"
import { notFound } from "next/navigation"

import { getUser, updateUser } from "@/data/user-actions"

import { Button } from "@/components/ui/button"
import Input from "@/components/ui/input"

type Props = {
  params: { email: string }
}

export default async function EditUserPage({ params }: Props) {
  const user = await getUser(decodeURIComponent(params.email))

  if (!user) {
    notFound()
  }

  return (
    <form className="relative flex flex-col gap-4 p-4 mb-4" action={updateUser}>
      <div className="flex gap-8 items-center">
        <Button type="submit">Save & Continue</Button>
        <Link
          className="no-underline font-bold"
          href={`/admin/users/${encodeURIComponent(user.email)}/delete`}
        >
          Delete
        </Link>
      </div>

      <input type="hidden" name="id" defaultValue={user.id} />

      <Input
        required
        id="name"
        type="text"
        name="name"
        label="Name"
        defaultValue={user.name ?? ""}
      />

      <Input
        required
        id="email"
        type="email"
        name="email"
        label="Email"
        defaultValue={user.email}
      />

      <Input
        required
        id="avatar"
        type="text"
        name="avatar"
        label="Avatar"
        defaultValue={user.avatar ?? ""}
      />

      {/* TODO: Add reset password functionality */}
      {/* <Input
        required
        id="password"
        type="password"
        name="password"
        label="Password"
        defaultValue={user.password}
      /> */}
    </form>
  )
}
