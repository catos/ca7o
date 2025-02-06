import { Button } from "@/components/ui/button"

import TestForm from "./test-form"

export default function Test() {
  return (
    <div>
      <h1>Testform!</h1>

      <TestForm />

      <h1>Buttons</h1>

      <div className="flex gap-2">
        <Button>Default</Button>
      </div>
    </div>
  )
}
