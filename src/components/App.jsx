import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Emoji from "@stej/emoji";

import "./App.css";
import About from "./About";

function App() {
  return (
    <Container className="px-0">
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <Emoji>:bearded_person_tone2: Jonathan Meyer</Emoji>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="https://github.com/jonathan-meyer" target="_blank">
              GitHub
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/jonathan-meyer-4a6845a"
              target="_blank"
            >
              LinkedIn
            </Nav.Link>
            <Nav.Link href="http://zorkonline.net" target="_blank">
              Zorkonline
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <About />
    </Container>
  );
}

export default App;
