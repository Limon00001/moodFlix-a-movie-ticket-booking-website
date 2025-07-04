/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 04 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Function to format ISO date string to local time string
const isoTimeFormat = (dateString) => {
  const date = new Date(dateString);

  // Converting to local time
  const localTimeString = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return localTimeString;
};

// Export
export default isoTimeFormat;
