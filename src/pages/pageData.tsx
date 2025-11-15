import { type routerType } from "../types/router.types";
import Auth from "./auth";
import Home from "./home";
import Admin from "./admin";
import ArticleEditor from "./articleEditor";
import Profile from "./profile";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
  {
    path: "auth",
    element: <Auth />,
    title: "Auth",
  },
  {
    path: "admin",
    element: <Admin />,
    title: "Admin",
  },
  {
    path: "articleEditor",
    element: <ArticleEditor />,
    title: "ArticleEditor",
  },
  {
    path: "profile",
    element: <Profile />,
    title: "Profile",
  },
];

export default pagesData;
