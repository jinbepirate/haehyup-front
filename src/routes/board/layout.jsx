import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import MyFooter from "../../components/MyFooter/MyFooter";

export default function BoardLayout({ children }) {
  return (
    <>
      <MyNavbar></MyNavbar>
      <Container>
        <Outlet></Outlet>
      </Container>
      <MyFooter></MyFooter>
    </>
  );
}
