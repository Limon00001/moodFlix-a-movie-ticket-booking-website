/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 03 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { Link } from 'react-router-dom';

// Navigation Menu Items Component
const NavItems = ({ item, isActive, setIsOpen }) => {
  return (
    <Link
      key={item.id}
      to={item.path}
      className={`text-lg font-medium hover:text-primary transition duration-300 ${
        isActive(item.path) ? 'text-primary' : ''
      }`}
      onClick={() => {
        scrollTo(0, 0);
        setIsOpen(false);
      }}
    >
      {item.name}
    </Link>
  );
};

// Export
export default NavItems;
