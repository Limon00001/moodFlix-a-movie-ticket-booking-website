/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 06 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import {
  LayoutDashboardIcon,
  ListCollapseIcon,
  ListIcon,
  PlusSquareIcon,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

// Internal Imports
import { assets } from '../../assets/assets';

// Admin Sidebar Component for Admin Page
const AdminSidebar = () => {
  // Dummy User Data
  const user = {
    firstName: 'Admin',
    lastName: 'User',
    imageUrl: assets.profile,
  };

  // Admin Navigation Links
  const adminNavLinks = [
    {
      id: crypto.randomUUID(),
      name: 'Dashboard',
      path: '/admin',
      icon: LayoutDashboardIcon,
    },
    {
      id: crypto.randomUUID(),
      name: 'Add Shows',
      path: '/admin/add-shows',
      icon: PlusSquareIcon,
    },
    {
      id: crypto.randomUUID(),
      name: 'List Shows',
      path: '/admin/list-shows',
      icon: ListIcon,
    },
    {
      id: crypto.randomUUID(),
      name: 'List Bookings',
      path: '/admin/list-bookings',
      icon: ListCollapseIcon,
    },
  ];

  return (
    <div className="h-[calc(100vh-64px)] md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-gray-300/20 text-sm">
      <img
        className="h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto"
        src={user.imageUrl}
        alt="User Profile"
      />

      <p className="text-base mt-2 max-md:hidden">{`${user.firstName} ${user.lastName}`}</p>

      <div className="w-full">
        {
          // Admin Navigation Links
          adminNavLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              end
              className={({ isActive }) =>
                `relative flex items-center max-md:justify-center gap-2 w-full py-2.5 min-md:pl-10 first:mt-6 text-gray-400 ${
                  isActive && 'bg-primary/15 text-primary group'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <link.icon className="w-5 h-5" />
                  <p className="max-md:hidden">{link.name}</p>
                  <span
                    className={`absolute w-1.5 h-10 right-0 ${
                      isActive && 'bg-primary'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))
        }
      </div>
    </div>
  );
};

// Export
export default AdminSidebar;
