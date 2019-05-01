import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

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
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sequi odio officia? Mollitia temporibus doloribus illo inventore tenetur similique!
            Ipsam magnam laborum porro, soluta nihil blanditiis iste. Mollitia a aliquid placeat ipsam impedit quos, exercitationem ducimus voluptatum
            aspernatur inventore consectetur nihil accusamus iure, eaque quaerat adipisci, dolores aliquam optio enim eius. Placeat voluptatum ad impedit
            tenetur dolore. Non consectetur nostrum, exercitationem obcaecati, sapiente nulla sit dignissimos eum vel, eius culpa minima recusandae aut placeat
            cum quis explicabo nemo mollitia fugit reprehenderit. Rem, deleniti? Aspernatur repellendus ex blanditiis illum hic eaque deleniti iusto, aliquid et
            ipsa voluptas, animi molestias cupiditate, cumque ullam quis. Dolore commodi id sed tempore iusto itaque, a fugiat at debitis corporis dolorem,
            optio, odit quo autem quia aliquam? Ad, dolorum. Asperiores repellat qui molestias consequuntur aspernatur amet, aliquam quis ab maxime quae quidem,
            reprehenderit consectetur perferendis? Cum consequuntur accusantium veniam blanditiis praesentium eveniet reprehenderit laboriosam omnis,
            consectetur quos hic, deleniti fugiat ea, magni quam neque optio illo at fuga voluptatem! Quae ullam, quod iusto cumque illo sed quis nemo hic
            suscipit enim distinctio expedita accusantium, sit doloribus.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;
