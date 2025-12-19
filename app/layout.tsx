import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ahmad Jamil Al Rasyid — Software Developer',
  description: 'Web developer portfolio — projects, open-source, and contact.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Ahmad Jamil Al Rasyid — Software Developer',
    description: 'Web developer portfolio — projects, open-source, and contact.',
    url: 'https://rasyidcode.github.io',
    siteName: 'Rasyid',
    images: [
      {
        url: '/favicon.svg',
        width: 800,
        height: 600,
        alt: 'Rasyid logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmad Jamil Al Rasyid — Software Developer',
    description: 'Web developer portfolio — projects, open-source, and contact.',
    images: ['/favicon.svg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
