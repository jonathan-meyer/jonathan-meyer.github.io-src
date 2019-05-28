import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import "react-vertical-timeline-component/style.min.css";

const iconStyle = { background: "rgb(33, 150, 243)", color: "#fff" };
const icon = <FontAwesomeIcon icon={faCoffee} />;

const About = () => {
  return (
    <Container className="my-3">
      <Card className="bg-dark text-light">
        <Card.Header>
          <h4>About :: White and Nerdy</h4>
        </Card.Header>
        <Card.Body>
          <div className="clearfix">
            <Image className="float-left mr-3" thumbnail={false} rounded={true} src="../old/mug.jpg" />
            <Card.Text>I'm an average guy who likes nerdy things.</Card.Text>
          </div>
          <VerticalTimeline>
            <VerticalTimelineElement iconStyle={iconStyle} icon={icon} date={"January 1974"}>
              <h2>Born</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aspernatur ex nesciunt unde dicta sed molestiae, assumenda magnam ipsa corrupti
                sunt hic neque adipisci rem? Assumenda voluptate sit optio aut.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement iconStyle={iconStyle} icon={icon} date={"May 1992"}>
              <h2>High School</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aspernatur ex nesciunt unde dicta sed molestiae, assumenda magnam ipsa corrupti
                sunt hic neque adipisci rem? Assumenda voluptate sit optio aut.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
