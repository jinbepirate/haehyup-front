import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "~/routes/page";
import HomePage from "../routes/board/page";
import Signup from "~/routes/board/signup/signup";
import Signin from "../routes/board/signin/signin";
import MyPage from "../routes/board/mypage/mypage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    index: true,
  },
  {
    path: "/home",
    element: <HomePage />,
    index: true,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "mypage",
    element: <MyPage />,
  },
]);
export default router;
