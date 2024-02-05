import { Suspense } from "react"
import SignIn from "@/components/auth/sign-in"

// This component passed as a fallback to the Suspense boundary
// will be rendered in place of the sign-in-form in the initial HTML.
// When the value is available during React hydration the fallback
// will be replaced with the `<SignIn>` component.
function SignInFallback() {
  return <>placeholder</>
}

export default function Page() {
  return (
    <>
      <nav>
        <Suspense fallback={<SignInFallback />}>
          <SignIn />
        </Suspense>
      </nav>
      <h1>Dashboard</h1>
    </>
  )
}
