// db.js
import mongoose from "mongoose";
import "../loadenv.js";

export const MONGODB_SECRET = process.env.MONGODB_SECRET as string;

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'portal-v2',
}

export const connectToDatabase = async () =>{
  try {
    const response = await mongoose.connect(MONGODB_SECRET, config);
    console.log(">>>success at connect to db", typeof response)
    return response
  } catch(error){
    console.log(">>>error at connect to db")
  }
}




