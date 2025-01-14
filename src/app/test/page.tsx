import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"

import TestForm from "./test-form"

export default function Test() {
  return (
    <div>
      <h1>Testform!</h1>

      <TestForm />

      <Heading>Buttons</Heading>

      <div className="flex gap-2">
        <Button>Default</Button>
      </div>
    </div>
  )
}
