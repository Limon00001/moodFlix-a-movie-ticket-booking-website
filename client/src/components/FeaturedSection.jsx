/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 03 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Internal Imports
import { dummyShowsData } from '../assets/assets';
import BlurCircle from './BlurCircle';
import MovieCard from './MovieCard';

// Featured Section Component
const FeaturedSection = () => {
  // Navigation Hook
  const navigate = useNavigate();

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">
      {/* Heading */}
      <div className="relative flex items-center justify-between pt-20 pb-10">
        {/* Blur Effect */}
        <BlurCircle top="0" right="-80px" />
        <p className="text-gray-300 font-medium text-lg">Now Showing</p>
        <button
          onClick={() => navigate('/movies')}
          className="flex items-center gap-2 text-sm group text-gray-300 cursor-pointer hover:text-primary transition duration-300"
        >
          View All{' '}
          <ArrowRight className="group-hover:translate-x-0.5 transition w-4.5 h-4.5" />
        </button>
      </div>

      {/* Movie Cards */}
      <div className="flex flex-wrap gap-8 mt-8 max-sm:justify-center">
        {dummyShowsData.slice(0, 4).map((show) => (
          <MovieCard key={show._id} movie={show} />
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-20">
        <button
          onClick={() => {
            navigate('/movies');
            scrollTo(0, 0);
          }}
          className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition duration-300 rounded-full font-medium cursor-pointer"
        >
          Show More
        </button>
      </div>
    </div>
  );
};

// Export
export default FeaturedSection;
