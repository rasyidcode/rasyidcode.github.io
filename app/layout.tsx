import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WhatsApp Style Portfolio',
  description: 'My personal github pages',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col h-screen overflow-hidden`}>
        <div className='absolute w-full h-full z-0 bg-[#DAD7D3]'>
          <div className='h-30 bg-[#00A783]'></div>
        </div>
        <main className='flex-1 flex overflow-hidden p-5 z-50'>
          {children}
        </main>
      </body>
    </html>
  )
}
