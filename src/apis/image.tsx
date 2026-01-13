import { axiosInstance } from "./index";

export const saveImage = async (image: any) => {
  try {
    const { data } = await axiosInstance.post("/api/image/save-image", {
      image,
    });
    return data;
  } catch (err) {
    return err;
  }
};

export const getImage = async () => {
  try {
    const { data } = await axiosInstance.get("/api/image/get-image/:id");
    return data;
  } catch (err) {
    return err;
  }
};

export const getAllUserImages = async () => {
  try {
    const { data } = await axiosInstance.get(
      "/api/image/get-all-user-images/:userID"
    );
    return data;
  } catch (err) {
    return err;
  }
};

export const deleteImage = async (image: any) => {
  try {
    const { data } = await axiosInstance.post("/image/delete-image", image);
    return data;
  } catch (err) {
    return err;
  }
};
