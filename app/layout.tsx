import './globals.css'
import { Inter } from 'next/font/google'
import MainLayout from './components/main-layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cricket App',
  description: 'Stay updated with live cricket scores and matches',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}