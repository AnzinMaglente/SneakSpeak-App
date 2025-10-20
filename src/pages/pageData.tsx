import { type routerType } from "../types/router.types";
import About from "./about";
import Home from "./home";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
  {
    path: "about",
    element: <About />,
    title: "about",
  },
];

export default pagesData;
