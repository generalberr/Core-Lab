import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'
import WhatsApp from '@/components/WhatsApp/WhatsApp'

export const metadata: Metadata = {
  title: 'CoreLab — Warehouse Gym in Jiyeh, Lebanon',
  description:
    'Coach-led training in an open warehouse on the Jiyeh coastal road. Fat loss, strength, and conditioning programs built around you — no machines, no guesswork.',
  keywords: ['gym Jiyeh', 'warehouse gym Lebanon', 'personal coach Lebanon', 'functional training', 'HIIT Lebanon', 'CoreLab'],
  openGraph: {
    title: 'CoreLab — Warehouse Gym in Jiyeh, Lebanon',
    description: 'Coach-led training in an open warehouse on the coastal road. Programs built around you.',
    type: 'website',
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
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
        <WhatsApp />
      </body>
    </html>
  )
}
