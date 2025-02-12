const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://test:test@cluster0.ngli9.mongodb.net/appointmentsDB?retryWrites=true&w=majority&appName=Cluster0";
    
    // Connect to MongoDB Atlas
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: {
        version: '1', // Stable API version
        strict: true,
        deprecationErrors: true
      }
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
