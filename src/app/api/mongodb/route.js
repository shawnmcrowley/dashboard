// MongoDB API to Get{id}, GetAll, Create Data


// To do - Move Mongo Client connection to a utility file
// Unit Testing Complete - Both Get and Post Function Correctly
import { MongoClient } from 'mongodb'
import logger from '@/app/logger'

const uri = process.env.MONGODB_URI


if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}

const client = new MongoClient(uri)
const clientPromise = client.connect()
logger.info("Database Connection Successfull")
const db = client.db("AdaptiveWorks")


export async function GET(request) {
    
    const allData = await db.collection("Milestones").find({}).toArray();
    logger.info("MongoDB -> Get All Data")
    logger.info(JSON.stringify(allData))
    return Response.json(allData)


}

export async function POST(request) {
    const data = await request.json()
    logger.info(`Request: ${JSON.stringify(data)}`)
    const addData = await db.collection("Milestones").insertOne(data)
    logger.info("MongoDB -> Insert All Data")
    return Response.json(data)
   }

    
    

