/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 11 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { Inngest } from 'inngest';

// Internal Imports
import User from '../models/User.js';

// Create a client to send and receive events
export const inngest = new Inngest({ id: 'movie-ticket-booking' });

// Create a function to sync user data from Clerk
const syncUserCreation = inngest.createFunction(
  { id: 'sync-user-from-clerk' },
  { event: 'clerk/user.created' },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } =
      event.data;

    // Create user data
    const userData = {
      _id: id,
      name: `${first_name} ${last_name}`,
      email: email_addresses[0].email_address,
      image: image_url,
    };

    // Create user in the database
    await User.create(userData);
  },
);

const syncUserDeletion = inngest.createFunction(
  { id: 'delete-user-with-clerk' },
  { event: 'clerk/user.deleted' },
  async ({ event }) => {
    const { id } = event.data;

    // Delete user from the database
    await User.findByIdAndDelete(id);
  },
);

// Create a function to sync user data from Clerk to the database when it is updated
const syncUserUpdation = inngest.createFunction(
  { id: 'update-user-from-clerk' },
  { event: 'clerk/user.updated' },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } =
      event.data;

    // Create user data
    const userData = {
      _id: id,
      name: `${first_name} ${last_name}`,
      email: email_addresses[0].email_address,
      image: image_url,
    };

    // Create user in the database
    await User.findByIdAndUpdate(id, userData);
  },
);

// Create an empty array where export future Inngest functions
export const functions = [syncUserCreation, syncUserDeletion, syncUserUpdation];
