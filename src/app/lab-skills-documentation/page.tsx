import React from 'react'
import Link from 'next/link'

export default function LabSkillsDocumentation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Lab Skills Documentation</h1>
      <p className="mb-4">Welcome to the Lab Skills Documentation section. Here you can access various resources related to laboratory procedures and protocols.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Sample Collection Procedures</h2>
          <p className="mb-2">Learn about proper techniques for collecting various types of samples.</p>
          <Link href="#" className="text-blue-500 hover:underline">View procedures</Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Equipment Operation Guides</h2>
          <p className="mb-2">Access detailed guides on how to operate laboratory equipment safely and effectively.</p>
          <Link href="#" className="text-blue-500 hover:underline">Read guides</Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Safety Protocols</h2>
          <p className="mb-2">Review important safety procedures and guidelines for laboratory work.</p>
          <Link href="#" className="text-blue-500 hover:underline">Check protocols</Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Quality Control Measures</h2>
          <p className="mb-2">Learn about quality control processes to ensure accurate and reliable lab results.</p>
          <Link href="#" className="text-blue-500 hover:underline">Explore measures</Link>
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