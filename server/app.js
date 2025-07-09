/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 09 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { clerkMiddleware } from '@clerk/express';
import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import { serve } from 'inngest/express';

// Internal Imports
import { functions, inngest } from './inngest/index.js';

// Load environment variables
config();

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
app.use(clerkMiddleware());

// Routes
app.get('/', (req, res) => {
  res.send('Server is running!');
});
app.use('/api/inngest', serve({ client: inngest, functions }));

// Export
export default app;
