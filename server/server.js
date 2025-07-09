/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 09 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { config } from 'dotenv';

// Internal Imports
import app from './app.js';
import connectDB from './configs/db.js';

// Load environment variables
config();

// Get the port from environment or default to 5001
const PORT = process.env.PORT || 5001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
