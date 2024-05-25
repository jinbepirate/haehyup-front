import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./mypage.css";
import MyNavbar from "../../../components/MyNavbar/MyNavbar";
const MyPage = () => {
  // 사용자 정보와 스터디 리스트를 상태로 관리
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    studyList: [],
  });

  // 마운트될 때 사용자 정보를 불러오는 가정
  useEffect(() => {
    // API 호출을 통해 사용자 정보를 가져오는 로직을 구현
    // 이 예제에서는 예시 데이터를 사용
    setUserInfo({
      name: "홍길동",
      email: "hong@example.com",
      studyList: [
        { id: 1, title: "React 기초", status: "진행중" },
        { id: 2, title: "JavaScript 고급", status: "완료" },
      ],
    });
  }, []);

  return (
    <>
      <MyNavbar />

      <Container>
        <h1 className="header">
          <b>🫡마이페이지</b>
        </h1>
        <Row>
          <Col xs={12} md={8}>
            <section>
              <h2>
                <b>스터디 내역</b>
              </h2>
              <ul>
                {userInfo.studyList.map((study) => (
                  <li key={study.id}>
                    {study.title} - {study.status}
                  </li>
                ))}
              </ul>
            </section>
          </Col>
          <Col xs={12} md={4}>
            <section>
              <h2>
                <b>사용자 정보</b>
              </h2>

              <Image
                className="profile"
                src="src\img\jinbe.jpeg"
                roundedCircle
              />

              <p>이름: {userInfo.name}</p>
              <p>이메일: {userInfo.email}</p>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyPage;
