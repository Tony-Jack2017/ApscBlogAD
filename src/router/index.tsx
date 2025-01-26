import { createBrowserRouter } from "react-router";

import MainLayout from "@/components/layout/MainLayout/MainLayout";

// Auth //
import ForgetPwdPage from "@/pages/auth/forgetPwd";
import SignInPage from "@/pages/auth/signIn";
import SignUpPage from "@/pages/auth/signUp";

// Home //
import DashboardPage from "@/pages/home/dashboard";

// Blog //
import BlogListPage from "@/pages/blog/list";

// Other //
import SettingPage from "@/pages/setting/setting";

export default createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "dashboard", index: true, element: <DashboardPage /> },
      {
        path: "aritcle",
        children: [{ path: "list", index: true, element: <BlogListPage /> }],
      },
      { path: "setting", element: <SettingPage /> },
    ],
  },
  {
    path: "/auth",
    children: [
      { path: "sign_in", element: <SignInPage /> },
      { path: "sign_up", element: <SignUpPage /> },
      { path: "forget_pwd", element: <ForgetPwdPage /> },
    ],
  },
]);
