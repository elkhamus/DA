import { Container, Nav, Navbar } from "react-bootstrap"
import {NavLink } from "react-router-dom"

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
                <div>test</div>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header