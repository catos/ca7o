import Heading from "@/components/ui/heading"
import Link from "@/components/ui/link"

export default async function Admin() {
  return (
    <div className="p-4">
      <Heading>Admin</Heading>
      {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
      <ul>
        <li>
          <Link
            href="https://vercel.com/catos-projects-1ae1051f/ca7o-f8cy"
            target="_blank"
          >
            Vercel hosting
          </Link>
        </li>
        <li>
          <Link
            href="https://supabase.com/dashboard/project/volslymfkdeblzqdnfkp"
            target="_blank"
          >
            Supabase backend
          </Link>
        </li>
        <li>
          <Link href="https://github.com/catos">Github</Link>
        </li>
        <li>
          <Link href="https://tailwindcss.com/docs">Tailwind docs</Link>
        </li>
      </ul>
    </div>
  )
}
