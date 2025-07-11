/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 11 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import mongoose from 'mongoose';

// DB Connection
const connectDB = async () => {
  try {
    // MongoDB Connection Settings
    mongoose.connection.on('connected', () =>
      console.log('Database Connected'),
    );

    // MongoDB Connection
    await mongoose.connect(
      `${process.env.MONGODB_URI}/movie-ticket-booking-DB-2025`,
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// Export
export default connectDB;
