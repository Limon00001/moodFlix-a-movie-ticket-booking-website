/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 07 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Admin Title Component for displaying the different title
const AdminTitle = ({ text1 = '', text2 = '' }) => {
  return (
    <h1 className="font-medium text-2xl">
      {text1} <span className="text-primary underline">{text2}</span>
    </h1>
  );
};

// Export
export default AdminTitle;
