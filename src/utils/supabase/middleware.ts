import { createServerClient } from "@supabase/ssr"
import { type NextRequest, NextResponse } from "next/server"

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // TODO: Test and verify this code
  // https://supabase.com/docs/guides/auth/server-side/nextjs?queryGroups=router&router=app

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { pathname } = request.nextUrl
  const protectedPaths = [
    /^\/recipes\/.*\/edit/,
    /^\/recipes\/create/,
    /^\/recipes\/export/,
    /^\/notes/,
    /^\/wesketch/,
  ]

  if (!user && protectedPaths.some((p) => p.test(pathname))) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return supabaseResponse
}
