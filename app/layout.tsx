import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
      <body className={`${inter.className} max-w-xl mx-4 mt-8 lg:mx-auto`}>
        <main className=' flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
          {children}
        </main>
      </body>
    </html>
  )
}
