/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 02 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Internal Imports
import { dummyShowsData } from '../assets/assets';
import BlurCircle from '../components/BlurCircle';
import MovieCard from '../components/MovieCard';

// Favorite Page Component
const Favorite = () => {
  // Check if there are any favorite movies to display
  return dummyShowsData.length > 0 ? (
    <div className="relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]">
      {/* Blur Effect */}
      <BlurCircle top="150px" left="0" />
      <BlurCircle bottom="50px" right="50px" />

      {/* Heading */}
      <h1 className="font-medium text-lg my-4">Your Favorite Movies</h1>

      {/* Movies Section */}
      <div className="flex flex-wrap gap-8 max-sm:justify-center">
        {dummyShowsData.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  ) : (
    // No Movies Found Section
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-center">No Movies Found</h1>
    </div>
  );
};

// Export
export default Favorite;
