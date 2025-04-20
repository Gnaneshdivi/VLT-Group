import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  
  title: "Cleaning Products",
  description: "Premium household and commercial cleaning solutions",
  icons: {
    icon: [
      { url: '/vlt_logo.png', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-[#0A9A9F]">
            <img src="/vlt_logo.png" alt="CleanPro Logo" className="h-12 w-auto" />
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium hover:text-[#F78C2C]">
                Home
              </Link>
              <Link href="/products" className="text-sm font-medium hover:text-[#F78C2C]">
                Products
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-[#F78C2C]">
                Contact
              </Link>
            </nav>
            <Button variant="outline" size="icon" className="md:hidden border-[#0A9A9F] text-[#0A9A9F]">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-[#0A9A9F]/5 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
              <img src="/vlt_logo.png" alt="VLT" className="h-12 w-auto" />
                <p className="text-gray-600">Premium household and commercial cleaning solutions for all your needs.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-[#0A9A9F]">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-600 hover:text-[#F78C2C]">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" className="text-gray-600 hover:text-[#F78C2C]">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-600 hover:text-[#F78C2C]">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-[#0A9A9F]">Contact</h3>
                <address className="not-italic text-gray-600">
                  <p>P.No. 8-1/1/2, Sy.No. 215, Opp. Karthika Foods Pvt. Ltd</p>
                  <p>Boduppal, Medipally Medchal-Malkajgiri Dist. Pin - 500 092</p>
                  <p className="mt-2">Phone: 7075599880, 9700465483</p>
                  <p>Email: enquiry@vltgroup.in</p>
                </address>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-center text-gray-600">
              <p>&copy; {new Date().getFullYear()} CleanPro. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
