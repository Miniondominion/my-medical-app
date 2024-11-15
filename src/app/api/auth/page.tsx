'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AuthPage() {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [registerName, setRegisterName] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [registerRole, setRegisterRole] = useState('student')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: loginEmail, password: loginPassword })
    })

    const data = await res.json()

    if (data.success) {
      router.push('/dashboard')
    } else {
      setError(data.message)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: registerName, email: registerEmail, password: registerPassword, role: registerRole })
    })

    const data = await res.json()

    if (data.success) {
      router.push('/dashboard')
    } else {
      setError(data.message)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Login / Register</h1>
      <Tabs defaultValue="login" className="w-full max-w-md">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="loginEmail">Email</Label>
              <Input id="loginEmail" type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="loginPassword">Password</Label>
              <Input id="loginPassword" type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full">Login</Button>
          </form>
        </TabsContent>
        <TabsContent value="register">
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <Label htmlFor="registerName">Name</Label>
              <Input id="registerName" type="text" value={registerName} onChange={(e) => setRegisterName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="registerEmail">Email</Label>
              <Input id="registerEmail" type="email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="registerPassword">Password</Label>
              <Input id="registerPassword" type="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="registerRole">Role</Label>
              <Select value={registerRole} onValueChange={setRegisterRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">Register</Button>
          </form>
        </TabsContent>
      </Tabs>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  )
}