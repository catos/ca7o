"use client"

import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Heading from "@/components/ui/heading"
import Input from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "@/components/ui/link"

export default function SignIn() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const email = formData.get("email")
    const password = formData.get("password")

    await signIn("credentials", {
      email: email,
      password: password,
      redirect: true,
      callbackUrl: callbackUrl ?? "/",
    })
  }

  return (
    <div className="flex justify-center">
      <section className="rounded-md sm:w-1/2 md:w-5/12 bg-white p-4 mt-8">
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col gap-4 p-4 mb-4"
        >
          <Heading className="mb-4">Sign In</Heading>
          <Input required id="email" type="email" name="email" label="Email" />

          <Input
            required
            id="password"
            type="password"
            name="password"
            label="Password"
          />

          <div className="flex justify-between py-2">
            <Link href="/auth/forgot-password">Glemt passord?</Link>

            <span className="flex items-center gap-2">
              <Checkbox id="remember" name="remember" />
              <Label htmlFor="remember">Husk meg</Label>
            </span>
          </div>

          <Button type="submit">Logg inn</Button>
          <Button variant="outline" type="submit" disabled>
            Registrer deg
          </Button>

          <p className="pt-4 italic text-base text-foreground/60">
            Denne site er så eksklusiv at du må kjenne fyren som lager den for å
            få tilgang... Sorry!
          </p>
        </form>
      </section>
    </div>
  )
}
