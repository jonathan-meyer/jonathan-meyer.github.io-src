import React from "react";
import ReactDOM from "react-dom";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import request from "superagent";
import { toImage } from "emoji-toolkit";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const iconStyle = { background: "rgb(33, 150, 243)", color: "#fff" };
const icon = <div style={{ width: 48, height: 48 }} />;

class About extends React.Component {
  state = { data: null };

  componentDidMount() {
    request.get("/data.json").then(({ body }) => {
      this.setState({ data: body });
    });
  }

  render() {
    const { data } = this.state;

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
                src={data && data.avatar}
              />
              {data &&
                [data.aboutMe]
                  .flat()
                  .map((p, k) => <Card.Text key={k}>{p}</Card.Text>)}
            </div>
            {data && (
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
            )}
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default About;
