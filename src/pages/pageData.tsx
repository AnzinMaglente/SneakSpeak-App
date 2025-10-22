import { type routerType } from "../types/router.types";
import Auth from "./auth";
import Home from "./home";

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
];

export default pagesData;
