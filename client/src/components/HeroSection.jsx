/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 03 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Internal Imports
import { assets } from '../assets/assets';

// Hero Section Component
const HeroSection = () => {
  // Navigation Hook
  const navigate = useNavigate();

  return (
    // Hero Section Container with Background Image
    <div className="flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url('/backgroundImage.png')] bg-center bg-cover h-screen">
      {/* Logo */}
      <img
        src={assets.marvelLogo}
        alt="Marvel Logo"
        className="max-h-11 lg:h-11 mt-20"
      />

      {/* Title */}
      <h1 className="text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110">
        Guardians <br /> of the Galaxy
      </h1>

      {/* Genres, Release Date and Runtime */}
      <div className="flex items-center gap-4 text-gray-300">
        <span>Action | Adventure | Sci-Fi</span>
        <div className="flex items-center gap-1">
          <CalendarIcon className="w-4.5 h-4.5" /> 2018
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="w-4.5 h-4.5" /> 2h 8m
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 max-w-md">
        In Marvel Studios' "Guardians of the Galaxy," a group of intergalactic
        criminals must pull together to stop a fanatical warrior with plans to
        purge the universe.
      </p>

      {/* Explore Movies Button */}
      <button
        onClick={() => navigate('/movies')}
        className="flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-semibold cursor-pointer"
      >
        <span>Explore Movies</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

// Export
export default HeroSection;
