/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 06 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { useEffect, useState } from 'react';

// Internal Imports
import { dummyBookingData } from '../../assets/assets';
import Loading from '../../components/Loading';
import AdminTitle from '../../components/admin/AdminTitle';
import dateFormat from '../../lib/dateFormat';

// Bookings List Component
const ListBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Currency symbol
  const currency = import.meta.env.VITE_CURRENCY || '$';

  // Function to fetch all bookings
  const getAllBookings = async () => {
    try {
      setBookings(dummyBookingData);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch all bookings on component mount
  useEffect(() => {
    getAllBookings();
  }, []);

  // Rendering the bookings list or loading indicator
  return !isLoading ? (
    <>
      {/* Admin Title */}
      <AdminTitle text1="List of" text2="Bookings" />

      {/* Bookings Table */}
      <div className="max-w-4xl mt-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
          {/* Table Header */}
          <thead className="">
            <tr className="bg-primary/20 text-left text-white">
              <th className="p-2 font-medium pl-5">User Name</th>
              <th className="p-2 font-medium">Movie Name</th>
              <th className="p-2 font-medium">Show Time</th>
              <th className="p-2 font-medium">Seats</th>
              <th className="p-2 font-medium">Amount</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-sm font-light">
            {bookings.map((item, index) => (
              <tr
                key={index}
                className="border-b border-primary/10 bg-primary/5 even:bg-primary/10"
              >
                <td className="p-2 min-w-45 pl-5">{item.user.name}</td>
                <td className="p-2">{item.show.movie.title}</td>
                <td className="p-2">{dateFormat(item.show.showDateTime)}</td>
                {/* Seats are displayed as a comma-separated list */}
                <td className="p-2">
                  {Object.keys(item.bookedSeats)
                    .map((seat) => item.bookedSeats[seat])
                    .join(', ')}
                </td>
                <td className="p-2">
                  <span className="text-xs mr-1">{currency}</span>{' '}
                  <span className="font-semibold">{item.amount}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    // Loading Indicator
    <Loading />
  );
};

// Export
export default ListBookings;
