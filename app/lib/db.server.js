import { MongoClient } from "mongodb";

let mongoConnection = process.env.MONGO_URL || "";

let mongodb = new MongoClient(mongoConnection);

export default mongodb;