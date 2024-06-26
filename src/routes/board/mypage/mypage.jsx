import { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./mypage.css";
import MyNavbar from "../../../components/MyNavbar/MyNavbar";
import profileImage1 from "../../../img/profileImage/1.jpeg";
import profileImage2 from "../../../img/profileImage/2.jpeg";
import profileImage3 from "../../../img/profileImage/3.jpeg";
import profileImage4 from "../../../img/profileImage/4.jpeg";
import profileImage5 from "../../../img/profileImage/5.jpeg";

// Chart.js 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MyPage = () => {
  // 사용자 정보와 스터디 리스트를 상태로 관리
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    profileImage: "",
    themeRecord: {},
    studyRecord: { studyDate: [], studyTime: [] },
  });
  // 마운트될 때 사용자 정보를 불러오는 가정

  useEffect(() => {
    // 실제 API 호출을 통해 사용자 정보를 가져오는 로직 구현
    const fetchUserInfo = async () => {
      try {
        const response = await fetch("/api/mypage"); // 실제 userId를 넣어주세요

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setUserInfo({
            name: data.user.uname,
            email: data.user.email,
            profileImage: data.user.userImgId,
            themeRecord: data.themeRecord,
            studyRecord: data.studyRecord,
          });
        } else {
          console.error("Failed to fetch user info:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  // useEffect(() => {
  //   // API 호출을 통해 사용자 정보를 가져오는 로직을 구현
  //   // 이 예제에서는 예시 데이터를 사용
  //   setUserInfo({
  //     name: "홍길동",
  //     email: "hong@example.com",
  //     studyList: [
  //       { id: 1, title: "바다", date: "2024-05-01", hours: 2 },
  //       { id: 2, title: "비", date: "2024-05-01", hours: 1 },
  //       { id: 3, title: "숲", date: "2024-05-02", hours: 3 },
  //       { id: 4, title: "바다", date: "2024-05-03", hours: 2 },
  //       { id: 5, title: "비", date: "2024-05-03", hours: 2 },
  //     ],
  //   });
  // }, []);

  // 공부 테마별 총 공부 시간을 계산하는 함수
  const getBarChartData = () => {
    const themes = ["바다", "비", "숲"];
    const themeHours =
      themes &&
      themes.map(
        (theme) =>
          userInfo.studyList &&
          userInfo.studyList
            .filter((study) => study.title === theme)
            .reduce((sum, study) => sum + study.hours, 0)
      );

    return {
      labels: themes,
      datasets: [
        {
          label: "공부 시간",
          data: themeHours,
          backgroundColor: ["#36A2EB", "#FF6384", "#4BC0C0"],
          borderColor: ["#36A2EB", "#FF6384", "#4BC0C0"],
          borderWidth: 1,
        },
      ],
    };
  };

  // userImgId에 따라 이미지를 선택하는 함수
  const getProfileImage = (userImgId) => {
    switch (userImgId) {
      case "1":
        return profileImage1;
      case "2":
        return profileImage2;
      case "3":
        return profileImage3;
      case "4":
        return profileImage4;
      case "5":
        return profileImage5;
      default:
        return "default-profile.png"; // 기본 이미지
    }
  };

  // 날짜별 총 공부 시간을 계산하는 함수
  const getLineChartData = () => {
    const dates = [
      ...new Set(
        userInfo.studyList && userInfo.studyList.map((study) => study.date)
      ),
    ];
    const dateHours =
      dates &&
      dates.map(
        (date) =>
          userInfo.studyList &&
          userInfo.studyList
            .filter((study) => study.date === date)
            .reduce((sum, study) => sum + study.hours, 0)
      );

    return {
      labels: dates,
      datasets: [
        {
          label: "공부 시간",
          data: dateHours,
          fill: false,
          borderColor: "#36A2EB",
          backgroundColor: "#36A2EB",
          tension: 0.1,
          pointBackgroundColor: "#FF6384",
          pointBorderColor: "#FF6384",
          pointHoverBackgroundColor: "#FF6384",
          pointHoverBorderColor: "#FF6384",
        },
      ],
    };
  };

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
              <div className="chart-container">
                <div className="chart-title">테마별 공부 시간</div>
                <Bar
                  data={getBarChartData()}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: "top",
                        labels: {
                          font: {
                            size: 14,
                          },
                          color: document.querySelector(".chart-legend")
                            ? getComputedStyle(
                                document.querySelector(".chart-legend")
                              ).color
                            : "#333",
                        },
                      },
                      title: {
                        display: false,
                      },
                    },
                    scales: {
                      x: {
                        grid: {
                          display: false,
                        },
                        ticks: {
                          font: {
                            size: 14,
                          },
                          color: document.querySelector(".chart-ticks")
                            ? getComputedStyle(
                                document.querySelector(".chart-ticks")
                              ).color
                            : "#333",
                        },
                      },
                      y: {
                        beginAtZero: true,
                        grid: {
                          color: document.querySelector(".chart-grid")
                            ? getComputedStyle(
                                document.querySelector(".chart-grid")
                              ).color
                            : "rgba(200, 200, 200, 0.3)",
                        },
                        ticks: {
                          font: {
                            size: 14,
                          },
                          color: document.querySelector(".chart-ticks")
                            ? getComputedStyle(
                                document.querySelector(".chart-ticks")
                              ).color
                            : "#333",
                        },
                      },
                    },
                  }}
                />
              </div>
              <div className="chart-container">
                <div className="chart-title">날짜별 공부 시간</div>
                <Line
                  data={getLineChartData()}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: "top",
                        labels: {
                          font: {
                            size: 14,
                          },
                          color: document.querySelector(".chart-legend")
                            ? getComputedStyle(
                                document.querySelector(".chart-legend")
                              ).color
                            : "#333",
                        },
                      },
                      title: {
                        display: false,
                      },
                    },
                    scales: {
                      x: {
                        grid: {
                          display: false,
                        },
                        ticks: {
                          font: {
                            size: 14,
                          },
                          color: document.querySelector(".chart-ticks")
                            ? getComputedStyle(
                                document.querySelector(".chart-ticks")
                              ).color
                            : "#333",
                        },
                      },
                      y: {
                        beginAtZero: true,
                        grid: {
                          color: document.querySelector(".chart-grid")
                            ? getComputedStyle(
                                document.querySelector(".chart-grid")
                              ).color
                            : "rgba(200, 200, 200, 0.3)",
                        },
                        ticks: {
                          font: {
                            size: 14,
                          },
                          color: document.querySelector(".chart-ticks")
                            ? getComputedStyle(
                                document.querySelector(".chart-ticks")
                              ).color
                            : "#333",
                        },
                      },
                    },
                  }}
                />
              </div>
            </section>
          </Col>
          <Col xs={12} md={4}>
            <section>
              <h2>
                <b>사용자 정보</b>
              </h2>

              <Image
                className="profile"
                src={getProfileImage(userInfo.profileImage)}
                roundedCircle
              />

              <p>이름: {userInfo.name}</p>
            </section>
            <section>
              <br></br>
              <div>열심히 하셨네요!</div>
              <div>이번에는 숲에서 공부해보시는건 어때요?</div>
              <img src="src\img\cheer.jpeg" alt="cheer" />
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyPage;
