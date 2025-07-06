/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 02 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { Route, Routes, useLocation } from 'react-router-dom';

// Internal Imports
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Favorite from './pages/Favorite';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';
import MyBookings from './pages/MyBookings';
import NotFound from './pages/NotFound';
import SeatLayout from './pages/SeatLayout';
import AddShows from './pages/admin/AddShows';
import Dashboard from './pages/admin/Dashboard';
import Layout from './pages/admin/Layout';
import ListBookings from './pages/admin/ListBookings';
import ListShows from './pages/admin/ListShows';

// App Component
const App = () => {
  // Check if the current route is an admin route
  const isAdminRoute = useLocation().pathname.startsWith('/admin');

  // Render the application with routes
  return (
    <>
      <Toaster position="top-right" />
      {/* Render Navbar only for non-admin routes */}
      {!isAdminRoute && <Navbar />}

      {/* Application routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/favorite" element={<Favorite />} />

        {/* Admin routes */}
        <Route path="/admin/*" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-shows" element={<AddShows />} />
          <Route path="list-shows" element={<ListShows />} />
          <Route path="list-bookings" element={<ListBookings />} />
        </Route>

        {/* Catch-all route for unknown routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Render Footer only for non-admin routes */}
      {!isAdminRoute && <Footer />}
    </>
  );
};

// Export
export default App;
