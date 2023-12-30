import { Inter } from 'next/font/google'
import Link from "next/link"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* navbar is a common UI in many pages */}
        <div className="navbar">
          <Link href="/">home</Link>
          <Link href="/list">list page</Link>
        </div>
        {children} 
        {/* page.js is put inside children  */}
      </body>
    </html>
  )
}
