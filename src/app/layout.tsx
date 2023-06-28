import Nav from './nav'
import "./globals.css"

export const metadata = {
  title: 'ca7o',
  description: 'Description for ca7o',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-white'>
        <Nav />
        {children}
      </body>
    </html>
  )
}
