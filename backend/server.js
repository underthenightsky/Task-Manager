const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./db.js");
const cookieParser = require('cookie-parser');
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
console.log(process.env.PORT);
app.use(cors({ 
  origin: ['http://localhost:8081', 'http://localhost:19000', 'http://localhost:19001']
}));

const PORT = process.env.PORT || 5000;

const taskRoutes = require('./routes.js');

app.use('/tasks', taskRoutes);

app.listen(PORT , () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode  on port ${PORT}`
  );
});
