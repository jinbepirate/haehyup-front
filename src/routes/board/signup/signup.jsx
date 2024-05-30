import { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import "../../../App.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");

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

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    console.log(formData.username, formData.password);

    try {
      const response = await fetch(
        "https://172.16.1.84:4000/api/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uid: formData.username,
            password: formData.password,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      const result = await response.json();
      console.log(result);
      // 성공적으로 회원가입이 완료되면, 오류 메시지를 초기화
      setError("");
      alert("Signup successful!");

      // 폼 데이터 초기화
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      setError(error.message || "An error occurred during signup");
    }
  };

  return (
    <>
      <Container style={{ fontFamily: "TTLaundryGothicB" }}>
        <Row className="justify-content-md-center mt-5">
          <Col
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "space-evenly",
            }}
          >
            <h1 style={{ fontSize: "60px" }}>
              <b>Welcome to HaeHyup !</b>
            </h1>
            <br />
            <p>
              모각코에 관심이 있는 당신, 어서 빨리 🌊해협🌊과 함께 하세요.
              <br /> 얼마 남지 않았어요!
            </p>
            <img
              src="src/img/sign-up.png"
              alt="Signup illustration"
              className="img-fluid mt-3"
            />
          </Col>
          <Col md={6}>
            <h1>Signup</h1>
            <br />
            <br />
            {error && <Alert variant="danger">{error}</Alert>}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a username.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mt-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  value={formData.email}
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

              <Form.Group controlId="formConfirmPassword" className="mt-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please confirm your password.
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-4">
                Signup
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
