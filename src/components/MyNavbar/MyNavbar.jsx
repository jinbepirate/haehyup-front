import LogoImg from "~/img/haehyup-logo.jpg";
import { Container, Nav, Button, Navbar, Offcanvas } from "react-bootstrap";
import "../../App.css";
const EXPAND_BREAKPOINT = "md";
const BRAND_TITLE = "HaeHyup";

// MyNavbar.prototype = {
//   brandTitle: PropTypes.string,
//   offCanvasTitle: PropTypes.string,
// };

async function handleLogout() {
  try {
    const response = await fetch("https://172.16.1.84:4000/api/users/logout", {
      method: "POST", // or 'GET' depending on the server implementation
    });

    if (response.status === 204) {
      console.log("Logout successful");
      // 추가적으로 로그아웃 후 필요한 처리를 여기에 추가합니다.
      // 예: 페이지 리디렉션
      window.location.href = "/signin"; // 로그아웃 후 로그인 페이지로 이동
    } else {
      const errorData = await response.json();
      console.error("Logout failed:", errorData.error);
      alert(`Logout failed: ${errorData.error}`);
    }
  } catch (error) {
    console.error("An error occurred during logout:", error);
    alert("An error occurred during logout. Please try again.");
  }
}

export default function MyNavbar() {
  return (
    <Navbar
      expand={EXPAND_BREAKPOINT}
      // className="mb-3"
      sticky="top"
      bg="dark"
      variant="dark"
    >
      <Container fluid style={{ fontFamily: "TTLaundryGothicB" }}>
        <Navbar.Brand href="/">
          <img src={LogoImg} alt="logo image" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`Navbar-expand-${EXPAND_BREAKPOINT}`} />
        <Navbar.Offcanvas
          id={`Navbar-expand-${EXPAND_BREAKPOINT}`}
          aria-labelledby={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}>
              {BRAND_TITLE}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="flex-row-reverse">
            <Nav className="justify-content-start flex-grow-1 pe-3">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/memo">Memo</Nav.Link>
              <Nav.Link href="#" onClick={handleLogout}>
                Logout
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
