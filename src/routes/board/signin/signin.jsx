import { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./signin.css"; // CSS 파일 추가
import Cookies from 'js-cookie';

export default function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          uid: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // 로그인 성공
        setError("");

        alert("로그인 성공");
        Cookies.set('authToken', data.token, { expires: 7, path: '/' });
        navigate("/home"); // 홈 화면으로 이동
      } else {
        // 로그인 실패
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="text-center">
        <Link to="http://elandland.site:5175/">
          <img
            // src="src/img/haehyup-logo.jpg"
            src="src\img\haehyup-logo.jpg"
            alt=""
            className="signin-image mb-3"
          />
        </Link>
      </div>
      <Container className="signin-container">
        <Row className="justify-content-md-center mt-5">
          <Col md={6}>
            <h1 className="text-center">Log In</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <br />
            <br />
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a password.
                </Form.Control.Feedback>
              </Form.Group>

              <div className="d-grid gap-2 mt-4">
                <Button variant="primary" type="submit">
                  Log In
                </Button>
                <Button as={Link} to="/signup" variant="secondary">
                  Sign Up
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
