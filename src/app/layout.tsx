import { ThemeProvider } from '@/components/providers/themeProvider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type React from 'react'
import type { PropsWithChildren } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'orbit. | organize what inspires you',
}

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="container mx-auto" >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
