/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 06 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { CheckIcon, CircleX, StarIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

// Internal Imports
import { dummyShowsData } from '../../assets/assets';
import AdminTitle from '../../components/admin/AdminTitle';
import Loading from '../../components/Loading';
import convertToK from '../../lib/convertToK';

// Add Shows Component
const AddShows = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [dateTimeSelection, setDateTimeSelection] = useState({});
  const [dateTimeInput, setDateTimeInput] = useState('');
  const [showPrice, setShowPrice] = useState('');

  // Currency symbol
  const currency = import.meta.env.VITE_CURRENCY || '$';

  // Function to fetch 'now playing movies'
  const fetchNowPlayingMovies = async () => {
    try {
      setNowPlayingMovies(dummyShowsData);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch 'now playing movies' on component mount
  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  // Handle date and time selection
  const handleDateTimeAdd = () => {
    // Check if dateTimeInput is valid
    if (!dateTimeInput) {
      return;
    }

    // Extract date and time
    const [date, time] = dateTimeInput.split('T');
    if (!date || !time) {
      return;
    }

    // Update dateTimeSelection
    setDateTimeSelection((prevSelection) => {
      const times = prevSelection[date] || [];
      if (!times.includes(time)) {
        return {
          ...prevSelection,
          [date]: [...times, time],
        };
      }
      return prevSelection;
    });
  };

  // Handle time removal
  const handleRemoveTime = (date, time) => {
    // Update dateTimeSelection
    setDateTimeSelection((prevSelection) => {
      // Filter out the removed time
      const filteredTimes = prevSelection[date].filter((t) => t !== time);
      // If all times for the date are removed, remove the date
      if (filteredTimes.length === 0) {
        const { [date]: _, ...rest } = prevSelection;
        return rest;
      }
      return {
        ...prevSelection,
        [date]: filteredTimes,
      };
    });
  };

  // Check if 'now playing movies' are available
  return nowPlayingMovies.length > 0 ? (
    <>
      {/* Admin Title */}
      <AdminTitle text1="Add" text2="Shows" />

      {/* Now Playing Movies */}
      <p className="mt-10 text-lg font-medium">Now Playing Movies</p>

      <div className="overflow-x-auto pb-4 no-scrollbar">
        {/* Movie Cards */}
        <div className="group flex flex-wrap gap-4 mt-4 w-max">
          {nowPlayingMovies.map((movie) => (
            <div
              key={movie.id}
              className={`relative max-w-40 cursor-pointer group-hover:not-hover:opacity-40 hover:-translate-y-1 transition duration-300`}
              onClick={() => setSelectedMovie(movie.id)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={movie.poster_path}
                  alt={'movie poster'}
                  className="w-full object-cover brightness-50"
                />

                <div className="text-sm flex items-center justify-between p-2 bg-black/70 w-full absolute bottom-0 left-0">
                  <p className="flex items-center gap-1 text-gray-400">
                    <StarIcon className="w-4 h-4 text-primary fill-primary" />
                    {movie.vote_average.toFixed(1)}
                  </p>
                  <p className="text-gray-300">
                    {convertToK(movie.vote_count)} Votes
                  </p>
                </div>
              </div>
              {/* Selected Movie Indicator */}
              {selectedMovie === movie.id && (
                <div className="absolute top-2 right-2 flex items-center justify-center h-6 w-6 bg-primary rounded">
                  <CheckIcon className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
              )}
              <p className="font-medium truncate">{movie.title}</p>
              <p className="text-sm text-gray-400">{movie.release_date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Show Price Input */}
      <div className="mt-8">
        <label htmlFor="" className="block text-sm font-medium mb-2">
          Show <span className="text-primary">Price</span>
        </label>
        <div className="inline-flex items-center gap-2 border border-gray-600 px-3 py-2 rounded-md">
          <p className="text-sm text-gray-400">{currency}</p>
          <input
            min={0}
            type="number"
            value={showPrice}
            onChange={(e) => setShowPrice(e.target.value)}
            placeholder="0.00"
            className="outline-none"
          />
        </div>
      </div>

      {/* Date and Time Selection Input */}
      <div className="mt-6">
        <label htmlFor="" className="block text-sm font-medium mb-2">
          Select <span className="text-primary">Date & Time</span>
        </label>
        <div className="inline-flex gap-5 border border-gray-600 p-1 pl-3 rounded-lg">
          <input
            type="datetime-local"
            value={dateTimeInput}
            onChange={(e) => setDateTimeInput(e.target.value)}
            className="outline-none rounded-md"
          />
          <button
            onClick={handleDateTimeAdd}
            className="bg-primary/80 text-white px-3 py-2 text-sm rounded-lg hover:bg-primary cursor-pointer"
          >
            Add Time
          </button>
        </div>
      </div>

      {/* Selected Dates and Times Display Section */}
      {Object.keys(dateTimeSelection).length > 0 && (
        <div className="mt-6">
          <h1 className="mb-2">Selected Date & Time</h1>
          <ul className="space-y-3">
            {Object.entries(dateTimeSelection).map(([date, times]) => (
              <li key={date}>
                <div className="font-medium">{date}</div>
                <div className="flex flex-wrap gap-2 mt-1 text-sm">
                  {times.map((time) => (
                    <div
                      key={time}
                      className="border border-primary px-2 py-1 flex items-center rounded"
                    >
                      <span>{time}</span>
                      <CircleX
                        onClick={() => handleRemoveTime(date, time)}
                        width={15}
                        className="ml-2 text-red-500 hover:text-red-700 transition duration-300 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Add Show Button */}
      <button className="bg-primary text-white px-8 py-2 mt-6 rounded hover:bg-primary/90 transition-all cursor-pointer">
        Add Show
      </button>
    </>
  ) : (
    // Loading Indicator
    <Loading />
  );
};

// Export
export default AddShows;
