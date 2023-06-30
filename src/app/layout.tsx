import Providers from "@/components/Providers"

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
          {children}
        </Providers>
      </body>
    </html>
  )
}
