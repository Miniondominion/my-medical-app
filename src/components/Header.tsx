'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const router = useRouter()

  const handleAuthClick = () => {
    if (isLoggedIn) {
      // Implement logout logic here
      setIsLoggedIn(false)
      setUsername('')
    } else {
      router.push('/auth')
    }
  }

  return (
    <header className="bg-[#319df2] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">EduDoc</Link>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
            <li><Link href="/clinical-documentation" className="hover:text-gray-200">Clinical Documentation</Link></li>
            <li><Link href="/lab-skills-documentation" className="hover:text-gray-200">Lab Skills Documentation</Link></li>
          </ul>
          <div className="flex items-center space-x-4">
            {isLoggedIn && (
              <span className="text-sm">Welcome, {username}!</span>
            )}
            <Button
              onClick={handleAuthClick}
              variant="outline"
              className="bg-white text-[#319df2] hover:bg-gray-100 border-white"
            >
              {isLoggedIn ? 'Logout' : 'Login / Register'}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}