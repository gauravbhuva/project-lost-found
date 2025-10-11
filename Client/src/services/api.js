import axios from "axios";




const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
   withCredentials: true,
});

// Optional: Add interceptors (for tokens, logs, etc.)
api.interceptors.request.use(
  (config) => {
    // Example: attach token if stored in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle errors globally
//     console.error("API Error:", error.response || error.message);
//     return Promise.reject(error);
//   }
// );

export default api;
