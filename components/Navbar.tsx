import './globals.css'
import { Poppins } from 'next/font/google'
import { Navbar } from '@/components/Navbar'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] })

export const metadata = {
  title: 'Vyom Limbachiya | Portfolio',
  description: 'Web Developer | React | Next.js | TypeScript | IIT Chicago',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.className} bg-white text-gray-900 min-h-screen`}>
        <Navbar />
        <main className="max-w-6xl mx-auto px-4">{children}</main>
      </body>
    </html>
  )
}
