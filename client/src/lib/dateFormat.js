/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 04 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Date Format Utility Function
const dateFormat = (dateString) => {
  return new Date(dateString).toLocaleString('en-US', {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
};

// Export
export default dateFormat;
