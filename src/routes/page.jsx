import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { CSSTransition } from "react-transition-group";
import "./MainPage.css";

export default function MainPage() {
  return (
    <CSSTransition in={true} appear={true} timeout={800} classNames="fade">
      <div className="box">
        <div className="main-page">
          <img src="src\img\haehyup-logo.jpg" alt="HaeHyup Logo" />
          <h1>
            <b style={{ color: "white", textShadow: "2px 2px 4px #000" }}>
              Study with HaeHyup
            </b>
          </h1>
          <style type="text/css">
            {`
              .btn-flat {
                background-color: purple;
                color: white;
                border-radius: 20px;
                transition: transform 0.2s;
              }
              .btn-flat:hover {
                transform: scale(1.05);
                background-color: #5e17eb;
              }
              .btn-xxl {
                padding: 1rem 1.5rem;
                font-size: 1.5rem;
              }
            `}
          </style>
          <br></br>
          <p>
            <b> “탁월함은 기술이 아니다. 태도입니다.” – 랄프 마스턴.</b>
          </p>
          <br></br>
          <div className="button-container">
            <Button as={Link} to="/home" variant="flat" size="xxl">
              Let's Study🌊
            </Button>
            <Button as={Link} to="/signin" variant="flat" size="xl">
              Login
            </Button>
            <Button as={Link} to="/signup" variant="flat" size="xl">
              Sign Up
            </Button>
          </div>
          <div className="wave"></div>
          <div className="wave -three"></div>
          <div className="wave -two"></div>
        </div>
      </div>
    </CSSTransition>
  );
}
