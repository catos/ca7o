import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import { getUser } from "@/data/user-service"

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
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null
        }

        const user = await getUser(credentials.username)

        const userExistsAndPasswordValid =
          user && (await bcrypt.compare(credentials.password, user.password))
        if (userExistsAndPasswordValid) {
          return {
            id: user.id.toString(),
            name: user.name,
            email: user.email,
          }
        } else {
          return null
        }
      },
    }),
  ],
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
