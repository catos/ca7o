import { createServerClient, type CookieOptions } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"
import type { Database } from "@/types/database"

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          )
          response = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // TODO: Test and verify this code
  // https://supabase.com/docs/guides/auth/server-side/nextjs?queryGroups=router&router=app

  const { error } = await supabase.auth.getUser()

  const { pathname } = request.nextUrl
  const protectedPaths = ["/admin", "/profile"]
  if (protectedPaths.some((path) => pathname.startsWith(path)) && error) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return response
}
