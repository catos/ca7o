import { Metadata } from "next"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "About",
  description: "About page",
}

export default async function About() {
  return (
    <>
      <h1>About</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolor
        debitis perferendis voluptatum ipsam atque aut iste molestias. Dolorem
        magni iusto blanditiis vero, praesentium aperiam fugit atque dicta enim
        dolorum?
      </p>
    </>
  )
}
