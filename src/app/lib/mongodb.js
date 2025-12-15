// Connection Library for MongoDB'

import { MongoClient } from 'mongodb'
import logger from '@/app/logger'

const uri = process.env.MONGODB_URI


let client
let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}

  client = new MongoClient(uri)
  clientPromise = client.connect()
  logger.info("Database Connection Successfull!!!")

export default clientPromise