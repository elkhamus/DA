import { Badge, Container, Nav, Navbar } from "react-bootstrap"
import {NavLink } from "react-router-dom"
import { BsCart4 } from "react-icons/bs"

function Header() {
  return (
    <header>
        <Navbar bg="warning" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="main">LOGO</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink className="nav-link" to="main">Home</NavLink>
                    <NavLink className="nav-link" to="pizza">Pizza</NavLink>
                    <NavLink className="nav-link" to="contact">Contact</NavLink>
                </Nav>
                <span role="button" className="position-relative">
                  <BsCart4 />
                  <Badge className="position-absolute top-0 start-100 translate-middle rounded-pill bg-danger">
                    0</Badge>
                </span>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header