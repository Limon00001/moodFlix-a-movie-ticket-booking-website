/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 02 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import {
  Clapperboard,
  MenuIcon,
  SearchIcon,
  TicketPlus,
  XIcon,
} from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavItems from './NavItems';

// Navbar Component for Movie Ticket Booking Application
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Clerk User Context
  const { user } = useUser();
  const { openSignIn } = useClerk();

  // Navigation Hook
  const navigate = useNavigate();

  // Menu Items
  const menuItems = [
    { id: crypto.randomUUID(), name: 'Home', path: '/' },
    { id: crypto.randomUUID(), name: 'Movies', path: '/movies' },
    { id: crypto.randomUUID(), name: 'Theaters', path: '/theaters' },
    { id: crypto.randomUUID(), name: 'Releases', path: '/releases' },
    { id: crypto.randomUUID(), name: 'Favorites', path: '/favorite' },
  ];

  // Active Class For Menu Items
  // This function checks if the current path matches the menu item's path
  const isActive = (path) => {
    return window.location.pathname === path;
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 max-md:flex-1">
        <Clapperboard className="w-9 h-9" />
        <span className="text-2xl font-bold italic">
          Mood<span className="text-primary">Flix</span>
        </span>
      </Link>

      {/* Menu */}
      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${
          isOpen ? 'max-md:w-full' : 'max-md:w-0'
        }`}
      >
        <XIcon
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer"
        />

        {/* Menu Items */}
        {menuItems.map((item) => (
          <NavItems
            key={item.id}
            item={item}
            isActive={isActive}
            setIsOpen={setIsOpen}
          />
        ))}
      </div>

      {/* Search and Login */}
      <div className="flex items-center gap-8">
        <SearchIcon className="max-md:hidden w-6 h-6 cursor-pointer" />

        {/* Login */}
        {!user ? (
          <button
            onClick={openSignIn}
            className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition duration-300 rounded-full font-medium cursor-pointer"
          >
            Login
          </button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<TicketPlus width={15} />}
                onClick={() => navigate('/my-bookings')}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </div>

      <MenuIcon
        onClick={() => setIsOpen((prev) => !prev)}
        className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer"
      />
    </div>
  );
};

// Export
export default Navbar;
