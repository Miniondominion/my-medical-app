import mongoose from 'mongoose'

if (!process.env.MONGODB_URI) {
  console.error('MONGODB_URI is not defined in the environment variables')
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

const MONGODB_URI: string = process.env.MONGODB_URI

let cached: {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
} = (global as any).mongoose

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    console.log('Attempting to connect to MongoDB...')
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('MongoDB connected successfully')
      return mongoose
    }).catch(error => {
      console.error('Error connecting to MongoDB:', error)
      throw error
    })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    console.error('Error in dbConnect:', e)
    throw e
  }

  return cached.conn
}

export default dbConnect