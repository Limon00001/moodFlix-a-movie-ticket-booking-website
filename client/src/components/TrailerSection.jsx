/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 04 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { PlayCircleIcon } from 'lucide-react';
import { useState } from 'react';
import ReactPlayer from 'react-player';

// Internal Imports
import { dummyTrailers } from '../assets/assets';
import BlurCircle from './BlurCircle';

// Trailer Section Component
const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      {/* Heading */}
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        Trailers
      </p>

      {/* Trailer Player */}
      <div className="relative mt-6">
        {/* Blur Effect */}
        <BlurCircle top="-100px" right="-100px" />
        {/* Player */}
        <ReactPlayer
          src={currentTrailer.videoUrl}
          controls={false}
          width="960px"
          height="540px"
          className="mx-auto max-w-full"
        />
      </div>

      {/* Trailer Cards Previews */}
      <div className="group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            onClick={() => setCurrentTrailer(trailer)}
            className="relative group-hover:not-hover:opacity-50 hover:-translate-y-1 transition duration-300 max-md:h-60 md:max-h-60 cursor-pointer"
          >
            <img
              src={trailer.image}
              alt={trailer.title}
              className="w-full h-full object-cover rounded-lg brightness-full"
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-5 md:w-8 md:h-12 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Export
export default TrailerSection;
