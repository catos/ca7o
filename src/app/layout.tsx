import Providers from "@/components/Providers"

import Header from "../components/Header"
import "./globals.css"

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
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
