import { getUsers } from "@/data/user-actions"

import Link from "@/components/ui/link"

export default async function Users() {
  const users = await getUsers()

  return (
    <div className="flex flex-col gap-4">
      <h1>Users...</h1>

      <Link href="/admin/users/create">Create New</Link>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="p-4">Id</th>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4">{u.id}</td>
              <td className="px-6 py-4">
                <Link href={`/admin/users/${encodeURIComponent(u.email)}`}>
                  {u.name}
                </Link>
              </td>
              <td className="px-6 py-4">{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
