/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 02 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { useEffect, useState } from 'react';

// Internal Imports
import { dummyBookingData } from '../assets/assets';
import BlurCircle from '../components/BlurCircle';
import Loading from '../components/Loading';
import dateFormat from '../lib/dateFormat';
import { timeFormat } from '../lib/timeFormat';

// Bookings Page Component for Movie Ticket Booking Application
const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Currency symbol
  const currency = import.meta.env.VITE_CURRENCY || '$';

  // Function to fetch bookings
  const getMyBookings = async () => {
    setBookings(dummyBookingData);
    setIsLoading(false);
  };

  useEffect(() => {
    getMyBookings();
  }, []);

  // Rendering the bookings list or loading indicator
  return !isLoading ? (
    <div className="relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]">
      {/* Blur Effect */}
      <BlurCircle top="100px" left="100px" />
      <div>
        <BlurCircle bottom="0" left="600px" />
      </div>

      {/* Heading */}
      <h1 className="text-lg font-semibold mb-4">My Bookings</h1>

      {/* Bookings List */}
      {bookings.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-between bg-primary/8 border border-primary/20 rounded-lg p-2 mt-4 max-w-3xl"
        >
          <div className="flex flex-col md:flex-row">
            {/* Movie Poster */}
            <img
              src={item.show.movie.poster_path}
              alt="Poster"
              className="md:max-w-45 aspect-video h-auto object-cover object-bottom rounded"
            />

            {/* Movie Details */}
            <div className="flex flex-col p-2 md:p-4">
              {/* Movie Title */}
              <p className="font-semibold text-lg">{item.show.movie.title}</p>

              {/* Movie Runtime */}
              <p className="text-gray-400 text-sm">
                {timeFormat(item.show.movie.runtime)}
              </p>

              {/* Show Time */}
              <p className="text-gray-400 text-sm mt-auto">
                {dateFormat(item.show.showDateTime)}
              </p>
            </div>
          </div>

          {/* Booking Details */}
          <div className="flex flex-col md:items-end md:text-right justify-between p-4">
            <div className="flex items-center gap-4">
              {/* Booking Status */}
              <p className="text-2xl font-semibold mb-3">
                <span className="text-base mr-1">{currency}</span>
                {item.amount}
              </p>

              {/* Payment Status */}
              {!item.isPaid && (
                <button className="bg-primary text-white py-1.5 px-4 mb-3 text-sm rounded-full font-medium cursor-pointer transition hover:bg-primary-dull active:scale-95">
                  Pay Now
                </button>
              )}
            </div>

            {/* Booking Information */}
            <div className="text-sm">
              <p>
                <span className="text-gray-400 mr-1">
                  {item.bookedSeats.length === 1
                    ? 'Total Ticket:'
                    : 'Total Tickets:'}
                </span>
                {item.bookedSeats.length}
              </p>
              <p>
                <span className="text-gray-400 mr-1">
                  {item.bookedSeats.length === 1
                    ? 'Seat Number:'
                    : 'Seat Numbers:'}
                </span>
                {item.bookedSeats.join(', ')}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    // Loading Indicator
    <Loading />
  );
};

// Export
export default MyBookings;
