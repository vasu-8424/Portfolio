import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: 'Veera vasuu - Portfolio',
  description: 'Full Stack Developer & Android Developer',
  generator: 'Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster 
          position="bottom-right" 
          expand={true}
          richColors
        />
      </body>
    </html>
  )
}
