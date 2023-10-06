import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar expand="lg" className=" py-4 nav-bar">
        <Container>
          <Navbar.Brand className="text-white">Brand</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll " />
          <Navbar.Collapse id="navbarScroll">
            <div className="ms-auto">
              <Nav className=" my-lg-0 ps-5 gap-5" navbarScroll>
                <Nav className="text-white ">
                  <Link to="/home" className="link pt-2">
                    HOME
                  </Link>
                </Nav>
                <Nav className="text-white">
                  <Link to="/top-shows" className="link pt-2">
                    TOP IMDB SHOWS
                  </Link>
                </Nav>
                <Nav className="text-white ">
                  <Link to="/top-rated" className="link pt-2">
                    TOP IMDB MOVIES
                  </Link>
                </Nav>
                <Nav className="text-white ">
                  <Link to="/contact" className="link pt-2">
                    CONTACT
                  </Link>
                </Nav>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
