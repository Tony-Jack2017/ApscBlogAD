import MainLayout from "@/components/layout/MainLayout/MainLayout";
import ForgetPwdPage from "@/pages/auth/forgetPwd";
import SignInPage from "@/pages/auth/signIn";
import SignUpPage from "@/pages/auth/signUp";
import DashboardPage from "@/pages/home/dashboard";
import { createBrowserRouter } from "react-router";

export default createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        children: [{ path: "dashboard", element: <DashboardPage /> }],
      },
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
