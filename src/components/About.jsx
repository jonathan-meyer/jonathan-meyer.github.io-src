import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const data = [["1974", <h2>Born</h2>], ["1992", <h2>High School</h2>]];

const About = () => {
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
        </Card.Body>
      </Card>
      <VerticalTimeline>
        {data.map((e, k) => (
          <VerticalTimelineElement iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} key={k} date={e[0]}>
            {e[1]}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  );
};

export default About;
