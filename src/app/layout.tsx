import './globals.css'

import type { Metadata } from 'next'
import {
  Inter,
  Island_Moments as IslandMoments,
  Londrina_Solid as LondrinaSolid,
} from 'next/font/google'

import { Footer } from '@/components/footer'

const inter = Inter({
  subsets: ['latin'],
  style: 'normal',
  weight: ['400', '900'],
  variable: '--font-inter',
})
const londrinaSolid = LondrinaSolid({
  subsets: ['latin'],
  style: 'normal',
  weight: ['400'],
  variable: '--font-londrinaSolid',
})
const islandMoments = IslandMoments({
  subsets: ['latin'],
  style: 'normal',
  weight: ['400'],
  variable: '--font-islandMoments',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-Br">
      <body
        className={`${inter.variable} ${londrinaSolid.variable} ${islandMoments.variable} bg-background-color text-typography`}
      >
        <div className="relative mt-10 w-full min-w-72 max-w-7xl px-8 md:mx-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}