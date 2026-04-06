require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // If no URI is provided, use a local fallback for initial test
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/restaurantDB');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
