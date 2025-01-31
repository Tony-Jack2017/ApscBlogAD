import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import MainLayout from "@/components/layout/MainLayout/MainLayout";

// Auth //
const ForgetPwdPage = lazy(() => import("@/pages/auth/forgetPwd"));
const SignInPage = lazy(() => import("@/pages/auth/signIn"));
const SignUpPage = lazy(() => import("@/pages/auth/signUp"));

// Home //
const DashboardPage = lazy(() => import("@/pages/home/dashboard"));

// Blog //
const ArticleListPage = lazy(() => import("@/pages/blog/list"));
const ArticleCreatePage = lazy(() => import("@/pages/blog/create"));
const ArticleCommentPage = lazy(() => import("@/pages/blog/comment"));
const ArticleTagPage = lazy(() => import("@/pages/blog/tag"));
const ArticleTypePage = lazy(() => import("@/pages/blog/type"));

// Message //
const MessagePage = lazy(() => import("@/pages/message/index"));

// Other //
const SettingPage = lazy(() => import("@/pages/setting/setting"));

export default createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, path: "/", element: <Navigate to="/dashboard" /> },
      { path: "dashboard", element: <DashboardPage /> },
      {
        path: "article",
        children: [
          { path: "list", element: <ArticleListPage /> },
          { path: "create", element: <ArticleCreatePage /> },
          { path: "comment", element: <ArticleCommentPage /> },
          { path: "tag", element: <ArticleTagPage /> },
          { path: "type", element: <ArticleTypePage /> },
        ],
      },
      { path: "message", element: <MessagePage /> },
      {
        path: "user",
        children: [{ path: "list", index: true, element: <ArticleListPage /> }],
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
