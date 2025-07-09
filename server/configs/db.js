/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 09 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import mongoose from 'mongoose';

// Database connection
const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);

    // Event listeners
    mongoose.connection.on('connected', () => {
      console.log('Database connected');
    });

    mongoose.connection.on('disconnected', () => {
      console.log('Database disconnected');
    });

    mongoose.connection.on('error', (error) => {
      console.error(`Database connection error: ${error}`);
      process.exit(1);
    });
  } catch (error) {
    console.error(`Database setup error: ${error}`);
    process.exit(1);
  }
};

// Export
export default connectDB;
