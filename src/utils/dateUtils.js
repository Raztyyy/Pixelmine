/**
 * Formats a date in a readable way.
 * - "Just now", "3 mins ago", "2 days ago" for recent dates
 * - Actual date for older dates (using the format option)
 *
 * @param {string|Date} dateInput - The date string or Date object
 * @param {"short"|"medium"|"full"} format - "short" = 5 Aug
 *                                         - "medium" = 5 Aug 2026
 *                                         - "full" = 5 Aug 2026, 2:30 PM
 * @returns {string} Formatted date
 */
export function formatDateReadable(dateInput, format = "short") {
  if (!dateInput) return "";

  const date = new Date(dateInput);
  const now = new Date();
  const diffMs = now - date; // difference in milliseconds
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);

  // Relative time for recent dates (<7 days)
  if (diffSec < 60) return "Just now";
  if (diffMin < 60) return `${diffMin} min${diffMin > 1 ? "s" : ""} ago`;
  if (diffHr < 24) return `${diffHr} hr${diffHr > 1 ? "s" : ""} ago`;
  if (diffDay < 7) return `${diffDay} day${diffDay > 1 ? "s" : ""} ago`;

  // Fallback to absolute date
  let options = {};
  switch (format) {
    case "short":
      options = { day: "numeric", month: "short" };
      break;
    case "medium":
      options = { day: "numeric", month: "short", year: "numeric" };
      break;
    case "full":
      options = {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      break;
    default:
      options = { day: "numeric", month: "short" };
  }

  return date.toLocaleDateString("en-US", options);
}
