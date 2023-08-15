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
      <body className="bg-white">
        <Providers>
          <Nav />
          <main className="bg-gray-100 flex py-4 min-h-screen flex-col items-center">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
