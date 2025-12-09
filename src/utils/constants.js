// production
// export const BASE_URL = "/api"
// export const BASE_URL = "http://13.60.28.192/api" 

// localhost (development)
// export const BASE_URL = "http://localhost:3000"  

export const BASE_URL = location.hostname === "localhost" ? "http://localhost:3000" : "/api"

// export const BASE_URL = "https://devtinder-backend-0a7v.onrender.com"

