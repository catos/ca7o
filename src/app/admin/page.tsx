import Heading from "@/components/ui/heading"
import Link from "@/components/ui/link"

export default async function Admin() {
  return (
    <div className="p-4">
      <Heading>Admin</Heading>
      {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
      <ul>
        <li>
          <Link href="https://vercel.com/catos-projects-1ae1051f/ca7o-f8cy">
            Vercel hosting
          </Link>
        </li>
        <li>
          <Link href="https://nextjs.org/docs">Next.js docs</Link>
        </li>
        <li>
          <Link href="https://supabase.com/dashboard/project/volslymfkdeblzqdnfkp">
            Supabase backend
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
    </div>
  )
}
