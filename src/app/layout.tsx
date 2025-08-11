import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata, Viewport } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimationWrapper from '@/components/AnimationWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LongBio Institute',
  description: 'Advancing the field of Longevity Biotech',
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#172554' },
    { media: '(prefers-color-scheme: dark)', color: '#172554' }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <AnimationWrapper>
          {children}
        </AnimationWrapper>
        <Footer />
      </body>
    </html>
  )
} 