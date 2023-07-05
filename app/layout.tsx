import './globals.css'
import { Inter } from 'next/font/google'
import Gyparody from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

const gyparody = Gyparody({
  src: '../public/fonts/gyparody.ttf',
  variable: '--font-gyparody'
})

export const metadata = {
  title: 'Party Jeopardy',
  description: 'Fun for family and friends, questions from Jeopardy.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${gyparody.variable}`}>
      <body>{children}</body>
    </html>
  )
}
