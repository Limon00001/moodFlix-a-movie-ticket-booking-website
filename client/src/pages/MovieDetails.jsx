/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 02 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { Heart, PlayCircleIcon, StarIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Internal Imports
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import BlurCircle from '../components/BlurCircle';
import DateSelect from '../components/DateSelect';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import { timeFormat } from '../lib/timeFormat';

// Movie Details Page Component
const MovieDetails = () => {
  const [show, setShow] = useState(null);

  // Get the movie ID from the URL parameters and set up navigation
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch the movie details based on the ID from the data
  useEffect(() => {
    const getShow = () => {
      const show = dummyShowsData.find((movie) => movie._id === id);

      // If the show is not found, navigate back to the movies page
      if (show) {
        setShow({
          movie: show,
          dateTime: dummyDateTimeData,
        });
      }
    };

    getShow();
  }, [id]);

  return show ? (
    <div className="px-6 md:px-16 lg:px-40 pt-30 md:pt-50">
      {/* Movie Details */}
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {/* Movie Poster */}
        <img
          src={show.movie.poster_path}
          alt="Movie Poster"
          className="max-md:mx-auto rounded-xl h-104 max-w-70 object-cover"
        />

        {/* Movie Details */}
        <div className="relative flex flex-col gap-3">
          {/* Blur Effect */}
          <BlurCircle top="-100px" right="-100px" />
          <p className="text-primary uppercase">ENGLISH</p>
          {/* Movie Title */}
          <h1 className="text-4xl font-semibold max-w-96 text-balance">
            {show.movie.title}
          </h1>

          {/* Movie Rating */}
          <div className="flex items-center gap-2 text-gray-300">
            <StarIcon className="w-5 h-5 text-primary fill-primary" />
            {show.movie.vote_average.toFixed(1)} User Rating
          </div>

          {/* Movie Overview */}
          <p className="text-gray-400 mt-2 text-sm leading-tight max-w-xl">
            {show.movie.overview}
          </p>

          {/* Movie Release Date, Genres, and Runtime */}
          <p>
            {timeFormat(show.movie.runtime)} •{' '}
            {show.movie.genres.map((genre) => genre.name).join(', ')} •{' '}
            {show.movie.release_date.split('-')[0]}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            {/* Watch Trailer and Book Tickets Buttons */}
            <button className="flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium cursor-pointer active:scale-95">
              <PlayCircleIcon className="w-5 h-5" />
              Watch Trailer
            </button>
            <a
              href="#dateSelect"
              className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer active:scale-95"
            >
              Book Tickets
            </a>
            <button className="bg-gray-700 p-2.5 rounded-full transition cursor-pointer active:scale-95">
              <Heart className={`w-5 h-5`} />
            </button>
          </div>
        </div>
      </div>

      {/* Casts Section */}
      <p className="text-lg font-medium mt-20">Your Favorite Cast</p>
      <div className="overflow-x-auto mt-8 pb-4 no-scrollbar">
        {/* All Casts */}
        <div className="flex items-center gap-4 w-max px-4">
          {show.movie.casts.slice(0, 12).map((cast, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={cast.profile_path}
                alt="Cast"
                className="rounded-full h-20 aspect-square object-cover"
              />
              <p className="text-xs font-medium mt-3">{cast.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Date Selection */}
      <DateSelect dateTime={show.dateTime} id={id} />

      {/* Recommended Movies */}
      <p className="text-lg font-medium mt-20 mb-8">You may also like</p>
      <div className="flex flex-wrap gap-8 max-sm:justify-center">
        {dummyShowsData.slice(0, 4).map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>

      {/* Show More Movies Button */}
      <div className="flex justify-center mt-20">
        <button
          onClick={() => {
            navigate('/movies');
            scrollTo(0, 0);
          }}
          className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
        >
          Show More
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

// Export
export default MovieDetails;
