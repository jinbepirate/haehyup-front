import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { CSSTransition } from "react-transition-group";
import "./MainPage.css";

export default function MainPage() {
  //API 를 사용해서 변경할 수도 있음.
  const quotes = [
    "“탁월함은 기술이 아니다. 태도입니다.” – 랄프 마스턴.",
    "“성공은 종종 열정의 결과입니다.” – 앨버트 슈바이처.",
    "“행복은 목적지가 아니라 여정입니다.” – 아리스토텔레스.",
    "“무엇을 하든지 최선을 다하라.” – 콘푸시우스.",
    "“실패는 성공으로 가는 지름길이다.” – 코코 샤넬.",
    "“5월 24일은 경서의 생일이다.”",
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
    }, 5000); // 5000ms = 5초 간격으로 명언 변경

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 타이머 해제
  }, []);

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
              },
              .clickable-text {
                cursor: pointer;
                text-decoration: underline;
                /* Add additional styling here if needed */
              }
            `}
          </style>
          <br></br>
          <p>
            <b style={{ color: "whitesmoke" }}>{currentQuote}</b>
          </p>
          <br></br>
          <div className="button-container">
            <Button as={Link} to="/signin" variant="flat" size="xxl">
              해협 시작하기
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
