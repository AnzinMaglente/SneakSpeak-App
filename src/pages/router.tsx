import { Navigate, Route, Routes } from "react-router-dom";
import { type routerType } from "../types/router.types";
import pagesData from "./pageData";

const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return (
    <Routes>
      {pageRoutes}
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default Router;
