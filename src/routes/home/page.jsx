import ThemeComponent from "../../components/Home/theme/Theme";
import ProfileComponent from "../../components/Home/profile/Profile";
import { Col, Container, Row } from "react-bootstrap";
// import { Display } from "react-bootstrap-icons";
import "./style.css";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [backgroundImage, setBackgroundImage] = useState("");

  // useEffect(()=>{
  //   setBackgroundImage(backgroundImage);
  // }, [backgroundImage])

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`
  };

  return (
    <Container fluid className="full-height-container" style={backgroundStyle}>
      <Row className="full-height-row">
        <Col xs={10} className="full-height-col">
          <ThemeComponent setBackgroundImage={setBackgroundImage} />
        </Col>
        <Col xs={2}></Col>
      </Row>
      <div className="overlay">
        <ProfileComponent />
      </div>
    </Container>
  );
}
