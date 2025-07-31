import { Inter } from "next/font/google"
import Header from "@/components/header/header"
import Providers from "@/components/providers"
import "../styles/globals.css"
import "../styles/variables.css"

// TODO: does this work ? for all nested pages?
// export const revalidate = 3600
export const dynamic = "force-dynamic"

const inter = Inter({
  subsets: ["latin"],
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
    <html lang="en" className={`dark ${inter.className}`}>
      <body className="bg-background text-foreground">
        <div>
          <Providers>
            <Header />
            <main className="mx-auto min-h-screen max-w-6xl overflow-hidden p-4 md:p-6">
              {children}
            </main>
            <footer className="text-muted-foreground mx-auto mt-8 max-w-6xl py-8 text-center text-sm">
              <div>
                © {new Date().getFullYear()} ca7o.com - What does all rights
                reserved mean?
              </div>
            </footer>
          </Providers>
        </div>
      </body>
    </html>
  )
}
