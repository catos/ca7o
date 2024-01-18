import { signOut } from "next-auth/react"
import React from "react"

export default function SignOutPage() {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/" })
  }

  return (
    <div>
      <h1>Hade på bade!</h1>
      <button onClick={handleSignOut}>Logg ut</button>
    </div>
  )
}
