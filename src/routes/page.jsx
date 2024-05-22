import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { CSSTransition } from "react-transition-group";
import "./MainPage.css";

export default function MainPage() {
  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
      <div className="main-page">
        <h1>
          <b>This is my MainPage</b>
        </h1>
        <style type="text/css">
          {`
      .btn-flat {
        background-color: purple;
        color: white;
      }

      .btn-xxl {
        padding: 1rem 1.5rem;
        font-size: 1.5rem;
      }
      `}
        </style>
        <p>MainPage입니다. </p>
        <Button as={Link} to="/board" variant="flat" size="xxl">
          Go to Board
        </Button>{" "}
      </div>
    </CSSTransition>
  );
}
