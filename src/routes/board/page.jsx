import React from "react";
import DataFetchingComponent from "~/lib/apis/board";
import MyNavbar from "~/components/MyNavbar/MyNavbar";
import MyFooter from "~/components/MyFooter/MyFooter";
import { useLocation, Outlet } from "react-router-dom";

export default function BoardPage() {
  return (
    <div>
      <br></br>
      <h1>
        <b>My Board</b>
      </h1>
      <br></br>
      <DataFetchingComponent></DataFetchingComponent>
    </div>
  );
}
