/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 06 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { Clapperboard } from 'lucide-react';
import { Link } from 'react-router-dom';

// Navbar Component for Admin Page
const AdminNavbar = () => {
  return (
    <div className="flex items-center justify-between px-6 md:px-10 h-16 border-b border-gray-300/30">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <Clapperboard className="w-9 h-9" />
        <span className="text-2xl font-bold italic">
          Mood<span className="text-primary">Flix</span>
        </span>
      </Link>
    </div>
  );
};

// Export
export default AdminNavbar;
