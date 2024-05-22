import MyNavbar from "~/components/MyNavbar/MyNavbar";
import MyFooter from "~/components/MyFooter/MyFooter";
import React from "react";
import { useParams } from "react-router-dom";

export default function BoardDetailPage() {
  const { boardId } = useParams();
  return (
    <>
      <h1>BoardDetail</h1>
      <div>Board Detail Page for Board ID: {boardId}</div>
    </>
  );
}
