import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from "react-bootstrap";

const EXPAND_BREAKPOINT = "md";

// MyNavbar.propTypes = {
//   brandTitle: String,
//   offCanvasTitle: String,
// };

export default function MyNavbar({ brandTitle, offCanvasTitle }) {
  return (
    <Navbar
      expand={EXPAND_BREAKPOINT}
      className="mb-3"
      sticky="top"
      bg="dark"
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#">{brandTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls={`Navbar-expand-${EXPAND_BREAKPOINT}`} />
        <Navbar.Offcanvas
          id={`Navbar-expand-${EXPAND_BREAKPOINT}`}
          aria-labelledby={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}
          placement="end"
        >
          {/* 다음장 삽입 */}
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}>
              {offCanvasTitle || brandTitle}
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="flex-row-reverse">
            <Nav
              className={`justify-content-around flex-row pb-4 pb-${EXPAND_BREAKPOINT}-0`}
            >
              <Nav.Link
                href="/board/signin"
                className="flex-grow-1 text-center border border-dark border-end-0"
              >
                로그인
              </Nav.Link>
              <Nav.Link
                href="/board/signup"
                className="flex-grow-1 text-center border border-dark"
              >
                회원가입
              </Nav.Link>
            </Nav>
            <Nav className="justify-content-start flex-grow-1 pe-3">
              <Nav.Link href="/">Main Page</Nav.Link>
              <Nav.Link href="/board">게시판</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
