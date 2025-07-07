/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 06 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import {
  ChartLineIcon,
  CircleDollarSignIcon,
  PlayCircleIcon,
  StarIcon,
  UsersIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';

// Internal Imports
import { dummyDashboardData } from '../../assets/assets';
import AdminTitle from '../../components/admin/AdminTitle';
import BlurCircle from '../../components/BlurCircle';
import Loading from '../../components/Loading';
import dateFormat from '../../lib/dateFormat';

// Dashboard Component for Admin Page
const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalRevenue: 0,
    totalBookings: 0,
    activeShows: [],
    totalUser: 0,
  });
  const [loading, setLoading] = useState(true);

  // Currency symbol
  const currency = import.meta.env.VITE_CURRENCY || '$';

  // Dashboard Cards Data
  const dashboardCards = [
    {
      title: 'Total Revenue',
      value: dashboardData.totalRevenue || 0,
      icon: CircleDollarSignIcon,
    },
    {
      title: 'Total Bookings',
      value: dashboardData.totalBookings || 0,
      icon: ChartLineIcon,
    },
    {
      title: 'Active Shows',
      value: dashboardData.activeShows.length || 0,
      icon: PlayCircleIcon,
    },
    {
      title: 'Total Users',
      value: dashboardData.totalUser || 0,
      icon: UsersIcon,
    },
  ];

  // Function to fetch dashboard data
  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
    setLoading(false);
  };

  // Fetching dashboard data
  useEffect(() => {
    fetchDashboardData();
  }, []);

  // Rendering the dashboard component if dashboard data is available
  return !loading ? (
    <>
      {/* Admin Dashboard Title */}
      <AdminTitle text1="Admin" text2="Dashboard" />

      <div className="relative flex flex-wrap gap-8 mt-6">
        {/* Blur Effect */}
        <BlurCircle top="-100px" left="0" />

        {/* Dashboard Cards */}
        <div className="flex flex-wrap gap-4 w-full">
          {dashboardCards.map((card, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3 bg-primary/10 border border-primary/20 rounded-md max-w-50 w-full"
            >
              <div>
                <h1 className="text-sm">{card.title}</h1>
                <p className="text-xl font-medium mt-1">
                  <span className="text-sm">
                    {card.title === 'Total Revenue' && currency}
                  </span>{' '}
                  {card.value}
                </p>
              </div>
              <card.icon className="w-6 h-6" />
            </div>
          ))}
        </div>
      </div>

      {/* Active Shows Section */}
      <p className="mt-10 text-lg font-medium">Active Shows</p>

      <div className="relative flex flex-wrap gap-6 mt-4 max-w-5xl">
        {/* Blur Effect */}
        <BlurCircle top="100px" left="-10%" />

        {/* Active Shows Cards */}
        {dashboardData.activeShows.map((show) => (
          <div
            key={show._id}
            className="w-55 rounded-lg overflow-hidden h-full pb-3 bg-primary/10 border border-primary/20 hover:-translate-y-1 transition duration-300"
          >
            {/* Active Show Poster */}
            <img
              src={show.movie.poster_path}
              alt="Poster"
              className="w-full h-60 object-cover"
            />

            {/* Active Show Title */}
            <p className="font-medium p-2 truncate">{show.movie.title}</p>

            {/* Active Show Details */}
            <div className="flex items-center justify-between px-2">
              <p className="text-lg font-medium">
                <span className="text-sm">{currency}</span> {show.showPrice}
              </p>
              <p className="flex items-center gap-1 text-gray-400 text-sm mt-1 pr-1">
                <StarIcon className="w-4 h-4 text-primary fill-primary" />
                {show.movie.vote_average.toFixed(1)}
              </p>
            </div>
            <p className="px-2 pt-2 text-sm text-gray-500">
              {dateFormat(show.showDateTime)}
            </p>
          </div>
        ))}
      </div>
    </>
  ) : (
    // Loading Indicator
    <Loading />
  );
};

// Export
export default Dashboard;
