/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 03 Jul, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// Blur Circle Component for a blur circle effect
const BlurCircle = ({
  top = 'auto',
  left = 'auto',
  right = 'auto',
  bottom = 'auto',
}) => {
  return (
    <div
      className="absolute -z-50 h-58 w-58 aspect-square rounded-full blur-3xl bg-primary/30"
      style={{ top, left, right, bottom }}
    >
      BlurCircle
    </div>
  );
};

// Export
export default BlurCircle;
