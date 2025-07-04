/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 02 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { ArrowRightIcon, ClockIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

// Internal Imports
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets';
import BlurCircle from '../components/BlurCircle';
import Loading from '../components/Loading';
import isoTimeFormat from '../lib/isoTimeFormat';

// Seat Layout Page Component for Movie Ticket Booking Application
const SeatLayout = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);

  // Extracting id & date parameters from the URL
  const { id, date } = useParams();

  // Navigation hook
  const navigate = useNavigate();

  // Grouping rows for seat layout
  const groupRows = [
    ['A', 'B'],
    ['C', 'D'],
    ['E', 'F'],
    ['G', 'H'],
    ['I', 'J'],
  ];

  // Fetching show data based on the id from the URL
  useEffect(() => {
    const getShow = async () => {
      const show = dummyShowsData.find((show) => show._id === id);

      if (show) {
        setShow({
          movie: show,
          dateTime: dummyDateTimeData,
        });
      }
    };

    getShow();
  }, [id]);

  // Function to handle seat selection
  const handleSeatSelect = (seatNumber) => {
    if (!selectedTime) {
      return toast('Please select a time slot first');
    }

    if (!selectedSeats.includes(seatNumber) && selectedSeats.length > 4) {
      return toast('You can select a maximum of 5 seats');
    }

    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seatNumber)
        ? prevSeats.filter((seat) => seat !== seatNumber)
        : [...prevSeats, seatNumber],
    );
  };

  // Function to render seats in a row
  const renderSeats = (row, count = 9) => (
    <div key={row} className="flex gap-2 mt-2">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {/* Rendering seats */}
        {Array.from({ length: count }, (_, index) => {
          // Generating seat number based on row and index
          const seatNumber = `${row}${index + 1}`; // A1, B2, etc.

          // Checking if the seat is selected
          const isSelected = selectedSeats.includes(seatNumber);
          return (
            <button
              key={seatNumber}
              onClick={() => handleSeatSelect(seatNumber)}
              className={`h-8 w-8 rounded border border-primary/60 cursor-pointer ${
                isSelected ? 'bg-primary text-white' : 'bg-transparent'
              }`}
            >
              {seatNumber}
            </button>
          );
        })}
      </div>
    </div>
  );

  return show ? (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50">
      {/* Available Time Slots */}
      <div className="w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30">
        <p className="text-lg font-semibold px-6">Available Time Slots</p>
        <div className="mt-6 space-y-1">
          {/* Rendering available time slots */}
          {show.dateTime[date].map((item) => (
            <div
              key={item.time}
              className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition ${
                selectedTime === item.time
                  ? 'bg-primary text-white'
                  : 'hover:bg-primary/20'
              }`}
              onClick={() => setSelectedTime(item.time)}
            >
              <ClockIcon className="w-4 h-4" />
              {/* Rendering formatted time */}
              <p>{isoTimeFormat(item.time)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Seat Selection */}
      <div className="relative flex-1 flex flex-col items-center max-md:mt-16">
        {/* Blurred Effects */}
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle bottom="0" right="0" />

        {/* Seat Details */}
        <h1 className="text-2xl font-semibold mb-4">Select Your Seat</h1>
        {/* Screen */}
        <img src={assets.screenImage} alt="Screen" />
        <p className="text-gray-400 text-sm mb-6 uppercase">Screen Side</p>

        {/* Rendering seat layout */}
        <div className="flex flex-col items-center mt-10 text-xs text-gray-300">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6">
            {/* Rendering seat rows */}
            {groupRows[0].map((row) => renderSeats(row))}
          </div>

          {/* Rendering remaining seat rows */}
          <div className="grid grid-cols-2 gap-11">
            {groupRows.slice(1).map((group, index) => (
              <div key={index} className="">
                {group.map((row) => renderSeats(row))}
              </div>
            ))}
          </div>
        </div>

        {/* Book Now and Payment */}
        <button
          onClick={() => navigate('/my-bookings')}
          className="flex items-center gap-1 mt-20 px-10 py-3 text-sm bg-primary hover:bg-primary-dull rounded-full font-medium transition cursor-pointer active:scale-95"
        >
          Book Now
          <ArrowRightIcon strokeWidth={3} className="w-4 h-4" />
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

// Export
export default SeatLayout;
