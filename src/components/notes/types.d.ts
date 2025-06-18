import { Tables } from "@/types/database"

export type NoteWithChildren = Tables<"notes"> & {
  children: NoteWithChildren[]
}
