'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Image src="/LycraLogo.png" alt="Logo" width={180} height={60} className="h-12 w-auto" />
        </Link>
        
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <nav className="hidden md:flex gap-6">
          <Link href="/dashboard" className="text-sm font-medium hover:underline">Dashboard</Link>
          <Link href="/adaptiveworks" className="text-sm font-medium hover:underline">AdaptiveWorks</Link>
          <Link href="/mongodb" className="text-sm font-medium hover:underline">NoSQL</Link>
          <Link href="/snowflake" className="text-sm font-medium hover:underline">Snowflake</Link>
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden border-t bg-background">
          <div className="container mx-auto flex flex-col px-4 py-2">
            <Link href="/dashboard" className="py-2 text-sm font-medium hover:underline" onClick={() => setIsOpen(false)}>Dashboard</Link>
            <Link href="/adaptiveworks" className="py-2 text-sm font-medium hover:underline" onClick={() => setIsOpen(false)}>AdaptiveWorks</Link>
            <Link href="/mongodb" className="py-2 text-sm font-medium hover:underline" onClick={() => setIsOpen(false)}>NoSQL</Link>
            <Link href="/snowflake" className="py-2 text-sm font-medium hover:underline" onClick={() => setIsOpen(false)}>Snowflake</Link>
          </div>
        </nav>
      )}
    </header>
  )
}
