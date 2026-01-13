import axios from "axios";
import { axiosInstance } from "./index";

export const saveArticle = async (article: any) => {
  try {
    const { data } = await axiosInstance.post(
      "/api/article/save-article",
      article
    );
    return data;
  } catch (err) {
    return err;
  }
};

export const getArticle = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/api/article/get-article/${id}`);
    return data;
  } catch (err) {
    return err;
  }
};

export const getAllArticles = async () => {
  try {
    const { data } = await axios.get("/api/article/get-all-articles");
    return data;
  } catch (err) {
    return err;
  }
};

export const getAllUserArticles = async () => {
  try {
    const { data } = await axiosInstance.get(
      "/api/article/get-all-user-articles"
    );
    return data;
  } catch (err) {
    return err;
  }
};

export const editArticle = async (id: string, article: any) => {
  try {
    const { data } = await axiosInstance.patch(
      `/api/article/edit-article/${id}`,
      article
    );
    return data;
  } catch (err) {
    return err;
  }
};

export const deleteArticle = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(
      `/api/article/delete-article/${id}`
    );
    return data;
  } catch (err) {
    return err;
  }
};
