import Link from "next/link"

import { getUser } from "@/data/user-service"

import Button from "@/components/ui/button"
import Input from "@/components/ui/input"

import { update } from "../actions"

interface IProps {
  params: { id: number }
}

export default async function EditUserPage({ params }: IProps) {
  const user = await getUser({ id: params.id })
  if (!user) return null

  return (
    <form className="relative flex flex-col gap-4 p-4 mb-4" action={update}>
      <div className="flex gap-8 items-center">
        <Button type="submit">Save & Continue</Button>
        <Link
          className="no-underline font-bold"
          href={`/admin/users/${user.id}/delete`}
        >
          Delete
        </Link>
      </div>

      <Input id="id" type="hidden" name="id" defaultValue={user.id} />

      {/* TODO: user.name should not be nullable, prisma schema plz ? */}
      <Input
        required
        id="name"
        type="text"
        name="name"
        label="Name"
        defaultValue={user.name ?? ""}
        placeholder="Kent Brockman"
      />
      <Input
        required
        id="email"
        type="email"
        name="email"
        label="Email"
        defaultValue={user.email}
        placeholder="kent@brockman.com"
      />
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
