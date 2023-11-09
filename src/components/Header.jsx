import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

import { StyledLink as Link } from "./styles/NavBar.styled";

function Header() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#002d53" }} fixed="top">
      <Container className="align-items-center">
        <Link to={"/"} className="navbar-brand">
          Research Project
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav className="ms-auto align-items-center p-3">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
            <Link to={"/about"} className="nav-link">
              About
            </Link>
            <Link to={"/research"} className="nav-link">
              Research
            </Link>
            <Link to={"/publications"} className="nav-link">
              Publication
            </Link>
            <Link to={"/news"} className="nav-link">
              News and Updates
            </Link>
            {/* <NavDropdown
              title="Language"
              id="basic-nav-dropdown"
              className="drop-down"
              style={{ color: "#fff !important" }}
            >
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Norwegian</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
