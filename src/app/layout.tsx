import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'CoachCore — Train Smarter. Burn Harder.',
  description: "Lebanon's #1 fitness coaching ecosystem. Smart band + intelligent app + elite coaching.",
  openGraph: {
    title: 'CoachCore — Train Smarter. Burn Harder.',
    description: "Lebanon's #1 fitness coaching ecosystem.",
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
