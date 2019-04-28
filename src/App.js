import React from "react";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <h1>Stuff I've Done</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <a href="https://jonathan-meyer.github.io/TriviaGame/">Trivia Game!</a>
            </Col>
          </Row>
          <Row>
            <Col>
              <a href="https://jonathan-meyer.github.io/unit-4-game/">StarWars RPG</a>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
