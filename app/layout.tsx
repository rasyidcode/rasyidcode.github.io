import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'rasyidcode',
  description: 'My personal github pages',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-4 container mx-auto lg:w-2/3 xl:w-1/3`}>
        <nav>
          <div className="p-4 border bg-gray-50 flex items-center gap-3">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/dota">My Dota</Link>
          </div>
        </nav>
        
        <main className="py-4">{children}</main>
      </body>
    </html>
  )
}
