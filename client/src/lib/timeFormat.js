/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 03 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Time Format Utility Function
const timeFormat = (minutes) => {
  if (!minutes) return 'N/A';

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  return `${hours > 0 ? `${hours}h ` : ''}${mins}m`;
};

// Export
export { timeFormat };
