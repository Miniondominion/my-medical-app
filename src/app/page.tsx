import Link from 'next/link'
import { ClipboardList, FlaskRoundIcon as Flask } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Welcome to EduDoc</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/clinical-documentation" className="block group">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
            <div className="p-6 flex flex-col items-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <ClipboardList className="w-12 h-12 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-center">Clinical Documentation</h2>
              <p className="text-gray-600 text-center">Manage patient assessments, treatment plans, and progress notes.</p>
            </div>
          </div>
        </Link>
        <Link href="/lab-skills-documentation" className="block group">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
            <div className="p-6 flex flex-col items-center">
              <div className="bg-green-100 rounded-full p-4 mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <Flask className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-center">Lab Skills Documentation</h2>
              <p className="text-gray-600 text-center">Access procedures, equipment guides, and safety protocols.</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}