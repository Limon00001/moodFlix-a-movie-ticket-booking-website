/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 09 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import cors from 'cors';
import express from 'express';

// Create an Express app
const app = express();

// Middlewares
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Export
export default app;
