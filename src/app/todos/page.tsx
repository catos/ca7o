// TODO: move TODO-components to components-folder
export default async function Todos() {
  return null

  // TODO: use supabase instead of next auth to get userId
  // TODO: use supabase for fetching todos (create notes instead)

  //   if (!session) {
  //     return (
  //       <p>
  //         You must <Link href="/auth/sign-in">log in</Link> in to use TODOs
  //       </p>
  //     )
  //   }

  //   const data = await getTodos(session.user.id)
  //   if (!data || data.length === 0) {
  //     return (
  //       <>
  //         <CreateForm />
  //         <div className="py-4 text-xl text-center">
  //           No TODOs... TODO: start creating some!
  //         </div>
  //       </>
  //     )
  //   }

  //   const todos = data?.filter((p) => p.state === 0) ?? []
  //   const todones = data?.filter((p) => p.state > 0) ?? []

  //   return (
  //     <div className="flex flex-col gap-4">
  //       <div className="flex flex-col gap-4 p-4 bg-white rounded-md">
  //         <CreateForm />
  //         <Heading as="h2">TODOs</Heading>
  //         <div className="flex flex-col gap-2 bg-white">
  //           {todos?.map((todo) => (
  //             <TodoItem key={todo.id} todo={todo} nextState={1} />
  //           ))}
  //         </div>
  //         <div className="flex flex-col gap-2">
  //           {todones?.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
  //         </div>
  //       </div>
  //     </div>
  //   )
}
