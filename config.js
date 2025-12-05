// db/connectdb.js

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://chaudharisunny6_db_user:yr2nKSKIzVfqpDnh@cluster0.1pewd8b.mongodb.net/", {
      
    });
    console.log(" Database connected");
  } catch (error) {
    console.error(" Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
//mongodb+srv://chaudharisunny6:jPHJipwsdGkdLnn2@cluster0.z9jqfaf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0