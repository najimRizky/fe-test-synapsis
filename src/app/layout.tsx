import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Header from '@/components/modules/Header'
import Footer from '@/components/modules/Footer'

const nunito = Nunito({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-body-bg text-body-text`}>
        <Header />
        <main className='my-8'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
