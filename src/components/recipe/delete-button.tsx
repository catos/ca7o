import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react"
import { XIcon } from "lucide-react"
import { useState } from "react"
import { deleteRecipe } from "@/data/recipe.actions"
import { Button } from "@/components/ui/button"

export function DeleteButton({ id }: { id: string }) {
  let [isOpen, setIsOpen] = useState(false)

  const handleDelete = async () => {
    const deleteForm = new FormData()
    deleteForm.append("id", id)
    deleteRecipe(deleteForm)

    setIsOpen(false)
  }

  return (
    <>
      <Button variant="icon" onClick={() => setIsOpen(true)}>
        <XIcon />
      </Button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="bg-background border-border max-w-lg space-y-4 rounded-md border p-12">
            <DialogTitle>Delete recipe</DialogTitle>
            <Description>
              Are you sure you want to delete this recipe? This action cannot be
              undone.
            </Description>
            <div className="flex justify-end gap-4">
              <Button variant="outlined" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}
