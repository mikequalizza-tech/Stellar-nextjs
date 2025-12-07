import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stellar - Next.js Platform',
  description: 'Stellar combines Open-Pro components with Mosaic admin console for a complete solution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-inter">{children}</body>
    </html>
  )
}
