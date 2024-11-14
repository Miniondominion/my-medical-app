'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export default function EMSDocumentation() {
  const [formData, setFormData] = useState({
    patientName: '',
    patientAge: '',
    chiefComplaint: '',
    consciousness: '',
    breathing: '',
    pulse: '',
    additionalNotes: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">EMS Documentation</h1>
      <Card>
        <CardHeader>
          <CardTitle>Patient Assessment Form</CardTitle>
          <CardDescription>Fill out the patient's information and assessment details</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="patientName">Patient Name</Label>
              <Input id="patientName" name="patientName" value={formData.patientName} onChange={handleInputChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="patientAge">Patient Age</Label>
              <Input id="patientAge" name="patientAge" type="number" value={formData.patientAge} onChange={handleInputChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="chiefComplaint">Chief Complaint</Label>
              <Input id="chiefComplaint" name="chiefComplaint" value={formData.chiefComplaint} onChange={handleInputChange} required />
            </div>
            <div className="space-y-2">
              <Label>Level of Consciousness</Label>
              <RadioGroup name="consciousness" value={formData.consciousness} onValueChange={(value) => handleRadioChange('consciousness', value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="alert" id="conscious-alert" />
                  <Label htmlFor="conscious-alert">Alert</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="verbal" id="conscious-verbal" />
                  <Label htmlFor="conscious-verbal">Verbal</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pain" id="conscious-pain" />
                  <Label htmlFor="conscious-pain">Pain</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="unresponsive" id="conscious-unresponsive" />
                  <Label htmlFor="conscious-unresponsive">Unresponsive</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label>Breathing</Label>
              <RadioGroup name="breathing" value={formData.breathing} onValueChange={(value) => handleRadioChange('breathing', value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="normal" id="breathing-normal" />
                  <Label htmlFor="breathing-normal">Normal</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="labored" id="breathing-labored" />
                  <Label htmlFor="breathing-labored">Labored</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="absent" id="breathing-absent" />
                  <Label htmlFor="breathing-absent">Absent</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label>Pulse</Label>
              <RadioGroup name="pulse" value={formData.pulse} onValueChange={(value) => handleRadioChange('pulse', value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="regular" id="pulse-regular" />
                  <Label htmlFor="pulse-regular">Regular</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="irregular" id="pulse-irregular" />
                  <Label htmlFor="pulse-irregular">Irregular</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="absent" id="pulse-absent" />
                  <Label htmlFor="pulse-absent">Absent</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="additionalNotes">Additional Notes</Label>
              <Textarea id="additionalNotes" name="additionalNotes" value={formData.additionalNotes} onChange={handleInputChange} />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="submit">Submit</Button>
            <Link href="/clinical-documentation" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Back to Clinical Documentation
            </Link>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}