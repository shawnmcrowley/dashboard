'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/dashboard" className="flex items-center gap-2">
          <Image src="/LycraLogo.png" alt="Logo" width={180} height={60} className="h-12 w-auto" />
        </a>
        
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
          <a href="/dashboard" className="text-sm font-medium hover:underline">Dashboard</a>
          <a href="/workflow_automation" className="text-sm font-medium hover:underline">AI Workflow Automation</a>
          <a href="/document_processing" className="text-sm font-medium hover:underline">Document Procssing with AI</a>
          <a href="/responsive_forms" className="text-sm font-medium hover:underline">Snowflake Data Integration</a>
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden border-t bg-background">
          <div className="container mx-auto flex flex-col px-4 py-2">
            <a href="/dashboard" className="py-2 text-sm font-medium hover:underline" onClick={() => setIsOpen(false)}>Dashboard</a>
            <a href="/workflow_automation" className="py-2 text-sm font-medium hover:underline" onClick={() => setIsOpen(false)}>AI Workflow Automation</a>
            <a href="/document_processing" className="py-2 text-sm font-medium hover:underline" onClick={() => setIsOpen(false)}>Document Processing with AI</a>
            <a href="/workflow_automation" className="py-2 text-sm font-medium hover:underline" onClick={() => setIsOpen(false)}>Snowflake Data Integration</a>
          </div>
        </nav>
      )}
    </header>
  )
}
