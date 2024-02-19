import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../Images/logo.png";

type HeaderStyle = {
  firstColor: React.CSSProperties;
  SecondColor: React.CSSProperties;
};

export default function Header(props: HeaderStyle) {
  return (
    <Navbar expand="lg" style={props.firstColor}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className="w-10" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={props.SecondColor}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/#top" className="nav-link">
              <span className="innertext text-white mx-5">Home</span>
            </Nav.Link>

            <Nav.Link as={Link} to="/#About" className="nav-link">
              <span className="innertext text-white mx-5">About</span>
            </Nav.Link>

            <Nav.Link as={Link} to="/#Education" className="nav-link">
              <span className="innertext text-white mx-5">Education</span>
            </Nav.Link>

            <Nav.Link as={Link} to="/#Skills" className="nav-link">
              <span className="innertext text-white mx-5">Skills</span>
            </Nav.Link>

            <Nav.Link as={Link} to="/Contact#top" className="nav-link">
              <span className="innertext text-white mx-5">Contact</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
