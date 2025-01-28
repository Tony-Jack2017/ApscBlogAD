import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import MainLayout from "@/components/layout/MainLayout/MainLayout";

// Auth //
const ForgetPwdPage = lazy(() => import("@/pages/auth/forgetPwd"));
const SignInPage = lazy(() => import("@/pages/auth/signIn"));
const SignUpPage = lazy(() => import("@/pages/auth/signUp"));

// Home //
const DashboardPage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("@/pages/home/dashboard")), 3000); // 模拟3秒的延迟
  });
});

// Blog //
const BlogListPage = lazy(() => import("@/pages/blog/list"));

// Other //
const SettingPage = lazy(() => import("@/pages/setting/setting"));

export default createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, path:"/", element:<Navigate to="/dashboard" /> },
      { path: "dashboard", element: <DashboardPage /> },
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
