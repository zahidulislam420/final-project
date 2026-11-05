"use client"

import * as React from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import logo from "@/app/images/logo.png"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet"

const navigation = [
  { name: "Browse Jobs", href: "/jobs" },
  { name: "Company", href: "/company" },
  { name: "Pricing", href: "/pricing" },
]

export function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <nav className="fixed w-full z-50 bg-[#0a0a0a] border-b border-[#1a1a1a]">
      <div className="flex items-center justify-between px-6 py-4 md:px-8 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="HireLoop"
            className="h-8 w-auto"
            width={40}
            height={40}
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Separator orientation="vertical" className="h-5 border-[#333333]" />
          <Link
            href="/sign-in"
            className="text-sm font-medium text-white hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Button
            className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white hover:from-[#4f46e5] hover:to-[#9333ea] px-5 py-2 rounded-full font-medium"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center p-2 text-white hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6366f1] disabled:pointer-events-none"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="right" className="bg-[#0a0a0a] border border-[#1a1a1a]">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 p-1 text-white hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6366f1]"
            >
              <X className="size-5" />
              <span className="sr-only">Close menu</span>
            </button>
            <div className="space-y-2 p-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-white hover:bg-[#1a1a1a] rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Separator className="my-4 border-[#333333]" />
              <Link
                href="/sign-in"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-white hover:bg-[#1a1a1a] rounded-lg transition-colors"
              >
                Sign In
              </Link>
              <Button
                onClick={() => setOpen(false)}
                className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white hover:from-[#4f46e5] hover:to-[#9333ea] rounded-full font-medium py-2.5"
              >
                Get Started
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
