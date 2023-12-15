import { createUser } from "@/data/user-actions"

import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Link from "@/components/ui/link"
import Title from "@/components/ui/title"

export default async function CreateUser() {
  return (
    <form
      className="relative flex flex-col gap-4 w-full bg-white shadow-md rounded px-8 py-8 mb-4"
      action={createUser}
    >
      <Title>Create user</Title>
      <Input
        required
        id="name"
        type="text"
        name="name"
        label="Name"
        placeholder="Kent Brockman"
      />
      <Input
        required
        id="email"
        type="email"
        name="email"
        label="Email"
        placeholder="kent@brockman.com"
      />
      <Input
        required
        id="password"
        type="password"
        name="password"
        label="password"
      />

      <div className="flex gap-8 items-center justify-between absolute right-8 top-8">
        <Button type="submit">Save</Button>
        <Link className="no-underline font-bold" href={`/admin/users`}>
          Cancel
        </Link>
      </div>
    </form>
  )
}
