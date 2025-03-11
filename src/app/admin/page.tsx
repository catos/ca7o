import { Link } from "@/components/ui/link"

export default async function Admin() {
  return (
    <div className="p-4">
      <h1>Admin</h1>

      <section>
        <h2>Links</h2>
        <ul>
          <li>
            <Link href="https://nextjs.org/docs">Next.js docs</Link>
          </li>
          <li>
            <Link href="https://supabase.com/dashboard/project/volslymfkdeblzqdnfkp">
              Supabase dashboard
            </Link>
          </li>
          <li>
            <Link href="https://github.com/catos">Github</Link>
          </li>
          <li>
            <Link href="https://tailwindcss.com/docs">Tailwind docs</Link>
          </li>
          <li>
            <Link href="https://lucide.dev/icons/">Lucide icons</Link>
          </li>
        </ul>
      </section>

      <section>
        <h2>WIPs</h2>
        <ul>
          <li>
            <Link href="/notes">Notes</Link>
          </li>
          <li>
            <Link href="/ui">UI</Link>
          </li>
          <li>
            <Link href="/chat">Chat</Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
