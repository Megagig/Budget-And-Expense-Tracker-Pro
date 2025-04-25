import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Test endpoint
app.get('/api/test', async (req: Request, res: Response) => {
  res.json({ message: 'Hello from Express endpoint' });
});

// Start the server
app.listen(7000, () => {
  console.log('Server is running on localhost:7000');
});
