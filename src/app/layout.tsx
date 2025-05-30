import { Inter, Roboto_Mono } from "next/font/google"
import Header from "@/components/header"
import Providers from "@/components/providers"
import "../styles/globals.css"

// TODO: does this work ? for all nested pages?
// export const revalidate = 3600
export const dynamic = "force-dynamic"

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
    <html
      lang="en"
      className={`dark ${inter.variable} ${roboto_mono.variable}`}
    >
      <body className="bg-background text-foreground">
        <div>
          <Providers>
            <Header />
            <main className="mx-auto min-h-screen max-w-6xl overflow-hidden p-4 md:p-6">
              {children}
            </main>
          </Providers>
        </div>
      </body>
    </html>
  )
}
