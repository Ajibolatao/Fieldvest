import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connectDB = await mongoose.connect(process.env.DB_URI);
    console.log(`DB connected successfully`);
  } catch (e) {
    console.log(e);
  }
};

export default db;
