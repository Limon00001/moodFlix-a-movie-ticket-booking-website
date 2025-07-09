/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 09 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Function to convert number to k
const convertToK = (num) => {
  return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num;
};

// Export
export default convertToK;
