import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'

import { Loading } from '@/components/auth/loading'
import { Toaster } from '@/components/ui/sonner'
import { ConvexClientProvider } from '@/providers/convex-client-provider'
import { ModalProvider } from '@/providers/modalProvider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vimo - Collaborate while drawing notes',
  description: 'Collaborate while drawing notes.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <ConvexClientProvider>
            <ModalProvider />
            <Toaster />
            {children}
          </ConvexClientProvider>
        </Suspense>
      </body>
    </html>
  )
}