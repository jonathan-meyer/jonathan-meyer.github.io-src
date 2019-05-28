import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import ListGroup from "react-bootstrap/ListGroup";

function Home() {
  return (
    <Container className="my-3">
      <Card className="bg-dark text-light">
        <Card.Header>
          <h4>Home</h4>
        </Card.Header>
        <Card.Body>
          <Card.Title>Stuff I've Done</Card.Title>
          <Card.Text>The following is a list of JavaScript web apps that I have created.</Card.Text>
          <ListGroup>
            <ListGroup.Item>
              <Nav.Link href="https://jonathan-meyer.github.io/TriviaGame/">Trivia Game!</Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Nav.Link href="https://jonathan-meyer.github.io/unit-4-game/">StarWars RPG</Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Nav.Link href="https://jonathan-meyer.github.io/jif-e-tas-tick/">Jif-E Tas-Tick</Nav.Link>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
