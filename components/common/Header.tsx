'use client'

import { ShoppingCart, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import logo from '@/app/assets/logo.png'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-15">
          {/* Logo */}
          {/* <div className="flex items-center gap-2"> */}
            <Image
              src={logo}
              alt="Digiworld Logo"
              width={200}
              priority
            />
          {/* </div> */}

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/home" className="text-foreground font-medium border-b-2 border-foreground pb-1">
              Home
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition">
              About Us
            </Link>
            <Link href="/services" className="text-muted-foreground hover:text-foreground transition">
              Services
            </Link>
            <Link href="packages" className="text-muted-foreground hover:text-foreground transition">
              Packages
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition">
              Our Clients
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition">
              Contact Us
            </Link>
          </nav>

          {/* Right Section */}
          {/* <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 text-right">
              <Button
                variant="outline"
                size="sm"
                className="bg-green-500 text-white border-0 hover:bg-green-600"
              >
                Free Report
              </Button>
              <div className="text-sm">
                <p className="font-semibold">Any Time</p>
                <p className="text-muted-foreground">+22 (00) 356 7890</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </header>
  )
}
