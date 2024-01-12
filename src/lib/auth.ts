import bcrypt from "bcrypt"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import { getUser } from "@/data/user-actions"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, _) {
        if (!credentials) {
          return null
        }

        const user = await getUser(credentials.email)

        const userExistsAndPasswordValid =
          user && (await bcrypt.compare(credentials.password, user.password))
        if (userExistsAndPasswordValid) {
          return {
            id: user.id.toString(),
            name: user.name,
            email: user.email,
            avatar: user.avatar,
          }
        } else {
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/sign-in",
  },
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      return { ...token, ...user }
    },
    async session({ session, token }: { session: any; token: any }) {
      session.user = token
      return session
    },
  },
}

// TODO: make handy function to replace all auth-check in code: const session = await getServerSession(authOptions)
// type AccessType = "authenticated" | "admin"
// export async function isAuthorized(requiredAccess: AccessType) {
//   const session = await getServerSession(authOptions)
//   if (!session || !session.user) {
//     return { isAuthorized: false, session }
//   }

//   if (
//     requiredAccess === "admin" &&
//     session.user.email !== "cskogholt@gmail.com"
//   ) {
//     return { isAuthorized: false, session }
//   }

//   return { isAuthorized: true, session }
// }
