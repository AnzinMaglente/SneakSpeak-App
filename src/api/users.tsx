import { axiosInstance } from ".";

export const getLoggedUser = async () => {
  try {
    const { data } = await axiosInstance.get("/api/user/get-logged-user");
    return data;
  } catch (err: any) {
    return err.response?.data || { success: false, message: err.message };
  }
};
