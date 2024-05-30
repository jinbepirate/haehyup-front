import { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../mypage/mypage.css";
import MyNavbar from "../../../components/MyNavbar/MyNavbar";

const Memo = () => {
  // 사용자 정보와 공부 기록 리스트를 상태로 관리
  const [memos, setMemos] = useState([]);

  // 마운트될 때 사용자 정보를 불러오는 가정
  // useEffect(() => {
  //   // API 호출을 통해 사용자 정보를 가져오는 로직을 구현
  //   // 이 예제에서는 예시 데이터를 사용
  //   setUserInfo({
  //     name: "홍길동",
  //     email: "hong@example.com",
  //     studyLogList: [
  //       {
  //         id: 1,
  //         title: "React 기초",
  //         studyTime: "2:00",
  //         description: "React의 기본 개념과 구성 요소에 대해 공부했습니다.",
  //       },
  //       {
  //         id: 2,
  //         title: "JavaScript 고급",
  //         studyTime: "2:00",
  //         description:
  //           "JavaScript의 고급 문법과 비동기 처리에 대해 공부했습니다.",
  //       },
  //     ],
  //   });
  // }, []);

  useEffect(() => {
    const fetchMemos = async () => {
      try {
        const response = await fetch("/api/memo/readallnow");

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setMemos(data);
        } else if (response.status === 404) {
          console.error("작성하신 메모가 없습니다.");
        } else if (response.status === 400) {
          console.error("비 정상적인 접근입니다.");
        } else {
          console.error("Failed to fetch memos:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching memos:", error);
      }
    };

    fetchMemos();
  }, []);

  return (
    <>
      <MyNavbar />
      <Container>
        <h1 className="header">
          <b>📝메모📝</b>
        </h1>
        <Row>
          <Col xs={12}>
            <section>
              <h2>
                <b>모든 메모</b>
              </h2>
              <ul>
                {memos.map((memo) => (
                  <li key={memo._id}>{memo.contents}</li>
                ))}
              </ul>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Memo;
