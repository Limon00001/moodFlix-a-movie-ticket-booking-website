/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 04 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

// Internal Imports
import BlurCircle from './BlurCircle';

// Component for Date Selection
const DateSelect = ({ dateTime, id }) => {
  const [selected, setSelected] = useState(null);

  // Navigation hook
  const navigate = useNavigate();

  // Function to handle date selection and navigation
  const handleDateSelect = () => {
    if (!selected) {
      return toast('Please select a date first');
    }
    navigate(`/movies/${id}/${selected}`);
    scrollTo(0, 0);
  };

  return (
    <div id="dateSelect" className="pt-30">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative p-8 bg-primary/10 border border-primary/20 rounded-lg">
        {/* Blur Effects */}
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle top="100px" right="0" />

        {/* Date Selection UI */}
        <div>
          <p className="text-lg font-semibold">Choose a date</p>
          <div className="flex items-center gap-6 text-sm mt-5">
            <ChevronLeftIcon width={28} />

            {/* Time Slots */}
            <span className="grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4">
              {Object.keys(dateTime).map((date) => (
                <button
                  key={date}
                  className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-pointer ${
                    selected === date
                      ? 'bg-primary text-white'
                      : 'border border-primary/70'
                  }`}
                  onClick={() => setSelected(date)}
                >
                  <span>{new Date(date).getDate()}</span>
                  <span>
                    {new Date(date).toLocaleDateString('en-US', {
                      month: 'short',
                    })}
                  </span>
                </button>
              ))}
            </span>
            <ChevronRightIcon width={28} />
          </div>
        </div>

        {/* Book Now Button */}
        <button
          onClick={handleDateSelect}
          className="bg-primary text-white px-8 py-2 mt-6 rounded hover:bg-primary/90 transition-all cursor-pointer"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

// Export
export default DateSelect;
