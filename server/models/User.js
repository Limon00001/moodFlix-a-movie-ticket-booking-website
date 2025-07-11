/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 11 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import mongoose from 'mongoose';

// User Schema
const userSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

// User Model
const User = mongoose.model('User', userSchema);

// Export
export default User;
