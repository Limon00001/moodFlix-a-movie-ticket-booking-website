/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 06 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { Outlet } from 'react-router-dom';

// Internal Imports
import AdminNavbar from '../../components/admin/AdminNavbar';
import AdminSidebar from '../../components/admin/AdminSidebar';

/**
 * Layout component for the admin section.
 * Renders the AdminNavbar at the top.
 * AdminSidebar on the left side,
 * And the right side displays the rest of the content via <Outlet />.
 */

// Layout Component for Admin Page
const Layout = () => {
  return (
    <>
      {/* Admin Navbar */}
      <AdminNavbar />

      <div className="flex">
        {/* Admin Sidebar */}
        <AdminSidebar />

        {/* Outlet for nested contents */}
        <div className="flex-1 px-4 md:px-10 py-10 h-[calc(100vh-64px)] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

// Export
export default Layout;
