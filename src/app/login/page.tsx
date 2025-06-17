import { GithubIcon } from "lucide-react"
import { signIn, signInWithGithub, signUp } from "@/data/auth.actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "@/components/ui/link"
import Logo from "@/components/logo"

export default function LoginPage() {
  return (
    <div className="flex justify-center">
      <section className="rounded-md sm:w-2/3 md:w-1/2">
        <form action={signIn} className="relative flex flex-col gap-8">
          <div className="flex flex-col items-center gap-4">
            <Logo className="opacity-50" />
            <h2>Logg inn for å se dine favoritter</h2>
          </div>

          <Input required id="email" type="email" name="email" label="E-post" />

          <div>
            <Input
              required
              id="password"
              type="password"
              name="password"
              label="Passord"
            />
          </div>

          <div className="flex w-full flex-col items-center text-sm">
            <Link href="/auth/forgot-password">Glemt passord?</Link>
          </div>

          <div className="flex flex-col gap-4">
            <Button type="submit">Logg inn</Button>
            <Button
              variant="outlined"
              type="submit"
              formAction={signUp}
              className="w-full"
              disabled
            >
              Registrer deg
            </Button>
          </div>
        </form>
        <form className="mt-4">
          <Button
            onClick={signInWithGithub}
            className="flex w-full items-center gap-4"
            variant="link"
          >
            <GithubIcon className="h-4 w-4" />
            Logg inn med GitHub
          </Button>
        </form>
      </section>
    </div>
  )
}
