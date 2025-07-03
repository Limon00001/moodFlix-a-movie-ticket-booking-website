/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 03 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { StarIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Internal Imports
import { timeFormat } from '../lib/timeFormat';

// Movies Card Component for displaying movie details in a card format
const MovieCard = ({ movie }) => {
  // Navigation hook
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between p-3 w-66 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300">
      {/* Movie Image */}
      <img
        onClick={() => {
          navigate(`/movies/${movie._id}`);
          scrollTo(0, 0);
        }}
        src={movie.backdrop_path}
        alt="Movie"
        className="rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer"
      />

      {/* Movie Title */}
      <p className="font-semibold mt-2 truncate">{movie.title}</p>

      {/* Movie Release Date, Genres, and Runtime */}
      <p className="text-gray-400 text-sm mt-2">
        {new Date(movie.release_date).getFullYear()} •{' '}
        {movie.genres
          .slice(0, 2)
          .map((genre) => genre.name)
          .join(' | ')}{' '}
        • {timeFormat(movie.runtime)}
      </p>

      {/* Movie Overview */}
      <div className="flex items-center justify-between mt-4 pb-3">
        <button
          onClick={() => {
            navigate(`/movies/${movie._id}`);
            scrollTo(0, 0);
          }}
          className="bg-primary hover:bg-primary-dull text-xs py-2 px-4 transition rounded-full font-medium cursor-pointer"
        >
          Buy Tickets
        </button>

        {/* Movie Rating */}
        <p className="flex items-center gap-1 text-gray-400 text-sm mt-1 pr-1">
          <StarIcon className="w-4 h-4 text-primary fill-primary" />
          {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </div>
  );
};

// Export
export default MovieCard;
