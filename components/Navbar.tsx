'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/vlt_logo.png" alt="CleanPro Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/">Home</Link>
          {/* <Link href="/products">Products</Link> */}
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="outline"
          size="icon"
          className="md:hidden border-[#0A9A9F] text-[#0A9A9F]"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-white border-t">
          <ul className="flex flex-col px-4 py-2 space-y-2">
            <li>
              <Link
                href="/"
                className="block py-2"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
            </li>
            {/* <li>
              <Link
                href="/products"
                className="block py-2"
                onClick={() => setMobileOpen(false)}
              >
                Products
              </Link>
            </li> */}
            <li>
              <Link
                href="/contact"
                className="block py-2"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
