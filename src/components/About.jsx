import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Timeline from "react-dual-timeline";

function About() {
  return (
    <Container className="my-3">
      <Card className="bg-dark text-light">
        <Card.Header>
          <h4>About</h4>
        </Card.Header>
        <Card.Body>
          <Card.Title>White and Nerdy</Card.Title>
          <Image className="float-left mr-3" thumbnail={false} rounded={true} src="../old/mug.jpg" />
          <Card.Text>I'm an average guy who likes nerdy things.</Card.Text>
          <Timeline>
            <div icon="x">Born</div>
          </Timeline>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;
