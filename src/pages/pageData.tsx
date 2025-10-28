import { type routerType } from "../types/router.types";
import Auth from "./auth";
import Home from "./home";
import Admin from "./admin";

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
];

export default pagesData;
