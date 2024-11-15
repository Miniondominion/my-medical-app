import { NextResponse } from 'next/server'
import mongoose from 'mongoose'

export async function GET() {
  if (!process.env.MONGODB_URI) {
    return NextResponse.json(
      { error: 'MongoDB connection string is not defined' },
      { status: 500 }
    )
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    await mongoose.disconnect()
    
    return NextResponse.json(
      { message: 'Successfully connected to MongoDB' },
      { status: 200 }
    )
  } catch (error) {
    console.error('MongoDB connection error:', error)
    return NextResponse.json(
      { error: 'Failed to connect to MongoDB' },
      { status: 500 }
    )
  }
}