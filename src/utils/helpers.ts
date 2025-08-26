/**
 * Adds lazy loading capabilities to images
 * @param {string} src - The image source URL
 * @param {string} fallback - Optional fallback image URL
 * @returns {Object} - Image props with error handling
 */
export const lazyImageProps = (src: string, fallback?: string) => {
  return {
    src,
    loading: 'lazy',
    onError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      const target = e.target as HTMLImageElement;
      // If fallback is provided, use it, otherwise use placeholder service
      target.src = fallback || `https://via.placeholder.com/800x600?text=Image+Not+Found`;
      target.onerror = null; // Prevent infinite loop if fallback fails
    }
  };
};

/**
 * Formats a date string into a readable format
 * @param {string} dateString - Date string in any valid format
 * @returns {string} - Formatted date string
 */
export const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  } catch (err) {
    return dateString; // Return original string if parsing fails
  }
};

/**
 * Validates an email address
 * @param {string} email - The email address to validate
 * @returns {boolean} - Whether the email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Truncates text to a specific length with an ellipsis
 * @param {string} text - The text to truncate
 * @param {number} maxLength - Maximum length before truncating
 * @returns {string} - Truncated text with ellipsis if needed
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

/**
 * Converts a skill level (0-100) to text representation
 * @param {number} level - The skill level (0-100)
 * @returns {string} - Text representation of skill level
 */
export const skillLevelToText = (level: number): string => {
  if (level >= 90) return 'Expert';
  if (level >= 75) return 'Advanced';
  if (level >= 60) return 'Intermediate';
  if (level >= 40) return 'Basic';
  return 'Beginner';
};
