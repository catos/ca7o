// "use client"

// import { useDebounce } from "@/lib/use-debounce"
// import useForm from "@/lib/use-form"
// import { twMerge } from "tailwind-merge"

// import { Button } from "@/components/ui/button"
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
// import Textarea from "@/components/ui/textarea"

// import { Tables } from "@/types/database"

// type Props = {
//   note: Tables<"notes">
//   nextState?: number
// }

// // TODO: move all components to components-folder
// export function NoteItem({ note, nextState = 0 }: Props) {
//   // note: review/refactor, not sure how though
//   const saveChanges = useDebounce(() => {
//     // TODO: check if there is a better way to get formdata
//     const formData = new FormData()
//     formData.set("id", note.id.toString())
//     formData.set("content", values.content)
//     formData.set("state", note.state.toString())

//     if (values.content !== note.content) {
//       //   updatenote(formData)
//       console.log("TODO: update todo")
//     }
//   })

//   const { values, register, handleSubmit } = useForm({
//     initialValues: {
//       content: note.content ?? "",
//     },
//     onSubmit: () => {
//       saveChanges()
//     },
//     onChange: () => {
//       saveChanges()
//     },
//   })

//   const isDone = note.state > 0

//   const handleOpenChange = (open: boolean) => {
//     if (!open) {
//       saveChanges()
//     }
//   }

//   return (
//     <Dialog onOpenChange={handleOpenChange}>
//       <DialogTrigger
//         className={twMerge(
//           "p-1 text-left cursor-pointer hover:bg-slate-100",
//           isDone && "line-through text-gray-500"
//         )}
//       >
//         {note.content.substring(0, 10)}
//       </DialogTrigger>
//       <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
//         <form className="flex flex-col gap-2 h-96" onSubmit={handleSubmit}>
//           <div className="flex-1 flex flex-col">
//             <Textarea
//               className="bg-transparent border-none flex-1 h-full"
//               {...register("content")}
//               placeholder="Add content here (optional)"
//             />
//           </div>
//           <div className="flex justify-end text-sm text-foreground/50">
//             Sist oppdatert: {note.updated_at.toLocaleString()}
//           </div>
//           <div className="mt-4 flex gap-4">
//             {/* TODO: impl */}
//             {/* <UpdateState todo={todo} value={nextState} />
//             <DeleteForm todo={todo} /> */}
//             <div className="flex-1 text-right">
//               <Button type="submit">Save</Button>
//             </div>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   )
// }
