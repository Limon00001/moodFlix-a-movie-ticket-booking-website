/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 11 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import connectDB from './configs/db.js';

// App Initialization
const app = express();

// Server Port
const port = process.env.PORT || 5000;

// DB Connection
await connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', (req, res) => console.log('Server is running...'));

// Server Start
app.listen(port, () => console.log(`Server is running on port ${port}`));
