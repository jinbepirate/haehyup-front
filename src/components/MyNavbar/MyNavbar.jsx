import LogoImg from "~/img/haehyup-logo.jpg";
import {
  Container,
  Nav,
  // NavDropdown,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import "../../App.css";
const EXPAND_BREAKPOINT = "md";
const BRAND_TITLE = "HaeHyup";

// MyNavbar.prototype = {
//   brandTitle: PropTypes.string,
//   offCanvasTitle: PropTypes.string,
// };

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
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
