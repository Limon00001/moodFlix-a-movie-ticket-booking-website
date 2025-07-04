/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 04 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { useNavigate } from 'react-router-dom';

// NotFound Component for handling 404 errors
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="text-xl text-gray-300">
        Oops! The page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-2 bg-primary hover:bg-primary-dull rounded-full text-white font-semibold transition cursor-pointer"
      >
        Go Home
      </button>
    </div>
  );
};

// Export
export default NotFound;
