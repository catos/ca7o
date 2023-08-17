import Providers from "@/components/providers"

import "./globals.css"
import Nav from "./nav"

export const metadata = {
  title: "ca7o",
  description: "Description for ca7o",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Providers>
          <Nav />
          <main className="container mx-auto bg-white flex p-4 min-h-screen flex-col">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
