import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/Config/configDb.js';
import userRoutes from './src/Routes/routes.js';
import cors from 'cors'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // This will allow requests from all origins

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Register Routes
app.use("", userRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
