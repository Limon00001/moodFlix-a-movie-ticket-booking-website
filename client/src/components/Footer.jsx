/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 02 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { Clapperboard } from 'lucide-react';

// Internal Imports
import { assets } from '../assets/assets';

// Footer Component for Movie Ticket Booking Application
const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-36 mt-40 w-full text-gray-300">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-14">
        <div className="md:max-w-96">
          {/* Logo */}
          <div className="flex items-center gap-2 max-md:flex-1">
            <Clapperboard className="w-9 h-9" />
            <span className="text-2xl font-bold italic">
              Mood<span className="text-primary">Flix</span>
            </span>
          </div>

          {/* Description */}
          <p className="mt-6 text-sm">
            MoodFlix is your ultimate destination for movie ticket booking.
            Explore the latest movies, book tickets, and enjoy a seamless
            cinematic experience. Join us in making movie watching more
            accessible and enjoyable.
          </p>

          {/* App Download Links */}
          <div className="flex items-center gap-2 mt-4">
            <img
              src={assets.googlePlay}
              alt="google play"
              className="h-9 w-auto"
            />
            <img src={assets.appStore} alt="app store" className="h-9 w-auto" />
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          <div>
            <h2 className="font-semibold mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+880-185-145-5271</p>
              <p>limonhossain82@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="pt-4 text-center text-sm pb-5">
        Copyright {new Date().getFullYear()} © MoodFlix. All Right Reserved.
      </p>
    </footer>
  );
};

// Export
export default Footer;
