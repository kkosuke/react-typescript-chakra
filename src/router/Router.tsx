import { memo, FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { HomeRouters } from "./HomeRouters";

export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Login />} />
        {HomeRouters.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<HeaderLayout>{route.element}</HeaderLayout>}
          />
        ))}
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
});
