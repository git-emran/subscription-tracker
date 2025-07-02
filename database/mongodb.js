import mongoose from "mongoose";

import { DB_URI, NODE_ENV } from "../config/env";

if(!DB_URI) {
    throw new Error('Please define the MONGODB_URI environment inside .local')
}

const connectToDatabase = async()=> {
    try {
        await mongoose.connect(DB_URI)
    }catch(error) {
        console.error('Error connecting to database', error)
        process.exit(1)

    }
}
export default connectToDatabase;