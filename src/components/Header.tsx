'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const router = useRouter()

  const handleAuthClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false)
      setUsername('')
    } else {
      router.push('/auth')
    }
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-hUJ9CMVaEh3DRpVYMU6Q5Oe5gAZXNf.webp"
            alt="EduDoc Logo"
            width={150}
            height={150}
            className="h-16 w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-4">
          <Link href="/" className="text-gray-600 hover:text-primary">Home</Link>
          <Link href="/clinical-documentation" className="text-gray-600 hover:text-primary">Clinical Documentation</Link>
          <Link href="/lab-skills-documentation" className="text-gray-600 hover:text-primary">Lab Skills Documentation</Link>
          <Link href="/test-connection" className="text-gray-600 hover:text-primary">Test DB</Link>
        </nav>
        <div className="flex items-center space-x-4">
          {isLoggedIn && (
            <span className="text-sm text-gray-600">Welcome, {username}!</span>
          )}
          <Button
            onClick={handleAuthClick}
            variant="outline"
            className="bg-primary text-white hover:bg-primary/90"
          >
            {isLoggedIn ? 'Logout' : 'Login / Register'}
          </Button>
        </div>
      </div>
    </header>
  )
}