/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 06 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { useEffect, useState } from 'react';

// Internal Imports
import { dummyShowsData } from '../../assets/assets';
import Loading from '../../components/Loading';
import AdminTitle from '../../components/admin/AdminTitle';
import dateFormat from '../../lib/dateFormat';

// List Shows Component
const ListShows = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  // Currency symbol
  const currency = import.meta.env.VITE_CURRENCY || '$';

  // Function to fetch all shows
  const getAllShows = async () => {
    try {
      setShows([
        {
          movie: dummyShowsData[0],
          showDateTime: '2025-06-30T02:30:00.000Z',
          showPrice: 59,
          occupiedSeats: {
            A1: 'user_2xO4XPCgWWwWq9EHuQxc5UWqIok',
            B1: 'user_2xO4XPCgWWwWq9EHuQxc5UWqIok',
            C1: 'user_2xO4XPCgWWwWq9EHuQxc5UWqIok',
          },
        },
      ]);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch all shows on component mount
  useEffect(() => {
    getAllShows();
  }, []);

  return !loading ? (
    <>
      {/* Admin Title */}
      <AdminTitle text1="List" text2="Shows" />

      {/* Shows Table */}
      <div className="max-w-4xl mt-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
          {/* Table Header */}
          <thead className="">
            <tr className="bg-primary/20 text-left text-white">
              <th className="p-2 font-medium pl-5">Movie Name</th>
              <th className="p-2 font-medium">Show Time</th>
              <th className="p-2 font-medium">Total Bookings</th>
              <th className="p-2 font-medium">Earnings</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-sm font-light">
            {shows.map((show, index) => (
              <tr
                key={index}
                className="border-b border-primary/10 bg-primary/5 even:bg-primary/10"
              >
                <td className="p-2 min-w-45 pl-5">{show.movie.title}</td>
                <td className="p-2">{dateFormat(show.showDateTime)}</td>
                <td className="p-2">
                  {Object.keys(show.occupiedSeats).length}
                </td>
                <td className="p-2">
                  <span className="text-xs mr-1">{currency}</span>{' '}
                  <span className="font-semibold">
                    {Object.keys(show.occupiedSeats).length * show.showPrice}
                  </span>
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
export default ListShows;
