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
          <div className="flex flex-col gap-4 items-center">
            <Logo className="opacity-50" />
            <h2 className="m-0 text-2xl/9 font-bold tracking-tight">
              Logg inn for å se dine favoritter
            </h2>
          </div>

          <Input required id="email" type="email" name="email" label="E-post" />

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label htmlFor="password">Passord</label>
              <div className="text-sm">
                <Link href="/auth/forgot-password">Glemt passord?</Link>
              </div>
            </div>
            <Input required id="password" type="password" name="password" />
          </div>

          <div className="flex gap-4 flex-col">
            <Button type="submit">Logg inn</Button>
            <Button variant="outlined" type="submit" formAction={signUp} className="w-full">
              Registrer deg
            </Button>
          </div>
        </form>
        <form className="mt-4">
          <Button
            onClick={signInWithGithub}
            className="w-full flex items-center gap-4"
            variant="link"
          >
            <GithubIcon className="w-4 h-4" />
            Logg inn med GitHub
          </Button>
        </form>
      </section>
    </div>
  )
}
