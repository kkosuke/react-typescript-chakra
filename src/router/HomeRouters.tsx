import { Home } from "../components/pages/Home";
import { Settings } from "../components/pages/Settings";
import { UserManagement } from "../components/pages/UserManagement";

export const HomeRouters = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/home/user_management",
    element: <UserManagement />,
  },
  {
    path: "/home/setting",
    element: <Settings />,
  },
];
