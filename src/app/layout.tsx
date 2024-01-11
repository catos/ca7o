import Header from "@/components/header"
import Providers from "@/components/providers"
import { Inter, Roboto_Mono } from "next/font/google"

import "../styles/globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
})

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
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body className="bg-gray-100">
        <Providers>
          <Header />
          <main className="container mx-auto p-4 flex flex-col flex-1">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
