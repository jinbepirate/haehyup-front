import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "~/routes/page";
import HomePage from "../routes/board/page";
import Signup from "~/routes/board/signup/signup";
import Signin from "../routes/board/signin/signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    index: true,
  },
  {
    path: "/board",
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
]);
export default router;
