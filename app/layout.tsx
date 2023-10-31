import './globals.css';
import { Inter, Michroma } from 'next/font/google';
import Gyparody from 'next/font/local';
import { ReactNode } from "react";
import ReduxProvider from '@/app/providers/ReduxProvider';

const inter = Inter({ subsets: ['latin'] })

const gyparody = Gyparody({
  src: '../public/fonts/gyparody.ttf',
  variable: '--font-gyparody'
});

const michroma = Michroma({
  weight: "400",
  subsets: ['latin']
});

export const metadata = {
  title: 'Party Jeopardy',
  description: 'Fun for family and friends, questions from Jeopardy.',
}

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${michroma.className} ${gyparody.variable}`}>
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
