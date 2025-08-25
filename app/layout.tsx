import type { Metadata } from 'next'
import './globals.css'
import { AppProviders } from './providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Portfolio | Abhilash Gandham',
  description: 'Personal portfolio built with Next.js, Tailwind, and MUI.',
  metadataBase: new URL('https://portfolio-ten-ochre-65.vercel.app/'),
  openGraph: {
    title: 'Abhilash Gandham — Portfolio',
    description: 'Front-end engineer focused on performance and UX.',
    url: 'https://portfolio-ten-ochre-65.vercel.app/',
    siteName: 'Abhilash Portfolio',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <AppProviders>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  )
}
