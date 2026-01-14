import { axiosInstance } from "./index";

export const signinUser = async (user: any) => {
  try {
    const { data } = await axiosInstance.post("/api/auth/signin", user);

    // If backend returns token, save it for future requests
    if (data.success && data.token) {
      localStorage.setItem("token", data.token);
    }

    return data; // always return structured API response
  } catch (err: any) {
    // return consistent error object
    return err.response?.data || { success: false, message: err.message };
  }
};

export const loginUser = async (user: any) => {
  try {
    const { data } = await axiosInstance.post("/api/auth/login", user);

    if (data.success && data.token) {
      localStorage.setItem("token", data.token);
    }

    return data;
  } catch (err: any) {
    return err.response?.data || { success: false, message: err.message };
  }
};
