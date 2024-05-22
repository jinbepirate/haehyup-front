import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "~/routes/page";
import BoardPage from "~/routes/board/page";
import BoardDetailPage from "~/routes/board/detail/page";
import BoardWritePage from "~/routes/board/write/page";
import BoardLayout from "../routes/board/layout";
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
    element: <BoardLayout />,
    children: [
      //BoardID인데 왜 안들어가지는지 ?
      {
        path: "",
        element: <BoardPage />,
      },
      {
        path: ":boardId",
        element: <BoardDetailPage />,
      },
      {
        path: "write",
        element: <BoardWritePage />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
    ],
  },
]);
export default router;
