// production
// export const BASE_URL = "/api"
// export const BASE_URL = "http://13.60.28.192/api" 

// localhost (development)
// export const BASE_URL = "http://localhost:3000"  

// export const BASE_URL = location.hostname === "localhost" ? "http://localhost:3000" : "/api"

export const BASE_URL = "https://devtinder-backend-0a7v.onrender.com"

export function timeAgo(dateString) {
  const past = new Date(dateString);
  const now = new Date();

  const diffMs = now - past; // difference in milliseconds
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffSec < 60) return "just now";
  if (diffMin < 60) return `${diffMin} minutes ago`;
  if (diffHour < 24) return `${diffHour} hours ago`;
  return `${diffDay} days ago`;
}
