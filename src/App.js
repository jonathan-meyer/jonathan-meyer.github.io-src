import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Home from "./Home";
import About from "./About";

import "./App.css";

function App() {
  return (
    <Router>
      <Container>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <span role="img" aria-label="White and Nerdy">
              👱🏻‍
            </span>
            Jonathan Meyer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Container>
    </Router>
  );
}

export default App;
