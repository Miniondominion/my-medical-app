import { NextResponse } from 'next/server'
import dbConnect from '@/lib/dbconnect'

export async function GET() {
  try {
    console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'Defined' : 'Not defined')
    console.log('Attempting to connect to the database...')
    await dbConnect()
    console.log('Database connected successfully')
    return NextResponse.json({ message: 'Database connected successfully!' })
  } catch (error: unknown) {
    console.error('Database connection error:', error)
    return NextResponse.json(
      { 
        message: 'Error connecting to database', 
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined 
      },
      { status: 500 }
    )
  }
}