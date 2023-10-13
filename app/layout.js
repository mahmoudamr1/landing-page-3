import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Barbie',
  description: 'Fahion Clothes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir='rtl'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
