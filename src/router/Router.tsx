import { memo, FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { Settings } from "../components/pages/Settings";
import { UserManagement } from "../components/pages/UserManagement";

export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/user_management" element={<UserManagement />} />
        <Route path="/home/setting" element={<Settings />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
});
