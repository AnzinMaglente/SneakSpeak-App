import { axiosInstance } from ".";

export const getLoggedUser = async () => {
  try {
    const { data } = await axiosInstance.get("/api/user/get-logged-user");
    return data;
  } catch (err) {
    return err;
  }
};
