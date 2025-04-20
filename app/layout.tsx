import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"   // ← import your client navbar

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cleaning Products",
  description: "Premium household and commercial cleaning solutions",
  icons: { icon: [{ url: '/vlt_logo.png', type: 'image/png' }] },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />        {/* ← client‑side navbar */}
        <main>{children}</main>
        {/* ... your existing footer ... */}
      </body>
    </html>
  )
}
