import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import "react-vertical-timeline-component/style.min.css";
import data from "../data.json";

const iconStyle = { background: "rgb(33, 150, 243)", color: "#fff" };
const icon = <div style={{ width: 24, heigth: 24 }} />;

const About = () => {
  return (
    <Container className="my-3 px-0">
      <Card className="bg-dark text-light">
        <Card.Header>
          <h2>About Me</h2>
        </Card.Header>
        <Card.Body>
          <div className="clearfix">
            <Image
              className="float-left mr-3"
              thumbnail={false}
              rounded={true}
              src="../old/mug.jpg"
            />
            {[data.aboutMe].flat().map((p, k) => (
              <Card.Text key={k}>{p}</Card.Text>
            ))}
          </div>
          <VerticalTimeline>
            {data.timeLine.reverse().map((e, k) => (
              <VerticalTimelineElement
                key={k}
                className="vertical-timeline-element--work"
                iconStyle={iconStyle}
                icon={icon}
                date={e.date}
              >
                <h2>{e.title}</h2>
                {[e.body].flat().map((p, k) => (
                  <p key={k}>{p}</p>
                ))}
                {e.image && (
                  <img
                    width={320}
                    src={e.image.url}
                    alt={e.image.title}
                    className="img-thumbnail"
                  />
                )}
                <div>
                  {e.links &&
                    e.links.map((l, k) => (
                      <span key={k} style={{ color: "black" }}>
                        {"["}
                        <a
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {l.label}
                        </a>
                        {"] "}
                      </span>
                    ))}
                </div>
              </VerticalTimelineElement>
            ))}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{
                backgroundColor: "lawngreen"
              }}
            />
          </VerticalTimeline>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
