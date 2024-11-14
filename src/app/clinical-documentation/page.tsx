import React from 'react'
import Link from 'next/link'

export default function ClinicalDocumentation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Clinical Documentation</h1>
      <p className="mb-4">Welcome to the Clinical Documentation section. Here you can manage various aspects of patient care documentation.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Patient Assessment Forms</h2>
          <p className="mb-2">Access and fill out comprehensive patient assessment forms.</p>
          <Link href="#" className="text-blue-500 hover:underline">View forms</Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Treatment Plans</h2>
          <p className="mb-2">Create and update detailed treatment plans for patients.</p>
          <Link href="#" className="text-blue-500 hover:underline">Manage plans</Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Progress Notes</h2>
          <p className="mb-2">Record and review patient progress notes over time.</p>
          <Link href="#" className="text-blue-500 hover:underline">Add notes</Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Discharge Summaries</h2>
          <p className="mb-2">Generate comprehensive discharge summaries for patients.</p>
          <Link href="#" className="text-blue-500 hover:underline">Create summary</Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">EMS Documentation</h2>
          <p className="mb-2">Access and fill out EMS-specific documentation forms.</p>
          <Link href="/clinical-documentation/ems" className="text-blue-500 hover:underline">Go to EMS forms</Link>
        </div>
      </div>
      <div className="mt-8">
        <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  )
}