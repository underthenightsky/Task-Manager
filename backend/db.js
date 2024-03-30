const mongoose = require("mongoose");
const express = require("express");
const url ="mongodb://localhost:27017/"; 
const cors = require('cors'); 
const app = express();


app.use(cors());
app.use(express.json());  // To parse the incoming requests with JSON payloads


const connectDB = async () => {
  try {
    // console.log(process.env.MONGO_URL);
    const conn = await mongoose.connect(process.env.MONGO_URL,
      {dbName: "TaskManager"}      
    );
    console.log(
      `Connected To MongoDB Database ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`Error in MongoDB ${error}`);
  }
};

module.exports = connectDB;