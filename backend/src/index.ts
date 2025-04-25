import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db';

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// root route
app.get('/', (req, res) => {
  res.send('API is running successfully');
});
// start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
