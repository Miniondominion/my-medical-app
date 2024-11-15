'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function TestConnection() {
  const [result, setResult] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const testConnection = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/test-connection')
      const data = await response.json()
      
      if (response.ok) {
        setResult(data.message)
      } else {
        setError(data.error || 'An error occurred')
      }
    } catch (error) {
      setError('Failed to test connection')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">MongoDB Connection Test</h1>
        <Button 
          onClick={testConnection} 
          disabled={isLoading}
          className="w-full mb-4"
        >
          {isLoading ? 'Testing Connection...' : 'Test MongoDB Connection'}
        </Button>
        
        {result && (
          <div className="p-4 bg-green-100 text-green-700 rounded-md mt-4">
            {result}
          </div>
        )}
        
        {error && (
          <div className="p-4 bg-red-100 text-red-700 rounded-md mt-4">
            {error}
          </div>
        )}
      </Card>
    </div>
  )
}