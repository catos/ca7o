import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex gap-4 p-4 bg-slate-300">
      <span className="font-bold">ca7o</span>
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>

      <div className="flex flex-1 justify-end">
        Login/logout
      </div>
    </div>
  )
}