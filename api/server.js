import express from 'express';
import dotenv from 'dotenv';
import connectDB from '../src/Config/configDb.js';
import userRoutes from '../src/Routes/routes.js';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

console.log(`PORT: ${port}`);

app.use(cors()); // Allow all origins

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

console.log("hi")

// Routes
app.use('', userRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// ✅ Start server ONLY when not in Vercel
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

// ✅ Export app for Vercel
export default app;
