import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/", // works for Vercel serverless API
});

// Automatically attach latest token before every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: global response interceptor for error logging
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error(`API Error ${error.response.status}:`, error.response.data);
    } else {
      console.error("API Error:", error.message);
    }
    return Promise.reject(error);
  }
);
