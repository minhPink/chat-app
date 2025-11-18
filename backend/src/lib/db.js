import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const MongoDB_URL = process.env.MONGODB_URL;
    if (!MongoDB_URL) {
      throw new Error("MONGODB_URL is not defined in environment variables");
    }
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
