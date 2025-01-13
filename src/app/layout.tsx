import type { Metadata } from 'next'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/app/providers/theme-provider'
import { Toaster } from 'sonner'
import { Plus_Jakarta_Sans } from 'next/font/google'
import React from 'react'
import ReactQueryProvider from '@/app/providers/react-query-provider'
import ReduxProvider from '@/app/providers/redux-provider'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AutoInsta',
  description: 'Automate DMs and comments on Instagram',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body suppressHydrationWarning className={jakarta.className}>
          <ThemeProvider
            attribute={'class'}
            defaultTheme={'dark'}
            disableTransitionOnChange
          >
            <ReduxProvider>
              <ReactQueryProvider>{children}</ReactQueryProvider>
            </ReduxProvider>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
